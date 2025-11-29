import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const QUESTIONS_PROMPT = `
Generate a mock interview set of 10 questions for a Data Analyst interview. Include two HR screening questions, three technical questions (SQL, coding, or data transformation logic), one real business case scenario, one data visualization interpretation question, one behavioral question, one managerial/leadership question, and one advanced analytics question.

Return exactly 10 questions in a numbered list format:
1. Question text here
2. Question text here
3. Question text here
4. Question text here
5. Question text here
6. Question text here
7. Question text here
8. Question text here
9. Question text here
10. Question text here

Do not include any introduction, summary, or extra sentences outside the numbered questions.
`.trim();

const FEEDBACK_PROMPT = `
You are acting as a senior hiring manager evaluating a Data Analyst candidate.
You will be given a list of 10 interview questions and the candidate's answers.
Your job is to provide a detailed evaluation with the following structure:

1. Overall Impression (3–5 sentences)
2. Strengths (bullet points)
3. Weak Areas (bullet points)
4. Question-by-Question Feedback:
   For each question:
     - What the candidate did well
     - What was missing
     - How the answer could be improved
5. Technical Skill Assessment:
   - SQL
   - Python / logic reasoning
   - Business case thinking
   - Data visualization understanding
   - Communication clarity
   - Problem-solving ability
   - Behavioral & managerial qualities
6. Final Recommendation:
   - Hire / Strong Maybe / Needs Improvement
7. Actionable Improvement Plan:
   Provide a 5-step plan the candidate should follow to improve.

Return ONLY the feedback, no JSON or metadata.
`.trim();

const FALLBACK_QUESTIONS: string[] = [
  'Tell me about your background and why this data analyst role excites you.',
  'What motivates you in a new opportunity, and how do you evaluate company fit?',
  'Write a SQL query to find the top 5 products by revenue in the last 30 days.',
  'Describe how you would debug a Python data cleaning script that suddenly produces null-heavy outputs.',
  'Explain your approach to validating and cleaning a messy customer transactions dataset.',
  'A regional sales dip is reported. Walk me through how you would investigate this business case and recommend next steps.',
  'Given a multi-series line chart showing marketing spend versus conversions, what insights would you highlight to leadership?',
  'Share a behavioral example where you resolved conflicting stakeholder opinions using the STAR method.',
  'Describe a time you had to make a difficult leadership or prioritization decision for your analytics roadmap.',
  'How would you design and interpret an A/B test to evaluate a new onboarding flow for power users?',
];

const MODEL = import.meta.env.VITE_GROQ_MODEL || 'llama-3.1-8b-instant';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const ensureTenQuestions = (incoming: string[]): string[] => {
  const unique = incoming.filter(Boolean);
  for (const fallback of FALLBACK_QUESTIONS) {
    if (unique.length >= 10) {
      break;
    }
    if (!unique.some((question) => question.toLowerCase() === fallback.toLowerCase())) {
      unique.push(fallback);
    }
  }
  return unique.slice(0, 10);
};

const parseQuestionsFromText = (raw: string): string[] => {
  if (!raw) {
    return [];
  }
  return raw
    .trim()
    .split(/\n+/)
    .map((line) => line.trim())
    .filter((line) => /^\d+\./.test(line))
    .map((line) => line.replace(/^\d+\.\s*/, '').trim())
    .filter(Boolean);
};

const buildFeedbackPrompt = (formattedTranscript: string) => `
${FEEDBACK_PROMPT}

Interview Transcript:
${formattedTranscript}
`.trim();

