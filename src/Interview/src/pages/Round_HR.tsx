import { Link } from 'react-router-dom';
import { MCQGroup } from '../components/MCQGroup';
import { CompletionButton } from '../components/CompletionButton';

export const Round_HR = () => {
  const mcqs = [
    {
      question: 'The HR round mainly evaluates:',
      options: [
        { label: 'A) SQL joins', value: 'A' },
        { label: 'B) Communication & job fit', value: 'B', isCorrect: true },
        { label: 'C) Data modeling', value: 'C' },
      ],
    },
    {
      question: 'The best structure for "Tell me about yourself" is:',
      options: [
        { label: 'A) Random order', value: 'A' },
        { label: 'B) Present → Past → Future', value: 'B', isCorrect: true },
        { label: 'C) Only talk about hobbies', value: 'C' },
      ],
    },
    {
      question: 'Salary expectations should be answered by:',
      options: [
        { label: 'A) Giving a fixed number', value: 'A' },
        { label: 'B) Giving a researched range with flexibility', value: 'B', isCorrect: true },
        { label: 'C) Saying "Whatever you decide"', value: 'C' },
      ],
    },
    {
      question: 'A major HR red flag is:',
      options: [
        { label: 'A) Asking questions', value: 'A' },
        { label: 'B) Speaking poorly about past employers', value: 'B', isCorrect: true },
        { label: 'C) Mentioning skills', value: 'C' },
      ],
    },
    {
      question: 'Culture fit questions primarily test:',
      options: [
        { label: 'A) Technical depth', value: 'A' },
        { label: 'B) Values & collaboration style', value: 'B', isCorrect: true },
        { label: 'C) Your GPA', value: 'C' },
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
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-text mb-6">
              ROUND 1 — HR / Recruiter Screening
            </h1>
            <p className="text-text/80 leading-relaxed text-lg mb-4">
              This is the initial 15–30 minute phone or video screening where recruiters check your
              background, education, past roles, communication skills, and basic tool familiarity. They
              confirm job fit: availability, salary expectation, notice period, and location preference.
            </p>
            <p className="text-text/80 leading-relaxed text-lg">
              No deep technical evaluation happens here, but they ensure you can explain your profile
              clearly and demonstrate professional behavior. This round acts as a filter before you move
              to technical assessments.
            </p>
          </header>

          {/* 1. What HR Screening Evaluates */}
          <section className="mb-12" aria-labelledby="evaluates-heading">
            <h2
              id="evaluates-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              What HR screening evaluates
            </h2>
            <p className="text-text/80 mb-4">
              HR recruiters are gatekeepers who verify several non-technical factors before advancing
              candidates to technical rounds. Understanding what they check helps you prepare targeted
              answers.
            </p>
            <ul className="list-disc list-inside space-y-3 text-text/80 mb-6">
              <li>
                <span className="font-semibold">Communication clarity:</span> Can you explain your
                background, experience, and goals in a clear, structured way? Do you speak
                professionally and avoid rambling?
              </li>
              <li>
                <span className="font-semibold">Professional behavior:</span> Are you punctual, polite,
                and respectful? Do you show enthusiasm without being overly casual?
              </li>
              <li>
                <span className="font-semibold">Motivation for the role:</span> Do you understand what
                the job entails? Can you articulate why you want this specific position and company?
              </li>
              <li>
                <span className="font-semibold">Salary fit:</span> Are your expectations within the
                company's budget? Can you discuss compensation professionally?
              </li>
              <li>
                <span className="font-semibold">Notice period & location:</span> Are you available when
                they need you? Can you work from the required location or commute?
              </li>
              <li>
                <span className="font-semibold">Alignment with company values:</span> Do your answers
                suggest you would fit the team culture? Do you demonstrate collaboration, ownership, and
                learning mindset?
              </li>
            </ul>
            <p className="text-text/70 text-base">
              Remember: HR is not testing your SQL skills or data modeling knowledge. They are checking
              whether you are a professional, clear communicator who fits the role's basic requirements
              and company culture.
            </p>
          </section>

          {/* 2. Tell Me About Yourself — Expanded Guide */}
          <section className="mb-12" aria-labelledby="tell-me-about-yourself-heading">
            <h2
              id="tell-me-about-yourself-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              "Tell me about yourself" — Expanded guide
            </h2>
            <p className="text-text/80 mb-4">
              This question sets the tone for the rest of the interview. Treat it like a two-minute story
              about your experience, strengths, and alignment with the role. Follow these steps to
              structure a strong answer:
            </p>

            <div className="space-y-6 mb-8">
              <article>
                <h3 className="text-2xl font-semibold text-text mb-3">
                  1. Connect your experience to the job role
                </h3>
                <p className="text-text/80 mb-3">
                  Review the job description and highlight skills you have demonstrated in past roles. Use
                  the STAR method (Situation, Task, Action, Result) to structure short examples that show
                  real impact. Prefer recent and relevant experiences, but you can also include
                  internships, academic projects, or volunteer work that support your narrative.
                </p>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-text mb-3">
                  2. Relate your current role to the role you're applying for
                </h3>
                <p className="text-text/80 mb-3">
                  Explain what you do today and how those responsibilities translate to the new job. If
                  you're applying for a senior role, highlight leadership or added responsibilities. If
                  you're shifting careers, clearly explain how your existing skills transfer to this new
                  field.
                </p>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-text mb-3">
                  3. Highlight strengths with quantifiable results
                </h3>
                <p className="text-text/80 mb-3">
                  Use specific outcomes wherever possible. For example, instead of saying "I improved
                  reporting efficiency," say "I automated weekly reports and reduced turnaround time by
                  15%." If you don't have exact numbers, estimate reasonable values.
                </p>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-text mb-3">
                  4. Show a bit of personality
                </h3>
                <p className="text-text/80 mb-3">
                  Briefly mention hobbies or interests that demonstrate curiosity, discipline, teamwork, or
                  creativity—such as reading, hiking, coding side-projects, volunteering, or sports. Keep
                  it professional and use it as a smooth closing to your introduction.
                </p>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-text mb-3">
                  5. Use a clear format for your story
                </h3>
                <p className="text-text/80 mb-3">
                  Choose one structure—Present → Past → Future, or Past → Present → Future. This keeps
                  your introduction organized and easy to follow.
                </p>
              </article>
            </div>

            <div className="bg-slate-50 rounded-card p-6 sm:p-8 border border-slate-100">
              <h3 className="text-2xl font-semibold text-text mb-4">Model answer</h3>
              <p className="text-text/80 mb-3">
                <span className="font-semibold">Format:</span> Present → Past → Future
              </p>
              <div className="bg-white rounded-card p-5 border border-slate-200">
                <p className="text-text/90 leading-relaxed italic">
                  "I'm currently a Data Analyst Intern where I work on cleaning datasets, building
                  dashboards, and generating weekly insights for business teams. In the past, I've worked
                  on academic projects involving SQL, Excel, and Python—specifically automating data
                  cleaning workflows and analyzing trends.
                </p>
                <p className="text-text/90 leading-relaxed italic mt-3">
                  Going forward, I'm excited about this role because it aligns with the kind of analytics
                  work I want to grow in—customer insights, structured problem-solving, and
                  collaboration with cross-functional teams."
                </p>
              </div>
              <p className="text-text/70 text-base mt-4">
                <span className="font-semibold">Why this works:</span> It's structured, concise (about
                90 seconds), connects past experience to future goals, and shows alignment with the role
                without overselling.
              </p>
            </div>
          </section>

          {/* 3. Common HR Questions with Model Answers */}
          <section className="mb-12" aria-labelledby="common-questions-heading">
            <h2
              id="common-questions-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Common HR questions & model answers
            </h2>
            <p className="text-text/80 mb-6">
              Below are the most frequently asked HR questions with structured, professional answers you
              can adapt to your own experience. Practice these so you can answer confidently without
              sounding rehearsed.
            </p>

            <div className="space-y-8">
              {/* Why Do You Want This Job? */}
              <article>
                <h3 className="text-2xl font-semibold text-text mb-3">
                  "Why do you want this job?"
                </h3>
                <p className="text-text/80 mb-3">
                  <span className="font-semibold">Main idea:</span> Connect career goals + company + role.
                </p>
                <div className="bg-slate-50 rounded-card p-5 border border-slate-100">
                  <p className="text-text/90 leading-relaxed italic">
                    "I'm interested in this role because it sits at the intersection of data and
                    decision-making. I enjoy turning messy data into clear insights, and this company's
                    focus on customer-centric analytics aligns with the work I want to specialize in. I
                    also like that your team encourages ownership and learning, which fits how I want to
                    grow professionally."
                  </p>
                </div>
              </article>

              {/* Strengths */}
              <article>
                <h3 className="text-2xl font-semibold text-text mb-3">"What are your strengths?"</h3>
                <p className="text-text/80 mb-3">
                  <span className="font-semibold">Main idea:</span> Mention strengths with proof.
                </p>
                <div className="bg-slate-50 rounded-card p-5 border border-slate-100">
                  <p className="text-text/90 leading-relaxed italic">
                    "My biggest strengths are structured thinking, attention to detail, and
                    communication. In my previous project, I automated a data cleaning script that
                    reduced cleaning time by 30%, and I translated those insights into dashboards that
                    non-technical teammates could use."
                  </p>
                </div>
              </article>

              {/* Weaknesses */}
              <article>
                <h3 className="text-2xl font-semibold text-text mb-3">"What are your weaknesses?"</h3>
                <p className="text-text/80 mb-3">
                  <span className="font-semibold">Main idea:</span> Mention real weakness + improvement
                  plan.
                </p>
                <div className="bg-slate-50 rounded-card p-5 border border-slate-100">
                  <p className="text-text/90 leading-relaxed italic">
                    "One weakness I'm working on is taking too much time to perfect small details. I've
                    started using a prioritization checklist to separate essential details from
                    non-critical ones. This helps me focus more on delivering outcomes rather than
                    over-refining."
                  </p>
                </div>
                <p className="text-text/70 text-base mt-3">
                  <span className="font-semibold">Avoid:</span> Saying you have no weaknesses, or
                  mentioning a weakness that's actually a strength ("I'm too detail-oriented").
                </p>
              </article>

              {/* Reason for Leaving */}
              <article>
                <h3 className="text-2xl font-semibold text-text mb-3">
                  "Why are you leaving your previous job?"
                </h3>
                <p className="text-text/80 mb-3">
                  <span className="font-semibold">Main idea:</span> Stay positive and future-focused.
                </p>
                <div className="bg-slate-50 rounded-card p-5 border border-slate-100">
                  <p className="text-text/90 leading-relaxed italic">
                    "I learned a lot in my previous role, especially in data reporting and
                    collaboration. Now I'm looking for a role that offers deeper involvement in
                    analytics, problem-solving, and stakeholder communication—which aligns better with my
                    long-term goals."
                  </p>
                </div>
                <p className="text-text/70 text-base mt-3">
                  <span className="font-semibold">Never:</span> Criticize your previous employer, team,
                  or manager. Always frame it as growth and opportunity.
                </p>
              </article>

              {/* Handling Conflict */}
              <article>
                <h3 className="text-2xl font-semibold text-text mb-3">
                  "How do you handle conflict or disagreements?"
                </h3>
                <p className="text-text/80 mb-3">
                  <span className="font-semibold">Main idea:</span> Show maturity and professionalism.
                </p>
                <div className="bg-slate-50 rounded-card p-5 border border-slate-100">
                  <p className="text-text/90 leading-relaxed italic">
                    "When conflict happens, I first try to understand the other person's perspective. I
                    clarify expectations, present data neutrally, and work toward a shared goal. In my
                    last project, this approach helped resolve a misunderstanding about data definitions
                    and improved teamwork."
                  </p>
                </div>
              </article>
            </div>
          </section>

          {/* 4. Salary Expectation Guidance */}
          <section className="mb-12" aria-labelledby="salary-heading">
            <h2
              id="salary-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Salary expectation guidance
            </h2>
            <p className="text-text/80 mb-4">
              Salary discussions can feel uncomfortable, but they are a standard part of HR screening.
              Here's how to handle them professionally:
            </p>
            <ul className="list-disc list-inside space-y-3 text-text/80 mb-6">
              <li>
                <span className="font-semibold">Do your research:</span> Check Glassdoor, LinkedIn, and
                industry reports for similar roles in your location and experience level.
              </li>
              <li>
                <span className="font-semibold">Provide a range:</span> Give a reasonable salary range
                (e.g., ₹X–₹Y) rather than a fixed number. This shows flexibility while setting
                expectations.
              </li>
              <li>
                <span className="font-semibold">Show flexibility:</span> Mention that you're open to
                discussion and more interested in the right role and growth opportunity.
              </li>
              <li>
                <span className="font-semibold">Consider the full package:</span> Benefits, learning
                opportunities, and company culture matter too—not just base salary.
              </li>
            </ul>
            <div className="bg-slate-50 rounded-card p-5 border border-slate-100">
              <h3 className="text-2xl font-semibold text-text mb-3">Model answer</h3>
              <p className="text-text/90 leading-relaxed italic">
                "Based on my research and market standards, a fair range for this role is ₹X–₹Y. But I'm
                flexible and more interested in the right role and growth opportunity."
              </p>
            </div>
            <p className="text-text/70 text-base mt-4">
              <span className="font-semibold">Avoid:</span> Saying "Whatever you decide" (shows lack of
              self-awareness) or giving an unrealistically high number without justification.
            </p>
          </section>

          {/* 5. Culture Fit Questions & Model Answers */}
          <section className="mb-12" aria-labelledby="culture-fit-heading">
            <h2
              id="culture-fit-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Culture fit questions & model answers
            </h2>
            <p className="text-text/80 mb-4">
              Culture fit questions test whether your values, work style, and collaboration approach align
              with the company. They want to know if you'll thrive in their environment.
            </p>
            <div className="bg-slate-50 rounded-card p-5 border border-slate-100 mb-6">
              <h3 className="text-2xl font-semibold text-text mb-3">Model answer</h3>
              <p className="text-text/80 mb-3">
                <span className="font-semibold">Question:</span> "What kind of work environment do you
                thrive in?"
              </p>
              <p className="text-text/90 leading-relaxed italic">
                "I work best in teams that value openness, learning, and clear communication. I enjoy
                collaborating with others, sharing ideas, and taking ownership of my tasks. I appreciate
                environments where people support each other and work toward common goals."
              </p>
            </div>
            <p className="text-text/80 mb-4">
              <span className="font-semibold">Key themes to emphasize:</span>
            </p>
            <ul className="list-disc list-inside space-y-2 text-text/80">
              <li>Collaboration and teamwork</li>
              <li>Continuous learning and growth mindset</li>
              <li>Ownership and accountability</li>
              <li>Clear communication and transparency</li>
              <li>Supportive and inclusive culture</li>
            </ul>
          </section>

          {/* 6. Mistakes Candidates Commonly Make */}
          <section className="mb-12" aria-labelledby="mistakes-heading">
            <h2
              id="mistakes-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Mistakes candidates commonly make
            </h2>
            <p className="text-text/80 mb-4">
              Avoid these common pitfalls that can derail an otherwise strong HR screening:
            </p>
            <ul className="list-disc list-inside space-y-3 text-text/80 mb-6">
              <li>
                <span className="font-semibold">Rambling or oversharing:</span> Keep answers concise
                (1–2 minutes max). Don't share personal problems, family issues, or unrelated life
                stories.
              </li>
              <li>
                <span className="font-semibold">Speaking poorly about past employers:</span> This is a
                major red flag. Always stay positive and frame departures as growth opportunities.
              </li>
              <li>
                <span className="font-semibold">Being unprepared:</span> Not knowing basic details about
                the role or company shows lack of interest. Do your homework.
              </li>
              <li>
                <span className="font-semibold">Overly casual behavior:</span> While being friendly is
                good, maintain professionalism. Avoid slang, inappropriate jokes, or overly casual
                language.
              </li>
              <li>
                <span className="font-semibold">Not asking questions:</span> When asked "Do you have any
                questions?", having none suggests disinterest. Prepare 2–3 thoughtful questions about the
                role, team, or company.
              </li>
              <li>
                <span className="font-semibold">Unrealistic salary expectations:</span> Asking for
                significantly more than market rate without justification can end the conversation.
              </li>
              <li>
                <span className="font-semibold">Poor communication:</span> Mumbling, speaking too fast,
                or using excessive filler words ("um," "like," "you know") undermines your
                professionalism.
              </li>
            </ul>
            <div className="bg-red-50/60 rounded-card p-5 border border-red-200">
              <p className="text-text/90 font-semibold mb-2">Red flags that can end your candidacy:</p>
              <ul className="list-disc list-inside space-y-2 text-text/80">
                <li>Complaining about previous employers or colleagues</li>
                <li>Showing up late or being unprepared</li>
                <li>Being rude or dismissive to the recruiter</li>
                <li>Lying about experience or qualifications</li>
                <li>Being inflexible about salary, location, or notice period</li>
              </ul>
            </div>
          </section>

          {/* 7. Sample Mini Role-Play Scenarios */}
          <section className="mb-12" aria-labelledby="role-play-heading">
            <h2
              id="role-play-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Sample mini role-play scenarios
            </h2>
            <p className="text-text/80 mb-6">
              Practice these scenarios to build confidence. Imagine you're in the actual interview and
              respond naturally:
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-card shadow-sm p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-text mb-3">Scenario 1: Opening question</h3>
                <p className="text-text/80 mb-3 italic">
                  <span className="font-semibold">Recruiter:</span> "Hi! Thanks for taking the time. Can
                  you start by telling me a bit about yourself?"
                </p>
                <p className="text-text/70 text-base">
                  <span className="font-semibold">Your approach:</span> Use the Present → Past → Future
                  structure. Keep it to 90 seconds. End with why you're interested in this role.
                </p>
              </div>

              <div className="bg-white rounded-card shadow-sm p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-text mb-3">
                  Scenario 2: Salary discussion
                </h3>
                <p className="text-text/80 mb-3 italic">
                  <span className="font-semibold">Recruiter:</span> "What are your salary expectations
                  for this role?"
                </p>
                <p className="text-text/70 text-base">
                  <span className="font-semibold">Your approach:</span> Provide a researched range,
                  mention flexibility, and express interest in the full opportunity (not just salary).
                </p>
              </div>

              <div className="bg-white rounded-card shadow-sm p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-text mb-3">Scenario 3: Weakness question</h3>
                <p className="text-text/80 mb-3 italic">
                  <span className="font-semibold">Recruiter:</span> "What's one area you're working to
                  improve?"
                </p>
                <p className="text-text/70 text-base">
                  <span className="font-semibold">Your approach:</span> Share a real, work-related
                  weakness and explain concrete steps you're taking to improve. Show self-awareness and
                  growth mindset.
                </p>
              </div>

              <div className="bg-white rounded-card shadow-sm p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-text mb-3">Scenario 4: Questions for them</h3>
                <p className="text-text/80 mb-3 italic">
                  <span className="font-semibold">Recruiter:</span> "Do you have any questions for me?"
                </p>
                <p className="text-text/70 text-base">
                  <span className="font-semibold">Your approach:</span> Ask 2–3 thoughtful questions
                  about the role, team structure, growth opportunities, or company culture. Show genuine
                  interest.
                </p>
              </div>
            </div>
          </section>

          {/* 8. HR Round Scoring Rubric */}
          <section className="mb-12" aria-labelledby="rubric-heading">
            <h2
              id="rubric-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              HR round scoring rubric
            </h2>
            <p className="text-text/80 mb-4">
              Understanding how HR evaluates candidates helps you focus on what matters. Here's a typical
              scoring framework:
            </p>

            <div className="overflow-x-auto rounded-card border border-slate-100 mb-6">
              <table
                className="min-w-full divide-y divide-slate-200 text-lg"
                aria-label="HR round scoring rubric"
              >
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      Criteria
                    </th>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      Strong (✓)
                    </th>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      Weak (✗)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-5 py-4 font-semibold text-text">Communication</td>
                    <td className="px-5 py-4 text-text/80">
                      Clear, structured, concise answers. Professional tone.
                    </td>
                    <td className="px-5 py-4 text-text/80">
                      Rambling, unclear, excessive filler words, unprofessional.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-semibold text-text">Motivation</td>
                    <td className="px-5 py-4 text-text/80">
                      Clear understanding of role. Articulates why interested.
                    </td>
                    <td className="px-5 py-4 text-text/80">
                      Generic answers. No clear connection to role/company.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-semibold text-text">Professionalism</td>
                    <td className="px-5 py-4 text-text/80">
                      Punctual, respectful, prepared, asks thoughtful questions.
                    </td>
                    <td className="px-5 py-4 text-text/80">
                      Late, unprepared, rude, no questions, overly casual.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-semibold text-text">Culture fit</td>
                    <td className="px-5 py-4 text-text/80">
                      Values align. Shows collaboration, learning, ownership.
                    </td>
                    <td className="px-5 py-4 text-text/80">
                      Values misaligned. Negative about past experiences.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-semibold text-text">Practical fit</td>
                    <td className="px-5 py-4 text-text/80">
                      Salary, notice period, location all workable.
                    </td>
                    <td className="px-5 py-4 text-text/80">
                      Unrealistic expectations. Inflexible on logistics.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-text/70 text-base">
              <span className="font-semibold">Note:</span> HR typically needs a "pass" on most criteria
              to advance you. One major red flag (e.g., speaking poorly about past employer) can end your
              candidacy even if other areas are strong.
            </p>
          </section>

          {/* 9. MCQs */}
          <section className="mb-12" aria-labelledby="mcq-heading">
            <h2
              id="mcq-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Quick check — HR screening MCQs
            </h2>
            <MCQGroup questions={mcqs} />
          </section>

          <div className="mt-12">
            <CompletionButton roundId="hr" />
          </div>
        </div>
      </div>
    </div>
  );
};
