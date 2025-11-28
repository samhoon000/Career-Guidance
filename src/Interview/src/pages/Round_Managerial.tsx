import { Link } from 'react-router-dom';
import { MCQGroup } from '../components/MCQGroup';
import { CompletionButton } from '../components/CompletionButton';

export const Round_Managerial = () => {
  const mcqs = [
    {
      question: 'You have five tasks due this week. Two are high‑impact but not yet urgent, one is a blocker for another team, and two are low‑impact quick wins. What should you do first?',
      options: [
        {
          label: 'A) Do the low‑impact quick tasks first so your to‑do list looks smaller',
          value: 'A',
        },
        {
          label: 'B) Start with the cross‑team blocker, then the highest business‑impact items',
          value: 'B',
          isCorrect: true,
        },
        {
          label: 'C) Ask your manager to choose for you so you avoid accountability',
          value: 'C',
        },
      ],
    },
    {
      question: 'A stakeholder disagrees with your analysis and insists their intuition is right. What is the BEST first response?',
      options: [
        {
          label: 'A) Tell them they are wrong and copy their boss on the email',
          value: 'A',
        },
        {
          label: 'B) Listen to their perspective, clarify their assumptions, and propose to re‑check the data together',
          value: 'B',
          isCorrect: true,
        },
        {
          label: 'C) Immediately change the analysis to match their opinion without any review',
          value: 'C',
        },
      ],
    },
    {
      question: 'When requirements are ambiguous, which behaviour shows strong ownership?',
      options: [
        {
          label: 'A) Wait passively until someone sends a perfect spec',
          value: 'A',
        },
        {
          label: 'B) Proactively draft options, clarify the decision question, and suggest a simple plan to move forward',
          value: 'B',
          isCorrect: true,
        },
        {
          label: 'C) Start building dashboards without confirming what problem you are solving',
          value: 'C',
        },
      ],
    },
    {
      question: 'You must present a negative metric trend to senior leadership. What is the strongest approach?',
      options: [
        {
          label: 'A) Hide the bad news and only show positive charts',
          value: 'A',
        },
        {
          label: 'B) Clearly show the decline, explain likely drivers, quantify impact, and propose next‑step experiments',
          value: 'B',
          isCorrect: true,
        },
        {
          label: 'C) Share the chart with no context and ask leadership to guess what happened',
          value: 'C',
        },
      ],
    },
    {
      question: 'Which behaviour BEST reflects a leadership mindset for a data analyst?',
      options: [
        {
          label: 'A) Focusing only on your own tickets and ignoring cross‑team risks',
          value: 'A',
        },
        {
          label: 'B) Anticipating risks, aligning with other teams, and raising issues early with data‑backed options',
          value: 'B',
          isCorrect: true,
        },
        {
          label: 'C) Waiting for your manager to notice issues before you mention them',
          value: 'C',
        },
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
              ROUND 6 — Managerial / Culture Fit Interview
            </h1>
            <p className="text-text/80 mb-4">
              This round focuses on how you behave as a teammate and future leader: how you make
              decisions, prioritize work, take ownership, resolve conflicts, and align your day‑to‑day
              choices with the company&apos;s goals and values. Instead of testing deep technical
              details, interviewers watch how you think, communicate, and handle pressure.
            </p>
            <p className="text-text/80 mb-4">
              You will be evaluated on leadership potential, decision‑making, prioritization, ownership,
              conflict resolution, and how well you partner with stakeholders and cross‑functional
              teams. Strong candidates show that they can explain trade‑offs clearly, stay calm when
              things go wrong, and act as a trusted analytical partner to managers, product,
              engineering, design, and operations.
            </p>
            <p className="text-text/80">
              This round is usually conducted by your future team lead, manager, or a senior analyst,
              and sometimes a director‑level leader. They are asking themselves: &quot;Would I trust
              this person to own important problems, represent the team with stakeholders, and model
              the culture we want?&quot;
            </p>
          </header>

          {/* 2. What managerial rounds test */}
          <section className="mb-12" aria-labelledby="managerial-competencies-heading">
            <h2
              id="managerial-competencies-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              What managerial rounds test
            </h2>
            <p className="text-text/80 mb-6">
              You can treat this round as an evaluation of core leadership competencies. Each question
              is a different angle on the same themes: can you make sound decisions, collaborate
              effectively, and behave like an owner even without a formal manager title?
            </p>

            <div className="space-y-6">
              <article>
                <h3 className="text-2xl font-semibold text-text mb-2">Prioritization skills</h3>
                <p className="text-text/80 mb-2">
                  Interviewers want to see that you can distinguish between urgent vs. important and
                  choose work that maximizes business value rather than just reacting to noise.
                </p>
                <p className="text-text/70">
                  <span className="font-semibold">Example of good behaviour:</span> “I list all active
                  tasks, mark which ones unblock other teams and which drive the largest impact, then
                  confirm the priority order with my manager and key stakeholders before committing my
                  calendar.”
                </p>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-text mb-2">Decision‑making reasoning</h3>
                <p className="text-text/80 mb-2">
                  Managers care less about you guessing the &quot;right&quot; answer and more about
                  whether your reasoning is structured, transparent, and repeatable.
                </p>
                <p className="text-text/70">
                  <span className="font-semibold">Example of good behaviour:</span> You explain: what
                  data you used, the options you considered, key trade‑offs, and why you chose option B
                  over A, then you call out assumptions and risks explicitly.
                </p>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-text mb-2">Handling ambiguity</h3>
                <p className="text-text/80 mb-2">
                  Real work often starts with vague requests like “the funnel looks weird”. They want
                  to see if you freeze or if you calmly structure the problem.
                </p>
                <p className="text-text/70">
                  <span className="font-semibold">Example of good behaviour:</span> You clarify the
                  core decision, propose a simple analysis plan, and confirm success criteria before
                  writing a single query.
                </p>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-text mb-2">Stakeholder communication</h3>
                <p className="text-text/80 mb-2">
                  Analysts must translate data into language that product, marketing, or operations
                  leaders understand and trust.
                </p>
                <p className="text-text/70">
                  <span className="font-semibold">Example of good behaviour:</span> You summarize in
                  plain language, adapt the level of detail to your audience, and end every update with
                  clear next steps and owners.
                </p>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-text mb-2">Leadership approach</h3>
                <p className="text-text/80 mb-2">
                  Even without direct reports, analysts lead by shaping decisions, coaching peers, and
                  setting quality bars.
                </p>
                <p className="text-text/70">
                  <span className="font-semibold">Example of good behaviour:</span> You notice a
                  recurring error in dashboards, create a documentation page and a simple checklist, and
                  walk the team through it in a calm, non‑blaming way.
                </p>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-text mb-2">Time management</h3>
                <p className="text-text/80 mb-2">
                  Good analysts protect focus time for deep work while staying responsive to partners.
                </p>
                <p className="text-text/70">
                  <span className="font-semibold">Example of good behaviour:</span> You block time for
                  core projects, batch low‑priority requests, and proactively flag when scope changes
                  will affect deadlines instead of last‑minute surprises.
                </p>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-text mb-2">Team collaboration</h3>
                <p className="text-text/80 mb-2">
                  Managers look for people who make the team better: sharing context, documenting
                  decisions, and inviting feedback.
                </p>
                <p className="text-text/70">
                  <span className="font-semibold">Example of good behaviour:</span> You share an
                  analysis plan in a doc, invite engineering and product to comment, and adjust based on
                  their constraints before implementation begins.
                </p>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-text mb-2">Handling disagreements professionally</h3>
                <p className="text-text/80 mb-2">
                  Disagreement is normal. What matters is whether you stay curious, respectful, and
                  evidence‑driven.
                </p>
                <p className="text-text/70">
                  <span className="font-semibold">Example of good behaviour:</span> When marketing
                  challenges your attribution model, you schedule a short review, walk through
                  assumptions, and leave with an agreed experiment instead of an argument.
                </p>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-text mb-2">Value alignment</h3>
                <p className="text-text/80 mb-2">
                  Interviewers check that your default behaviour matches the company&apos;s values
                  (e.g., customer obsession, long‑term thinking, transparency).
                </p>
                <p className="text-text/70">
                  <span className="font-semibold">Example of good behaviour:</span> You choose an
                  option that protects user trust, even if it makes a short‑term metric look worse, and
                  you explain that trade‑off clearly.
                </p>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-text mb-2">Ability to work independently</h3>
                <p className="text-text/80 mb-2">
                  Managers want analysts who can run with a problem end‑to‑end without constant
                  supervision.
                </p>
                <p className="text-text/70">
                  <span className="font-semibold">Example of good behaviour:</span> You clarify goals
                  once, then provide regular concise updates and surface decisions early instead of
                  asking for permission on every small step.
                </p>
              </article>

              <article>
                <h3 className="text-2xl font-semibold text-text mb-2">Ownership and accountability</h3>
                <p className="text-text/80 mb-2">
                  Ownership means you treat the problem as yours, not &quot;someone else&apos;s
                  report&quot;, and you are honest about mistakes.
                </p>
                <p className="text-text/70">
                  <span className="font-semibold">Example of good behaviour:</span> If you ship a chart
                  with a bug, you immediately correct it, notify stakeholders with impact and fix plan,
                  and add a guardrail so it does not happen again.
                </p>
              </article>
            </div>
          </section>

          {/* 3. Managerial decision‑making frameworks */}
          <section className="mb-12" aria-labelledby="frameworks-heading">
            <h2 id="frameworks-heading" className="text-3xl font-semibold text-text mb-6">
              Simple decision‑making frameworks you can use in answers
            </h2>
            <p className="text-text/80 mb-6">
              Using lightweight frameworks helps your answers sound structured instead of ad‑hoc. You
              can mention the framework by name, then walk through it with a concrete example from your
              experience.
            </p>

            <article className="mb-10">
              <h3 className="text-2xl font-semibold text-text mb-3">1. Impact vs. Effort matrix</h3>
              <p className="text-text/80 mb-3">
                This matrix helps you prioritize tasks by plotting them along two dimensions: business
                impact and effort required. In interviews, you can say that you first categorize tasks
                into &quot;quick wins&quot; (high impact, low effort), &quot;big bets&quot; (high
                impact, high effort), &quot;fillers&quot; (low impact, low effort), and
                &quot;avoid&quot; (low impact, high effort).
              </p>
              <p className="text-text/70">
                <span className="font-semibold">Example in an answer:</span> “Given three competing
                requests, I would briefly rank them by impact and effort. If a quick attribution fix
                unblocks a marketing campaign worth ~5% extra revenue this quarter, that becomes my top
                priority ahead of a low‑impact dashboard cosmetic change.”
              </p>
            </article>

            <article className="mb-10">
              <h3 className="text-2xl font-semibold text-text mb-3">2. First‑principles thinking</h3>
              <p className="text-text/80 mb-3">
                First‑principles thinking means breaking a problem down to its basic components instead
                of relying on buzzwords or habits. For data analysts, this often looks like: What
                decision are we trying to make? What inputs do we need? What is the simplest way to get
                a directional answer?
              </p>
              <p className="text-text/70">
                <span className="font-semibold">Example in an answer:</span> “When requirements are
                vague, I step back and ask: what user or business outcome are we optimizing? For
                example, in a churn problem I would first decompose churn into who is leaving, when,
                and why, then design the minimal analyses to answer those sub‑questions before
                proposing experiments.”
              </p>
            </article>

            <article>
              <h3 className="text-2xl font-semibold text-text mb-3">3. Data → Insight → Action loop</h3>
              <p className="text-text/80 mb-3">
                Strong leaders do not stop at &quot;the chart&quot;. They move from raw data, to a clear
                insight, to a concrete action. You can explicitly walk through this loop to show
                maturity.
              </p>
              <p className="text-text/70 mb-2">
                <span className="font-semibold">Example in an answer:</span> “First, I pull cohort data
                on user retention (data). I notice that users acquired via channel X churn twice as fast
                as organic users (insight). I then recommend we cap spend on channel X until we improve
                onboarding for that segment, and I outline an experiment to test a new flow (action).”
              </p>
              <p className="text-text/70">
                You can reuse this loop in many questions: debriefs of past projects, explaining a
                dashboard, or talking through a risk you identified.
              </p>
            </article>
          </section>

          {/* 4. Realistic managerial interview questions with answers */}
          <section className="mb-12" aria-labelledby="managerial-questions-heading">
            <h2
              id="managerial-questions-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Realistic managerial / culture fit questions with model answers
            </h2>

            <article className="mb-10">
              <h3 className="text-2xl font-semibold text-text mb-3">
                1. How do you prioritize multiple urgent tasks with limited time?
              </h3>
              <p className="text-text/80 mb-4">
                A strong answer shows structure (for example, an impact vs. effort lens), calm
                trade‑offs, and proactive communication.
              </p>
              <p className="text-text/80 mb-4">
                <span className="font-semibold">Sample answer:</span> “When everything feels urgent, I
                step back and create a short list of tasks with owners, deadlines, and dependencies. I
                rank them by business impact and by whether they unblock other teams. High‑impact
                blockers go first, then other high‑impact tasks, and finally low‑impact nice‑to‑haves.”
              </p>
              <p className="text-text/80 mb-4">
                “For example, last quarter I had to update a revenue dashboard, investigate a sudden
                churn spike, and support a small A/B test analysis. Using an impact vs. effort matrix,
                I prioritized the churn analysis first because it affected a multi‑million‑dollar
                renewal and was blocking product decisions. I aligned this ordering with my manager and
                communicated clear timelines to all stakeholders so expectations were managed.”
              </p>
              <p className="text-text/80">
                “As a result, we identified a pricing bug within two days, fixed it, and reduced the
                projected churn impact by roughly 30%, while still delivering the dashboard update later
                that week.”
              </p>
            </article>

            <article className="mb-10">
              <h3 className="text-2xl font-semibold text-text mb-3">
                2. Describe a situation where stakeholders disagreed with your analysis. What did you do?
              </h3>
              <p className="text-text/80 mb-4">
                Interviewers look for emotional control, curiosity, and willingness to revisit
                assumptions, not stubbornness.
              </p>
              <p className="text-text/80 mb-4">
                <span className="font-semibold">Sample answer:</span> “In a marketing attribution
                project, my analysis suggested that a popular campaign had much lower incremental
                impact than expected. The campaign owner strongly disagreed, feeling that the numbers
                did not reflect their effort. Instead of debating in the meeting, I acknowledged their
                concern and suggested a follow‑up session to walk through the methodology together.”
              </p>
              <p className="text-text/80 mb-4">
                “In that session, I first listened to what they believed the campaign was driving, then
                re‑explained the model and data sources in simple terms. We jointly identified one
                assumption that might bias results, so I re‑ran the analysis with a sensitivity check.
                The updated view still showed lower‑than‑expected lift, but with narrower error bars.”
              </p>
              <p className="text-text/80">
                “Because I treated it as a shared problem, not ‘my analysis vs. their opinion,’ we
                agreed on a follow‑up experiment that targeted a narrower audience. That experiment
                improved ROAS by about 15%, and the stakeholder told me later that they appreciated how
                we handled the disagreement.”
              </p>
            </article>

            <article className="mb-10">
              <h3 className="text-2xl font-semibold text-text mb-3">
                3. How do you make decisions when requirements are unclear?
              </h3>
              <p className="text-text/80 mb-4">
                Use first‑principles thinking: clarify the decision, identify the minimum data needed,
                and propose options.
              </p>
              <p className="text-text/80 mb-4">
                <span className="font-semibold">Sample answer:</span> “When requirements are fuzzy, I
                do not jump straight into SQL. I first ask: what decision are we trying to support,
                what options are on the table, and what does ‘good’ look like? I summarize my
                understanding in a short note and share it back to confirm we are solving the right
                problem.”
              </p>
              <p className="text-text/80 mb-4">
                “For a recent feature rollout, the initial request was simply ‘analyze performance.’ I
                reframed it as: ‘Should we roll out to 100% of users, iterate, or roll back?’ Then I
                proposed a minimal set of metrics and segments to check. This structured approach
                turned a vague ask into a clear decision framework and allowed us to roll out with
                confidence, improving conversion by around 4 percentage points.”
              </p>
            </article>

            <article className="mb-10">
              <h3 className="text-2xl font-semibold text-text mb-3">
                4. Talk about a time you led without authority.
              </h3>
              <p className="text-text/80 mb-4">
                Leadership without title is about influence, coordination, and initiative.
              </p>
              <p className="text-text/80 mb-4">
                <span className="font-semibold">Sample answer:</span> “On a data quality issue that
                affected several dashboards, no single owner had been defined. Instead of waiting for a
                directive, I documented the impact, listed the systems involved, and proposed a
                cross‑team working session with engineering and product to agree on root causes.”
              </p>
              <p className="text-text/80 mb-4">
                “I facilitated that meeting, kept the discussion factual, and captured clear owners and
                timelines. I then set up a lightweight monitoring dashboard that alerted us to similar
                issues in the future. Although I did not manage anyone in that room, the issue was
                resolved within a week and support tickets related to that data dropped by roughly 40%
                over the next month.”
              </p>
            </article>

            <article className="mb-10">
              <h3 className="text-2xl font-semibold text-text mb-3">
                5. How do you communicate difficult findings to leadership?
              </h3>
              <p className="text-text/80 mb-4">
                The key is to be honest, structured, and solution‑oriented rather than dramatic.
              </p>
              <p className="text-text/80 mb-4">
                <span className="font-semibold">Sample answer:</span> “When results are negative, I
                keep the message simple: I start with the core fact, then explain the likely drivers and
                recommended actions. I avoid blaming specific teams and focus on what we have learned.”
              </p>
              <p className="text-text/80 mb-4">
                “In a pricing test that under‑performed, I opened the read‑out with: ‘The new pricing
                reduced conversion by 6% with no significant uplift in revenue per user.’ I then showed
                the confidence intervals, called out which segments were most affected, and presented
                two follow‑up experiments. Leadership appreciated that I was transparent, but also came
                with next steps rather than just a problem statement.”
              </p>
            </article>

            <article>
              <h3 className="text-2xl font-semibold text-text mb-3">
                6. Describe a time you prevented a project risk before it became a problem.
              </h3>
              <p className="text-text/80 mb-4">
                This question tests anticipation, systems thinking, and bias for action.
              </p>
              <p className="text-text/80 mb-4">
                <span className="font-semibold">Sample answer:</span> “Ahead of a major product
                launch, I noticed that tracking for a critical event was implemented differently across
                platforms. If we shipped as‑is, we would have incomplete data and could not evaluate
                success. I flagged this risk in our launch channel with a short note quantifying the
                potential blind spot.”
              </p>
              <p className="text-text/80">
                “Working with engineering, we corrected the instrumentation before launch and added a
                pre‑launch checklist for future projects. Because we caught it early, the launch
                decision relied on clean data, and we avoided what could have been weeks of noisy
                analysis and back‑and‑forth.”
              </p>
            </article>
          </section>

          {/* 5. Sample scenarios (mini case problems) */}
          <section className="mb-12" aria-labelledby="managerial-scenarios-heading">
            <h2
              id="managerial-scenarios-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Mini case scenarios — how a manager thinks
            </h2>
            <p className="text-text/80 mb-6">
              Read each scenario and imagine how you would respond. Focus less on the &quot;perfect
              answer&quot; and more on your thinking process, trade‑offs, and communication style.
            </p>

            <div className="space-y-6">
              <article className="bg-slate-50 rounded-card p-5 sm:p-6 border border-slate-100">
                <h3 className="text-2xl font-semibold text-text mb-3">
                  Scenario 1 — Marketing disputes your attribution results
                </h3>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Short scenario:</span> Your analysis shows that
                  organic search, not a new paid campaign, drove most of a recent uplift. Marketing
                  feels your model underestimates their impact.
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Key challenge:</span> Balancing analytical rigor with
                  relationship trust under disagreement.
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">What a manager wants to hear:</span> You listen,
                  clarify assumptions, run a reasonable sensitivity check, and co‑design an experiment
                  rather than defending your original slide.
                </p>
                <p className="text-text/70">
                  <span className="font-semibold">Model thinking process:</span> “I would schedule a
                  30‑minute walkthrough, ask marketing how they expected the campaign to move behavior,
                  then compare that theory to the model. I&apos;d test alternative attribution windows,
                  document trade‑offs, and finish by proposing a holdout test that everyone agrees is
                  fair. The goal is a shared decision, not proving I&apos;m right.”
                </p>
              </article>

              <article className="bg-slate-50 rounded-card p-5 sm:p-6 border border-slate-100">
                <h3 className="text-2xl font-semibold text-text mb-3">
                  Scenario 2 — Engineering delays block your dashboard launch
                </h3>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Short scenario:</span> Engineering informs you that a
                  data pipeline will be two weeks late, delaying a high‑visibility dashboard stakeholders
                  expect next week.
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Key challenge:</span> Managing expectations and
                  finding partial solutions instead of simply saying &quot;blocked&quot;.
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">What a manager wants to hear:</span> You re‑assess
                  scope, communicate clearly, and propose an interim view or manual workaround where
                  reasonable.
                </p>
                <p className="text-text/70">
                  <span className="font-semibold">Model thinking process:</span> “I would first
                  understand exactly which metrics are blocked, then draft two options: a reduced
                  dashboard using existing data sources, and a delayed full version after the pipeline
                  ships. I&apos;d present both with trade‑offs and ask stakeholders which option best
                  fits their decisions, showing that I own the problem end‑to‑end.”
                </p>
              </article>

              <article className="bg-slate-50 rounded-card p-5 sm:p-6 border border-slate-100">
                <h3 className="text-2xl font-semibold text-text mb-3">
                  Scenario 3 — Manager asks for unrealistic delivery timelines
                </h3>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Short scenario:</span> Your manager casually asks,
                  &quot;Can we get this full retention deep‑dive by tomorrow?&quot; You know it is not
                  realistic without sacrificing quality.
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Key challenge:</span> Pushing back respectfully while
                  staying solution‑oriented.
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">What a manager wants to hear:</span> You clarify what
                  must be decided tomorrow, offer a high‑level view now with deeper follow‑up, and
                  protect analytical quality.
                </p>
                <p className="text-text/70">
                  <span className="font-semibold">Model thinking process:</span> “I would ask which
                  decision this analysis supports and suggest a phased approach: a top‑line view and a
                  few directional cuts by tomorrow, then a robust deep‑dive next week. I&apos;d be
                  explicit about the trade‑off between speed and rigor so we jointly choose the right
                  level.”
                </p>
              </article>

              <article className="bg-slate-50 rounded-card p-5 sm:p-6 border border-slate-100">
                <h3 className="text-2xl font-semibold text-text mb-3">
                  Scenario 4 — Product pushes vague requirements with no data
                </h3>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Short scenario:</span> A product manager says, “Let&apos;s
                  prove this feature is good,” without a clear hypothesis or success metric.
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">Key challenge:</span> Turning vague enthusiasm into a
                  testable, data‑informed plan.
                </p>
                <p className="text-text/80 mb-2">
                  <span className="font-semibold">What a manager wants to hear:</span> You collapse the
                  request into a clear decision question, propose measurable outcomes, and keep the
                  design as simple as possible.
                </p>
                <p className="text-text/70">
                  <span className="font-semibold">Model thinking process:</span> “I would ask: what user
                  behavior do we expect this feature to change, and by roughly how much? Then I would
                  recommend 1–2 key metrics, a control vs. treatment design, and a minimal analysis
                  plan. This shows I can bring first‑principles structure rather than just pulling more
                  dashboards.”
                </p>
              </article>
            </div>
          </section>

          {/* 6. Leadership principles */}
          <section className="mb-12" aria-labelledby="leadership-principles-heading">
            <h2
              id="leadership-principles-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Leadership principles companies look for
            </h2>
            <p className="text-text/80 mb-6">
              Even at the analyst level, interviewers are looking for leadership traits. Below are
              common principles and how a data analyst can demonstrate each one.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="text-2xl font-semibold text-text mb-2">Ownership mindset</h3>
                <p className="text-text/80">
                  You treat problems as yours to solve, not tickets to close. For example, when a metric
                  suddenly drops, you coordinate with product and engineering to investigate, publish a
                  short incident report, and help define follow‑up checks.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-text mb-2">Data‑driven thinking</h3>
                <p className="text-text/80">
                  You prefer evidence over opinions, while still acknowledging uncertainty. For example,
                  you frame trade‑offs with numbers (“this change likely affects ~5–7% of revenue”) and
                  highlight where the data is noisy or incomplete.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-text mb-2">Bias for action</h3>
                <p className="text-text/80">
                  You move projects forward instead of waiting for perfect information. For example, you
                  propose a small, quick experiment to learn before the team invests months into a major
                  change.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-text mb-2">Empathy and emotional intelligence</h3>
                <p className="text-text/80">
                  You understand that stakeholders are under pressure too. For example, when a partner
                  sends a tense message about numbers, you respond calmly, acknowledge their stress, and
                  offer a short call to clarify rather than replying defensively.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-text mb-2">Clear communication</h3>
                <p className="text-text/80">
                  You adapt the level of technical detail to your audience, use simple language, and end
                  with decisions and actions. For example, your executive summary is one slide with the
                  story and recommendation, with deeper charts in backup.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-text mb-2">Consistency and reliability</h3>
                <p className="text-text/80">
                  Teams rely on you because you do what you say you will do. For example, you commit to
                  a delivery date only after checking your workload, then you hit that date or raise
                  risks early with options.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-text mb-2">Cross‑functional influence</h3>
                <p className="text-text/80">
                  You help different teams converge on good decisions by providing neutral, data‑backed
                  perspectives. For example, in a meeting where product and marketing disagree, you
                  calmly bring the relevant numbers, highlight shared goals, and propose a test that
                  answers both of their questions.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Handling conflict & stakeholder disagreement */}
          <section className="mb-12" aria-labelledby="conflict-handling-heading">
            <h2
              id="conflict-handling-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Handling conflict and stakeholder disagreement
            </h2>
            <p className="text-text/80 mb-4">
              Disagreement is a normal part of analytical work. Interviewers want to see that you can
              stay professional, curious, and structured, especially when someone challenges your work.
            </p>

            <h3 className="text-2xl font-semibold text-text mb-3">
              A simple 6‑step framework you can follow
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-text/80 mb-6">
              <li>
                <span className="font-semibold">Listen without interrupting:</span> let the stakeholder
                fully explain their concern before you respond.
              </li>
              <li>
                <span className="font-semibold">Clarify expectations:</span> restate what they wanted
                to see or decide, and what they think is wrong.
              </li>
              <li>
                <span className="font-semibold">Re‑evaluate data and assumptions:</span> review your
                sources, filters, and logic for possible mistakes or misunderstandings.
              </li>
              <li>
                <span className="font-semibold">Show evidence neutrally:</span> walk through charts or
                queries calmly, avoiding defensive language.
              </li>
              <li>
                <span className="font-semibold">Offer options, not ultimatums:</span> suggest a small
                test, alternative cut, or timeline rather than &quot;my way vs. your way&quot;.
              </li>
              <li>
                <span className="font-semibold">Align on next steps:</span> agree on a concrete follow‑up,
                owner, and timing so the issue moves forward.
              </li>
            </ol>

            <h3 className="text-2xl font-semibold text-text mb-3">Dialogue‑style example</h3>
            <div className="bg-slate-50 rounded-card p-4 sm:p-5 border border-slate-100 text-text/80 space-y-2">
              <p>
                <span className="font-semibold">Stakeholder:</span> “These numbers look way too low. I&apos;m
                sure the campaign performed better than this.”
              </p>
              <p>
                <span className="font-semibold">Analyst:</span> “Thanks for flagging that. Can you walk
                me through what results you were expecting and which users you had in mind?”
              </p>
              <p>
                <span className="font-semibold">Stakeholder:</span> “We targeted returning users, but
                this slide seems to mix everyone.”
              </p>
              <p>
                <span className="font-semibold">Analyst:</span> “Got it — in this view I&apos;m showing
                all users. Let me pull a cut for returning users only so we can compare. If it still
                looks lower than expected, we can design a small follow‑up test focused on that
                segment.”
              </p>
              <p>
                <span className="font-semibold">Narration:</span> Notice how the analyst stays calm,
                asks clarifying questions, and proposes a concrete next step instead of arguing.
              </p>
            </div>
          </section>

          {/* 8. Prioritization breakdown (workload management) */}
          <section className="mb-12" aria-labelledby="prioritization-heading">
            <h2
              id="prioritization-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Prioritization and workload management
            </h2>
            <p className="text-text/80 mb-4">
              When interviewers ask how you handle heavy workloads, they are listening for how you
              justify your choices. You can explicitly mention the factors you balance:
            </p>
            <ul className="list-disc list-inside space-y-3 text-text/80 mb-6">
              <li>
                <span className="font-semibold">Business impact:</span> revenue, customers, or risk
                affected.
              </li>
              <li>
                <span className="font-semibold">Deadlines:</span> hard vs. soft dates and who depends on
                them.
              </li>
              <li>
                <span className="font-semibold">Dependencies:</span> tasks that unblock other teams or
                critical decisions.
              </li>
              <li>
                <span className="font-semibold">Risk:</span> probability and severity of bad outcomes if
                delayed.
              </li>
              <li>
                <span className="font-semibold">Effort:</span> rough time or complexity estimate.
              </li>
              <li>
                <span className="font-semibold">Team alignment:</span> confirming the plan with your
                manager and key stakeholders.
              </li>
            </ul>

            <p className="text-text/80 mb-2">
              <span className="font-semibold">Sample answer snippet:</span> “I maintain a simple
              priority list that maps each task to impact, urgency, and dependencies. Items that unlock
              other teams or affect revenue go first. Once I draft that ordering, I review it quickly
              with my manager or key partners so we are aligned, then I protect focus time in my
              calendar to execute.”
            </p>
            <p className="text-text/80">
              “For example, when juggling three projects last quarter, I prioritized a risk‑reducing
              data quality fix that affected multiple dashboards over a low‑stakes ad‑hoc request. By
              aligning priorities early, we avoided a potential reporting incident and still delivered
              the other analyses within the agreed window.”
            </p>
          </section>

          {/* 9. Interviewer scoring rubric */}
          <section className="mb-12" aria-labelledby="rubric-heading">
            <h2 id="rubric-heading" className="text-3xl font-semibold text-text mb-6">
              How interviewers often score this round
            </h2>
            <p className="text-text/80 mb-6">
              While every company is different, many use a rubric similar to the one below. Reviewing
              it can help you shape your stories and examples.
            </p>

            <div className="bg-slate-50 rounded-card p-5 sm:p-6 border border-slate-100 mb-4">
              <ul className="space-y-3 text-text/80">
                <li>
                  <span className="font-semibold">Decision reasoning clarity (30%):</span> Do you walk
                  through your logic step‑by‑step, including assumptions, options considered, and why you
                  chose a path?
                </li>
                <li>
                  <span className="font-semibold">Ownership and accountability (25%):</span> Do you take
                  responsibility for outcomes, proactively surface risks, and follow through on actions
                  you commit to?
                </li>
                <li>
                  <span className="font-semibold">Stakeholder communication (20%):</span> Can you adapt
                  your explanations to non‑technical partners, stay calm in disagreement, and finish with
                  clear next steps?
                </li>
                <li>
                  <span className="font-semibold">Prioritization logic (15%):</span> Are your choices
                  grounded in impact, urgency, and dependencies instead of just convenience?
                </li>
                <li>
                  <span className="font-semibold">Emotional intelligence (10%):</span> Do you show
                  empathy, listen actively, and keep conversations constructive under pressure?
                </li>
              </ul>
            </div>
            <p className="text-text/80">
              You do not need to reference percentages in the interview, but you can subtly cover each
              area by giving examples that show clear decisions, ownership, communication, prioritizing,
              and calm collaboration.
            </p>
          </section>

          {/* 10. MCQs */}
          <section className="mb-12" aria-labelledby="managerial-mcq-heading">
            <h2
              id="managerial-mcq-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Quick check — managerial &amp; culture fit MCQs
            </h2>
            <MCQGroup questions={mcqs} />
          </section>

          <div className="mt-12">
            <CompletionButton roundId="managerial" />
          </div>
        </div>
      </div>
    </div>
  );
};