export default function MockInterview() {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;
  console.log("LOADED GROQ KEY:", import.meta.env.VITE_GROQ_API_KEY);
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>(Array(10).fill(''));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stage, setStage] = useState<'loading' | 'interview' | 'summary'>('loading');
  const [questionError, setQuestionError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');
  const [feedbackStatus, setFeedbackStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');
  const [feedbackError, setFeedbackError] = useState<string | null>(null);
  const feedbackRequestedRef = useRef(false);

  type GroqMessage = { role: 'system' | 'user'; content: string };

  const callGroq = async (messages: GroqMessage[], maxTokens = 1500, temperature = 0.4) => {
    if (!apiKey) {
      throw new Error('Missing VITE_GROQ_API_KEY. Please add it to your environment to enable Groq requests.');
    }

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        temperature,
        max_tokens: maxTokens,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Groq API error: ${errorBody || response.statusText}`);
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content?.trim();
    if (!content) {
      throw new Error('Groq API returned an empty response.');
    }
    return content;
  };

  useEffect(() => {
    let cancelled = false;

    const loadQuestions = async () => {
      try {
        let generated: string[] = [];
        if (apiKey) {
          const response = await callGroq(
            [
              {
                role: 'system',
                content: [
                  'You are a helpful interview coach for data analysts.',
                  'Return exactly 10 questions in a numbered list format:',
                  '1. Question text here',
                  '2. Question text here',
                  '3. Question text here',
                  '4. Question text here',
                  '5. Question text here',
                  '6. Question text here',
                  '7. Question text here',
                  '8. Question text here',
                  '9. Question text here',
                  '10. Question text here',
                  'Do not include any introduction, summary, or extra sentences outside the numbered questions.',
                ].join('\n'),
              },
              { role: 'user', content: QUESTIONS_PROMPT },
            ],
            900,
            0.4,
          );
          generated = parseQuestionsFromText(response);
        } else {
          setQuestionError('Missing Groq API key. Falling back to default question set.');
        }

        const prepared = ensureTenQuestions(generated);
        if (!cancelled) {
          setQuestions(prepared);
          setAnswers(Array(prepared.length).fill(''));
          setStage('interview');
        }
      } catch (error) {
        if (!cancelled) {
          setQuestionError(
            (error as Error).message || 'Unable to load questions from Groq. Using default set.',
          );
          const prepared = ensureTenQuestions([]);
          setQuestions(prepared);
          setAnswers(Array(prepared.length).fill(''));
          setStage('interview');
        }
      }
    };

    loadQuestions();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiKey]);

  const formattedTranscript = useMemo(() => {
    if (!questions.length) {
      return '';
    }
    return questions
      .map((question, idx) => {
        const answer = answers[idx]?.trim() || '(no answer provided)';
        return [`Q${idx + 1}: ${question}`, `A${idx + 1}: ${answer}`].join('\n');
      })
      .join('\n\n');
  }, [questions, answers]);

  useEffect(() => {
    if (stage !== 'summary') return;
    if (feedbackRequestedRef.current) return;
    if (!formattedTranscript) return;

    let cancelled = false;
    feedbackRequestedRef.current = true;

    const fetchFeedback = async () => {
      if (!apiKey) {
        setFeedbackStatus('error');
        setFeedbackError('Missing Groq API key. Add VITE_GROQ_API_KEY to enable AI feedback.');
        console.error('Missing Groq API key.');
        return;
      }

      try {
        console.info('Fetching AI feedback from Groq...');
        setFeedbackStatus('loading');
        setFeedbackError(null);

        const prompt = buildFeedbackPrompt(formattedTranscript);
        const response = await callGroq([{ role: 'user', content: prompt }], 2200, 0.3);

        if (!cancelled) {
          console.info('AI feedback received.');
          setFeedback(response);
          setFeedbackStatus('success');
        }
      } catch (err) {
        if (!cancelled) {
          console.error('Error fetching feedback:', err);
          setFeedbackStatus('error');
          setFeedbackError((err as Error).message || 'Unable to fetch AI feedback.');
        }
      }
    };

    fetchFeedback();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, formattedTranscript, apiKey]);

  const currentAnswer = answers[currentIndex] || '';
  const canProceed = currentAnswer.trim().length > 0;
  const progressPercent = questions.length ? ((currentIndex + 1) / questions.length) * 100 : 0;

  const handleAnswerChange = (value: string) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = value;
      return next;
    });
  };

  const handleNext = () => {
    if (!canProceed) {
      return;
    }
    if (currentIndex === questions.length - 1) {
      setStage('summary');
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleRestart = () => {
    setQuestions([]);
    setAnswers(Array(10).fill(''));
    setCurrentIndex(0);
    setStage('loading');
    setFeedback('');
    setFeedbackStatus('idle');
    setFeedbackError(null);
    setQuestionError(null);
    // Trigger useEffect again by toggling a noop state? Reload page for simplicity.
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-pastel py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link
            to="/interview"
            className="text-sm font-medium text-accent hover:text-accent-dark transition-colors"
          >
            ← Back to rounds
          </Link>
          <span className="text-sm text-text/70">Total questions: 10</span>
        </div>

        <div className="bg-white rounded-card shadow-sm p-8 sm:p-10 space-y-6">
          <div>
            <p className="text-sm uppercase tracking-wide text-text/50 mb-2">
              Mock Interview Simulation
            </p>
            <h1 className="text-3xl font-bold text-text">AI-powered practice session</h1>
            <p className="text-text/70 mt-2">
              Move through each question, capture your responses, and receive personalized feedback at
              the end.
            </p>
          </div>

          {questionError && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900 text-sm">
              {questionError}
            </div>
          )}

          {stage === 'loading' && (
            <div className="text-center py-16">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full border-4 border-muted border-t-accent animate-spin" />
              <p className="text-lg font-medium text-text">Building your interview set...</p>
              <p className="text-text/60 mt-2">Fetching dynamic prompts from Groq AI.</p>
            </div>
          )}

          {stage === 'interview' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between text-sm text-text/70 mb-2">
                  <span>
                    Question {currentIndex + 1} of {questions.length}
                  </span>
                  <span>{Math.round(progressPercent)}% complete</span>
                </div>
                <div className="h-2 rounded-full bg-muted/40 overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-2xl font-semibold text-text leading-snug">
                  {questions[currentIndex]}
                </p>
                <textarea
                  className="w-full min-h-[220px] rounded-2xl border border-muted/60 bg-muted/20 p-4 text-lg text-text placeholder:text-text/40 focus:border-accent focus:ring-2 focus:ring-accent/30 transition"
                  value={currentAnswer}
                  onChange={(event) => handleAnswerChange(event.target.value)}
                  placeholder="Type your answer here..."
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentIndex === 0}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-muted/60 text-text font-semibold transition disabled:opacity-40 hover:bg-muted/20"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-accent text-white font-semibold shadow-sm transition hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {currentIndex === questions.length - 1 ? 'Finish Interview' : 'Next Question'}
                </button>
              </div>
            </div>
          )}

          {stage === 'summary' && (
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-wide text-text/50 mb-2">Interview summary</p>
                <h2 className="text-2xl font-semibold text-text">Your responses</h2>
              </div>

              <div className="space-y-4">
                {questions.map((question, idx) => (
                  <div
                    key={question}
                    className="rounded-2xl border border-muted/40 bg-muted/10 p-5 space-y-3"
                  >
                    <p className="text-xs font-semibold text-text/60 uppercase">
                      Question {idx + 1}
                    </p>
                    <p className="text-lg font-semibold text-text">{question}</p>
                    <p className="text-text/80 whitespace-pre-line">
                      {answers[idx]?.trim() || 'No answer provided.'}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-accent mb-1">
                      AI feedback & improvement report
                    </p>
                    <h3 className="text-2xl font-semibold text-text">
                      Personalized recommendations
                    </h3>
                  </div>
                  {feedbackStatus === 'loading' && (
                    <div className="h-8 w-8 rounded-full border-3 border-accent/30 border-t-accent animate-spin" />
                  )}
                </div>
                {feedbackStatus === 'error' && feedbackError && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-900 text-sm">
                    {feedbackError}
                  </div>
                )}
                {feedbackStatus === 'success' && feedback && (
                  <div className="prose prose-slate max-w-none text-text/80 whitespace-pre-wrap">
                    {feedback}
                  </div>
                )}
                {feedbackStatus === 'loading' && (
                  <p className="text-text/70">
                    Compiling a detailed review of your strengths, gaps, and next steps...
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-muted/60 text-text font-semibold hover:bg-muted/20 transition"
                >
                  Restart simulation
                </button>
                <Link
                  to="/interview"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-accent text-white text-center font-semibold shadow-sm hover:shadow-md transition"
                >
                  Return home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


