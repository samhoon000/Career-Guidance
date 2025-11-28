import { Link } from 'react-router-dom';
import { MCQGroup } from '../components/MCQGroup';
import { CompletionButton } from '../components/CompletionButton';

export const Round_Behavioral = () => {
  const mcqs = [
    {
      question: 'What is the correct order of the STAR framework?',
      options: [
        { label: 'A) Situation, Action, Task, Result', value: 'A' },
        { label: 'B) Situation, Task, Action, Result', value: 'B', isCorrect: true },
        { label: 'C) Setup, Task, Analysis, Reflection', value: 'C' },
      ],
    },
    {
      question: 'Which answer best demonstrates accountability in a behavioral story?',
      options: [
        {
          label: 'A) “The report was wrong because engineering changed the data and I could not do anything.”',
          value: 'A',
        },
        {
          label:
            'B) “I noticed the issue, owned the investigation, aligned with engineering, and implemented checks to prevent it again.”',
          value: 'B',
          isCorrect: true,
        },
        {
          label: 'C) “I stayed out of it because that dashboard was not originally my responsibility.”',
          value: 'C',
        },
      ],
    },
    {
      question:
        'In a conflict with a stakeholder, which response fits a strong behavioral example for a data analyst?',
      options: [
        {
          label:
            'A) “I listened to their concerns, clarified goals, and used data to propose a compromise that met both of our needs.”',
          value: 'A',
          isCorrect: true,
        },
        { label: 'B) “I pushed my view until they gave up.”', value: 'B' },
        { label: 'C) “I avoided the discussion and let my manager handle it.”', value: 'C' },
      ],
    },
    {
      question: 'For a behavioral story about communication, what should you emphasize most?',
      options: [
        { label: 'A) How many technical buzzwords you used', value: 'A' },
        {
          label: 'B) How you adapted your explanation to your audience and confirmed they understood',
          value: 'B',
          isCorrect: true,
        },
        { label: 'C) How long your presentation lasted', value: 'C' },
      ],
    },
    {
      question: 'Which of the following is a good STAR-style Result statement?',
      options: [
        { label: 'A) “People liked it.”', value: 'A' },
        {
          label:
            'B) “The new dashboard cut manual reporting time by 30% and increased weekly adoption from 3 to 8 teams.”',
          value: 'B',
          isCorrect: true,
        },
        { label: 'C) “We finished something eventually.”', value: 'C' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-pastel py-12 px-4 sm:px-6 lg:px-8 text-lg leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/interview/data-analyst"
          className="inline-flex items-center gap-2 text-lg px-5 py-3 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors mb-6 font-medium"
        >
          ← Back to Home
        </Link>

        <div className="bg-white rounded-card shadow-sm p-10 sm:p-12 mb-6">
          {/* 1. Header */}
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-text mb-6">
              ROUND 5 — Behavioral Interview (STAR Method)
            </h1>
            <p className="text-text/80 mb-4 text-lg leading-relaxed">
              The behavioral interview tests how you work with others: your communication style, ownership,
              problem‑solving, and how you navigate conflict and ambiguity. Instead of asking hypothetical
              questions, interviewers ask you to walk through real situations from your past experience.
            </p>
            <p className="text-text/80 mb-4 text-lg leading-relaxed">
              For this round, the core structure is the <span className="font-semibold">STAR method</span> —
              Situation, Task, Action, Result. Strong answers use this structure to clearly explain what
              happened, what you were responsible for, what you did, and what impact you had.
            </p>
            <p className="text-text/80 text-lg leading-relaxed">
              For data analysts, behavioral rounds are critical because success rarely depends only on SQL or
              models. You win by aligning stakeholders, communicating insights in plain language, and
              influencing decisions. Interviewers are listening for whether you can turn messy, human
              situations into clear, outcome‑oriented stories.
            </p>
          </header>

          {/* 2. STAR Framework Breakdown */}
          <section className="mb-12" aria-labelledby="star-framework-heading">
            <h2
              id="star-framework-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              STAR framework — your default storytelling template
            </h2>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <div className="bg-slate-50 rounded-card p-6 sm:p-7 border border-slate-100">
                <h3 className="text-2xl font-semibold text-text mb-4">What STAR stands for</h3>
                <dl className="space-y-3 text-text/80">
                  <div>
                    <dt className="font-semibold text-text">S — Situation</dt>
                    <dd>
                      Provide just enough context: where you were, what team you were on, and what was going
                      wrong or needed to change.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-text">T — Task</dt>
                    <dd>
                      Clarify what you were responsible for — your specific goal, target, or expectation in
                      that moment.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-text">A — Action</dt>
                    <dd>
                      Describe what <span className="font-semibold">you</span> did: decisions, analyses, and
                      conversations you led to move things forward.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-text">R — Result</dt>
                    <dd>
                      Share the outcome and impact — ideally with metrics, but also qualitative changes such
                      as trust, clarity, or process reliability.
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-slate-50 rounded-card p-6 sm:p-7 border border-slate-100">
                <h3 className="text-2xl font-semibold text-text mb-4">Sample STAR sentences</h3>
                <ul className="space-y-3 text-text/80">
                  <li>
                    <span className="font-semibold">Situation:</span> “Our monthly revenue report started
                    showing inconsistent numbers after a new vendor integration.”
                  </li>
                  <li>
                    <span className="font-semibold">Task:</span> “I needed to identify the root cause quickly
                    and restore trust in the reporting within the next cycle.”
                  </li>
                  <li>
                    <span className="font-semibold">Action:</span> “I traced the issue to a broken mapping in
                    the ETL, fixed the template, aligned with engineering on ownership, and added automated
                    validation checks before each refresh.”
                  </li>
                  <li>
                    <span className="font-semibold">Result:</span> “We reduced reporting errors by 40% in one
                    month and leadership regained confidence in using the dashboard for weekly decisions.”
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-text/80 text-lg leading-relaxed">
              A good rule of thumb: keep <span className="font-semibold">Situation + Task</span> short (30–40%
              of your time) and spend most of the answer on <span className="font-semibold">Action +
              Result</span>, where your behavior and impact really show.
            </p>
          </section>

          {/* 3. Realistic Behavioral Questions with Model Answers */}
          <section className="mb-12" aria-labelledby="behavioral-examples-heading">
            <h2
              id="behavioral-examples-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Common behavioral questions with model STAR answers
            </h2>

            <div className="space-y-8">
              {/* Example 1 */}
              <article className="bg-slate-50 rounded-card p-6 sm:p-7 border border-slate-100">
                <h3 className="text-2xl font-semibold text-text mb-3">
                  1. “Tell me about a time you solved a difficult data‑related problem.”
                </h3>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Situation:</span> “At my previous company, our key product
                  dashboard suddenly showed a 20% drop in daily active users. Leadership was alarmed and
                  paused roadmap decisions until we understood what was happening.”
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Task:</span> “I was asked to quickly determine whether this
                  was a genuine usage decline or a data quality issue, and to provide a clear explanation for
                  the executive team within 48 hours.”
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Action:</span> “I compared user‑level logs before and after
                  the drop and noticed that the decline lined up exactly with a tracking change from the
                  mobile team. I set up a small test query using the raw events table and confirmed that
                  events were still being generated but were no longer mapped to the same user ID field in
                  our warehouse. I pulled engineering into a quick sync, walked them through the evidence, and
                  we agreed on a hotfix. In parallel, I built a short Loom walkthrough so non‑technical
                  stakeholders could understand the issue in plain language.”
                </p>
                <p className="text-text/80">
                  <span className="font-semibold">Result:</span> “Within 24 hours we restored the correct user
                  mapping, the ‘drop’ disappeared, and we added a checklist to validate tracking changes
                  before deployment. Leadership appreciated the fast, calm explanation and kept their roadmap
                  decisions on track.”
                </p>
              </article>

              {/* Example 2 */}
              <article className="bg-slate-50 rounded-card p-6 sm:p-7 border border-slate-100">
                <h3 className="text-2xl font-semibold text-text mb-3">
                  2. “Describe a conflict with a stakeholder and how you resolved it.”
                </h3>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Situation:</span> “I supported the marketing team on
                  campaign performance. A senior marketer felt our attribution model was under‑crediting
                  their channel and challenged my analysis in a larger meeting.”
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Task:</span> “My goal was to protect analytical integrity
                  while keeping the relationship constructive, and to align on a measurement approach we
                  could both stand behind.”
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Action:</span> “Instead of arguing in the meeting, I
                  acknowledged their concern and suggested we review the data one‑on‑one. In our follow‑up, I
                  asked questions to understand what success looked like from their perspective, then walked
                  through how the current model worked, including its limitations. I proposed running a simple
                  experiment: compare our multi‑touch model to their preferred last‑click view over a month
                  and share the results jointly. I also invited them to help define what ‘fair credit’ meant
                  so they felt ownership of the solution.”
                </p>
                <p className="text-text/80">
                  <span className="font-semibold">Result:</span> “The experiment showed that while last‑click
                  slightly increased their reported impact, it overstated short‑term spikes. We agreed on a
                  hybrid view for leadership decks and documented when to use each lens. The stakeholder later
                  described me as ‘a partner, not a gatekeeper’ in their feedback.”
                </p>
              </article>

              {/* Example 3 */}
              <article className="bg-slate-50 rounded-card p-6 sm:p-7 border border-slate-100">
                <h3 className="text-2xl font-semibold text-text mb-3">
                  3. “Talk about a time you explained a complex insight to a non‑technical audience.”
                </h3>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Situation:</span> “Our leadership team was considering
                  changing our pricing model, and I was asked to present an elasticity analysis that combined
                  experiments, historical data, and cohort behavior.”
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Task:</span> “I needed to distill a complex model into a
                  clear, decision‑ready story for executives who cared about risk, revenue, and customer
                  experience more than technical details.”
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Action:</span> “I started by drafting the ‘headline’ in one
                  sentence and limiting my deck to three key questions: What did we test? What did we learn?
                  What should we do next? I replaced formulas with simple visuals and analogies, like ‘for
                  every 10% price increase, we saw about a 4–5% drop in volume in our core segment.’ During
                  the meeting, I paused after each section to check understanding and invited questions in
                  plain language rather than statistical terms.”
                </p>
                <p className="text-text/80">
                  <span className="font-semibold">Result:</span> “Leadership decided on a moderate price
                  increase for one segment while leaving others unchanged, which lifted monthly revenue by
                  ~8% with minimal churn impact. Several executives later requested that I use the same
                  format for future experiment readouts.”
                </p>
              </article>

              {/* Example 4 */}
              <article className="bg-slate-50 rounded-card p-6 sm:p-7 border border-slate-100">
                <h3 className="text-2xl font-semibold text-text mb-3">
                  4. “Share a situation where you made a mistake and how you handled it.”
                </h3>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Situation:</span> “Early in my role, I published a weekly
                  performance report with a filter error that understated a key metric for one region. A
                  sales leader noticed and escalated the discrepancy.”
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Task:</span> “I needed to quickly correct the mistake,
                  communicate transparently with stakeholders, and prevent similar issues going forward.”
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Action:</span> “I immediately replicated the query,
                  identified the missing region filter, and recalculated the numbers. I sent an updated report
                  the same morning with a short note taking responsibility, explaining the root cause in
                  simple terms, and outlining the fix. Then I added a peer‑review checklist for all recurring
                  reports and set up a small set of automated sanity checks to catch sudden regional drops or
                  spikes before publication.”
                </p>
                <p className="text-text/80">
                  <span className="font-semibold">Result:</span> “Stakeholders appreciated the quick,
                  transparent correction, and we did not have another similar issue over the next six months.
                  My manager later pointed to this incident as evidence that I handle mistakes with maturity
                  and ownership.”
                </p>
              </article>

              {/* Example 5 */}
              <article className="bg-slate-50 rounded-card p-6 sm:p-7 border border-slate-100">
                <h3 className="text-2xl font-semibold text-text mb-3">
                  5. “Give an example of working under pressure with tight deadlines.”
                </h3>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Situation:</span> “Two days before a quarterly board
                  meeting, our VP asked for a new analysis that split revenue trends by a segment we had not
                  previously reported on.”
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Task:</span> “I had to deliver a reliable, easy‑to‑read view
                  of performance by this new segment in time for the board deck, without disrupting other
                  ongoing work.”
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Action:</span> “I clarified exactly which decisions the VP
                  needed to make and limited scope to the metrics that mattered most. I blocked focused time,
                  reused existing logic where possible, and flagged one lower‑priority task to my manager to
                  intentionally defer. I validated the results with a quick spot‑check against known totals
                  and prepared a one‑page summary with the key story and a simple visual.”
                </p>
                <p className="text-text/80">
                  <span className="font-semibold">Result:</span> “The analysis was delivered ahead of the
                  deadline, and the VP used two of my charts directly in the board deck. Afterwards, we
                  productized the logic into a recurring dashboard, reducing future ad‑hoc fire drills.”
                </p>
              </article>
            </div>
          </section>

          {/* 4. Behavioral competency categories */}
          <section className="mb-12" aria-labelledby="competencies-heading">
            <h2
              id="competencies-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Key behavioral competencies for data analysts
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Communication clarity',
                  definition:
                    'Explaining complex data and trade‑offs in simple, structured language that different audiences can follow.',
                  example:
                    'You summarize a complicated experiment in three slides that focus on the decision, not the math.',
                  star: 'Emphasize how you structured your message and checked for understanding (S–T–A–R).',
                  tip: 'Interviewers look for short, concrete sentences and avoidance of unnecessary jargon.',
                },
                {
                  title: 'Stakeholder management',
                  definition:
                    'Aligning with PMs, marketing, finance, and leadership on goals, timelines, and expectations.',
                  example:
                    'You set up a recurring check‑in with a PM to keep an ambiguous analytics request on track.',
                  star: 'Highlight how you clarified the ask (T), drove conversations (A), and improved trust (R).',
                  tip: 'Interviewers listen for how you handle disagreements or shifting priorities without drama.',
                },
                {
                  title: 'Conflict resolution',
                  definition:
                    'Handling disagreements calmly, focusing on facts and shared outcomes rather than blame.',
                  example:
                    'You and a marketing lead disagree on attribution, and you propose a test to compare approaches.',
                  star: 'Use STAR to show how you listened (A), reframed the problem (A), and reached a joint decision (R).',
                  tip: 'Interviewers want to hear that you stayed professional and sought win‑win outcomes.',
                },
                {
                  title: 'Ownership & accountability',
                  definition:
                    'Taking responsibility for results, including fixing issues even when they are not strictly “your fault.”',
                  example:
                    'You discover a reporting bug and proactively coordinate with engineering to resolve it.',
                  star: 'Make the Task and Action very clear; show that you drove the fix and follow‑up, not just observed it.',
                  tip: 'Interviewers pay attention to “I” vs. “we” language and whether you own the consequences.',
                },
                {
                  title: 'Adaptability',
                  definition:
                    'Adjusting to new tools, priorities, or constraints without getting stuck or frustrated.',
                  example:
                    'You switch from one BI tool to another mid‑project and still deliver the analysis on time.',
                  star: 'Describe the change (S), what was expected of you (T), how you adapted (A), and what improved (R).',
                  tip: 'Interviewers look for curiosity and problem‑solving, not complaints about tools or process.',
                },
                {
                  title: 'Time management under pressure',
                  definition:
                    'Prioritizing work, negotiating scope, and delivering on time when you cannot do everything.',
                  example:
                    'Two teams need analyses in the same week and you help them agree on a realistic sequence.',
                  star: 'Show how you clarified priorities (T), negotiated trade‑offs (A), and still delivered impact (R).',
                  tip: 'Interviewers want to hear that you say “no” or “not now” thoughtfully, not that you simply work longer hours.',
                },
                {
                  title: 'Cross‑team collaboration',
                  definition:
                    'Working effectively with engineers, product, design, and operations to ship data‑informed changes.',
                  example:
                    'You partner with engineering to instrument a new feature and measure its success after launch.',
                  star: 'Describe how you aligned on definitions (A), shared context (A), and improved outcomes together (R).',
                  tip: 'Interviewers notice whether you give credit to partners while still explaining your own role.',
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="bg-slate-50 rounded-card p-6 sm:p-7 border border-slate-100"
                >
                  <h3 className="text-2xl font-semibold text-text mb-2">{item.title}</h3>
                  <p className="text-text/80 mb-2">{item.definition}</p>
                  <p className="text-text/80 mb-2">
                    <span className="font-semibold">Example:</span> {item.example}
                  </p>
                  <p className="text-text/80 mb-2">
                    <span className="font-semibold">Suggested STAR focus:</span> {item.star}
                  </p>
                  <p className="text-text/80">
                    <span className="font-semibold">What interviewers look for:</span> {item.tip}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* 5. Do & Don't section */}
          <section className="mb-12" aria-labelledby="dos-donts-heading">
            <h2
              id="dos-donts-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Behavioral interview: do&apos;s and don&apos;ts
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-emerald-50 rounded-card p-6 sm:p-7 border border-emerald-100">
                <h3 className="text-2xl font-semibold text-emerald-900 mb-4">Do</h3>
                <ul className="list-disc list-inside space-y-3 text-emerald-900/90">
                  <li>
                    <span className="font-semibold">Use measurable results:</span> “Increased conversion by
                    3 percentage points” is stronger than “it went well.”
                  </li>
                  <li>
                    <span className="font-semibold">Focus on your personal contribution:</span> Make clear
                    what you specifically did, even in team projects.
                  </li>
                  <li>
                    <span className="font-semibold">Follow a clear STAR structure:</span> Signal the S, T, A,
                    and R explicitly so the interviewer does not have to guess.
                  </li>
                  <li>
                    <span className="font-semibold">Keep answers concise but specific:</span> 2–3 minutes per
                    story with concrete details is usually ideal.
                  </li>
                  <li>
                    <span className="font-semibold">Show emotional intelligence:</span> Mention how others
                    felt, how you listened, and how you maintained trust.
                  </li>
                </ul>
              </div>

              <div className="bg-rose-50 rounded-card p-6 sm:p-7 border border-rose-100">
                <h3 className="text-2xl font-semibold text-rose-900 mb-4">Don&apos;t</h3>
                <ul className="list-disc list-inside space-y-3 text-rose-900/90">
                  <li>
                    <span className="font-semibold">Over‑explain the Situation:</span> Avoid spending most of
                    your time on background instead of your actions.
                  </li>
                  <li>
                    <span className="font-semibold">Blame others:</span> Even if others contributed to the
                    problem, focus on what you did to help.
                  </li>
                  <li>
                    <span className="font-semibold">Take credit for the entire team:</span> Acknowledge
                    collaboration while still explaining your role clearly.
                  </li>
                  <li>
                    <span className="font-semibold">Speak vaguely without metrics:</span> Try to quantify
                    impact or at least describe tangible outcomes.
                  </li>
                  <li>
                    <span className="font-semibold">Tell irrelevant personal stories:</span> Prefer work
                    examples that connect directly to how you would operate in this role.
                  </li>
            </ul>
              </div>
            </div>
          </section>

          {/* 6. Behavioral scenario practice cases */}
          <section className="mb-12" aria-labelledby="practice-scenarios-heading">
            <h2
              id="practice-scenarios-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Practice scenarios — think in STAR before you answer
            </h2>
            <p className="text-text/80 mb-6 text-lg leading-relaxed">
              Read each scenario and mentally outline your answer using STAR. You do not need to write
              anything down here — the goal is to train your brain to instantly structure your response.
            </p>

            <div className="space-y-6">
              <article className="bg-slate-50 rounded-card p-6 sm:p-7 border border-slate-100">
                <h3 className="text-2xl font-semibold text-text mb-2">
                  Scenario 1 — Dashboard breaks in a client meeting
                </h3>
                <p className="text-text/80 mb-2">
                  You are in a live client review when the main performance dashboard fails to load correctly.
                  Some charts show “no data” and others look obviously wrong. The client looks confused and
                  the account manager is nervous.
                </p>
                <p className="text-text/80">
                  <span className="font-semibold">STAR prompt:</span> What context would you give (S)? What
                  was your responsibility (T)? How did you handle the moment in front of the client (A)? What
                  was the outcome and what changed afterwards (R)?
                </p>
              </article>

              <article className="bg-slate-50 rounded-card p-6 sm:p-7 border border-slate-100">
                <h3 className="text-2xl font-semibold text-text mb-2">
                  Scenario 2 — Tight deadline with missing data
                </h3>
                <p className="text-text/80 mb-2">
                  Leadership asks for a forecast and recommendation by Friday, but one of the key data sources
                  will not be refreshed in time. Different stakeholders have different opinions on whether to
                  proceed or wait.
                </p>
                <p className="text-text/80">
                  <span className="font-semibold">STAR prompt:</span> How do you describe the constraints (S,
                  T)? What actions do you take to scope, communicate risk, and still be helpful (A)? How do
                  you frame the final recommendation and impact (R)?
                </p>
              </article>

              <article className="bg-slate-50 rounded-card p-6 sm:p-7 border border-slate-100">
                <h3 className="text-2xl font-semibold text-text mb-2">
                  Scenario 3 — Marketing disputes your attribution analysis
                </h3>
                <p className="text-text/80 mb-2">
                  You present an attribution analysis that suggests one campaign under‑performed expectations.
                  The marketing lead strongly disagrees and claims the analysis is “too negative” and ignores
                  offline impact.
                </p>
                <p className="text-text/80">
                  <span className="font-semibold">STAR prompt:</span> How do you set up the situation without
                  sounding defensive (S)? What exactly were you accountable for (T)? How do you approach the
                  disagreement using data and empathy (A)? What result would show both analytical rigor and a
                  healthy relationship (R)?
                </p>
              </article>
            </div>
          </section>

          {/* 7. Interviewer scoring rubric */}
          <section className="mb-12" aria-labelledby="rubric-heading">
            <h2
              id="rubric-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              How interviewers score your behavioral answers
            </h2>
            <p className="text-text/80 mb-4 text-lg leading-relaxed">
              While every company has its own rubric, most behavioral evaluations boil down to a few common
              dimensions. The table below shows one simple scoring model you can keep in mind as you prepare.
            </p>

            <div className="overflow-x-auto rounded-card border border-slate-100 mb-4">
              <table
                className="min-w-full divide-y divide-slate-200 text-lg"
                aria-label="Behavioral interview scoring rubric"
              >
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      dimension
                    </th>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      weight
                    </th>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      what interviewers listen for
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-text/80">
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap">Structure &amp; clarity</td>
                    <td className="px-5 py-4 whitespace-nowrap">30%</td>
                    <td className="px-5 py-4">
                      Clear beginning, middle, and end using STAR; the story is easy to follow without
                      backtracking.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap">Ownership</td>
                    <td className="px-5 py-4 whitespace-nowrap">25%</td>
                    <td className="px-5 py-4">
                      You take responsibility for outcomes, lean into problems instead of avoiding them, and
                      describe what you personally drove.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap">Action detail</td>
                    <td className="px-5 py-4 whitespace-nowrap">20%</td>
                    <td className="px-5 py-4">
                      Specific actions, decisions, and trade‑offs rather than generic statements like “we
                      collaborated” or “we communicated.”
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap">Measurable impact</td>
                    <td className="px-5 py-4 whitespace-nowrap">15%</td>
                    <td className="px-5 py-4">
                      Evidence that your work changed something — metrics, time saved, revenue, reduced risk,
                      or improved relationships.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap">Emotional intelligence</td>
                    <td className="px-5 py-4 whitespace-nowrap">10%</td>
                    <td className="px-5 py-4">
                      Awareness of others&apos; perspectives, thoughtful conflict handling, and respect even
                      when under pressure.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-text/80 text-lg leading-relaxed">
              You do not need to mention these percentages in the interview, but designing your stories to
              score highly on each dimension will make your answers feel crisp, credible, and easy to
              recommend.
            </p>
          </section>

          {/* 8. MCQs */}
          <section className="mb-12" aria-labelledby="mcq-heading">
            <h2
              id="mcq-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Quick check — behavioral interview MCQs
            </h2>
            <MCQGroup questions={mcqs} />
          </section>

          {/* 9. Completion */}
          <div className="mt-12">
            <CompletionButton roundId="behavioral" />
          </div>
        </div>
      </div>
    </div>
  );
};

