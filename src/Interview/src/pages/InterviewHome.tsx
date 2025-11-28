import { Link } from 'react-router-dom';

type RoundConfig = {
  title: string;
  description: string;
  to: string;
};

const rounds: RoundConfig[] = [
  {
    title: 'Round 1 — HR / Recruiter Screening',
    description: 'Expect culture-fit, motivation, and resume walkthrough topics.',
    to: '/interview/hr',
  },
  {
    title: 'Round 2 — Technical Round',
    description: 'Hands-on SQL, Python logic, and analytics problem solving.',
    to: '/interview/technical',
  },
  {
    title: 'Round 3 — Case Study Round',
    description: 'Structured product/business cases with metric-driven reasoning.',
    to: '/interview/case',
  },
  {
    title: 'Round 4 — Data Visualization Round',
    description: 'Interpret complex dashboards, charts, and insight storytelling.',
    to: '/interview/viz',
  },
  {
    title: 'Round 5 — Behavioral Round',
    description: 'STAR-based prompts covering collaboration and leadership moments.',
    to: '/interview/behavioral',
  },
  {
    title: 'Round 6 — Managerial Round',
    description: 'Dive into stakeholder management and strategic prioritization.',
    to: '/interview/managerial',
  },
  {
    title: 'Mock Interview (AI-powered)',
    description: 'Run the full end-to-end simulation with Groq-powered feedback.',
    to: '/mock-interview',
  },
];

export const InterviewHome = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-pastel py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col flex-grow gap-6">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-text">Data Analyst Interview Preparation</h1>
          <p className="text-base text-text/70">Choose a round to learn, practice, and improve.</p>
        </header>

        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {rounds.map((round) => (
            <div
              key={round.to}
              className={`${
                round.title === 'Mock Interview (AI-powered)'
                  ? 'col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 flex justify-center'
                  : ''
              }`}
            >
              {round.title === 'Mock Interview (AI-powered)' ? (
                <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-purple-500 via-blue-400 to-purple-300 shadow-lg transition-all duration-300 ease-out hover:scale-[1.015] hover:shadow-xl w-full max-w-xl mx-auto">
                  <div className="rounded-2xl bg-white shadow-md flex flex-col justify-between h-full p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-text">{round.title}</h2>
                      <p className="text-sm text-text/70">{round.description}</p>
                    </div>
                    <div className="flex justify-center mt-4">
                      <Link to={round.to} className="btn-explore">
                        Explore round
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl bg-white shadow-md flex flex-col justify-between h-full p-5 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-text">{round.title}</h2>
                    <p className="text-sm text-text/70">{round.description}</p>
                  </div>
                  <Link to={round.to} className="btn-explore">
                    Explore round
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

