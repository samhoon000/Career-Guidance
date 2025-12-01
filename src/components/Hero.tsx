// /Career-Guidance/src/components/hero.tsx

import { Sparkles, Target, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { useDataAnalystProgress } from "@/hooks/useDataAnalystProgress";
import { useDataScientistProgress } from "@/hooks/useDataScientistProgress";
import { useBigDataEngineerProgress } from "@/hooks/useBigDataEngineerProgress";
import { useCloudEngineerProgress } from "@/hooks/useCloudEngineerProgress";
import { useMLEngineerProgress } from "@/hooks/useMLEngineerProgress";
import { PastelCard } from "@/components/shared/pastel-card";
import { IconBubble } from "@/components/shared/icon-bubble";

const features = [
  {
    icon: Target,
    title: "Prepare for Interview",
    description: "Practice mock questions and improve interview readiness.",
    accent: "indigo",
  },
  {
    icon: Sparkles,
    title: "Connect to Mentor",
    description: "Get guidance, career advice, and personalized support.",
    accent: "purple",
  },
  {
    icon: Zap,
    title: "Connect to Peers",
    description: "Collaborate, share progress, and learn together.",
    accent: "emerald",
  },
];


const CHAT_URL = "https://chantel-phenetic-unequivalently.ngrok-free.dev";

const Hero = () => {
  const navigate = useNavigate();

  const dataAnalystProgress = useDataAnalystProgress();
  const dataScientistProgress = useDataScientistProgress();
  const bigDataProgress = useBigDataEngineerProgress();
  const cloudProgress = useCloudEngineerProgress();
  const mlProgress = useMLEngineerProgress();

  // 🔥 LOGOUT HANDLER
  const handleLogout = () => {
    localStorage.removeItem("cg-token");
    localStorage.removeItem("career-guidance-user-name");
    navigate("/login", { replace: true });
  };

  const handleGetStarted = () => {
    const tracksSection = document.getElementById("tracks");
    if (tracksSection) {
      tracksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExplorePaths = () => {
    const progressData = [
      { route: "/data-analyst", progress: dataAnalystProgress.progress.overallProgress },
      { route: "/data-scientist", progress: dataScientistProgress.progress.overallProgress },
      { route: "/big-data-engineer", progress: bigDataProgress.progress.overallProgress },
      { route: "/cloud-engineer", progress: cloudProgress.progress.overallProgress },
      { route: "/ml-engineer", progress: mlProgress.progress.overallProgress },
    ];

    const maxProgress = progressData.reduce((max, current) =>
      current.progress > max.progress ? current : max
    );

    if (maxProgress.progress > 0) {
      navigate(maxProgress.route);
    } else {
      handleGetStarted();
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-white">

      {/* 🔥 LOGOUT BUTTON — TOP RIGHT */}
      <button
        onClick={handleLogout}
        className="absolute top-6 right-6 z-50 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-md transition"
      >
        Logout
      </button>

      <div className="absolute inset-0 bg-gradient-hero opacity-70" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />

      <div className="container relative z-10 mx-auto flex min-h-[90vh] flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl space-y-8">
          <h1 className="text-5xl font-semibold leading-tight text-slate-900 md:text-7xl">
            <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
              Hello {localStorage.getItem("career-guidance-user-name") || "User"}!
            </span>
            <br />
            Your Career Starts Here
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-slate-500 md:text-2xl">
            Choose your path: Data Analyst, Data Scientist, Cloud Engineer, or ML Engineer.
            Structured learning with AI mentorship and real-world projects.
          </p>
        </div>

        <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description, accent }) => {
            const content = (
              <div className="flex h-full flex-col items-center text-center">
                <IconBubble icon={Icon} variant={accent} className="mb-4" size="lg" />
                <h3 className="mb-2 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-500">{description}</p>
              </div>
            );

            // Connect to Peers — opens new tab
            if (title === "Connect to Peers") {
              return (
                <button
                  key={title}
                  onClick={() => {
                    const newWin = window.open(CHAT_URL, "_blank", "noopener,noreferrer");
                    try {
                      newWin?.focus();
                    } catch {}
                  }}
                  className="block h-full w-full rounded-[32px]"
                >
                  <PastelCard accent={accent} surfaceClassName="h-full flex items-center justify-center">
                    {content}
                  </PastelCard>
                </button>
              );
            }

            // Interview page
            if (title === "Prepare for Interview") {
              return (
                <Link
                  key={title}
                  to="/interview-packages"
                  className="block h-full w-full rounded-[32px]"
                >
                  <PastelCard accent={accent} surfaceClassName="h-full flex items-center justify-center">
                    {content}
                  </PastelCard>
                </Link>
              );
            }

            // Default: Mentor card
            return (
              <PastelCard
                key={title}
                accent={accent}
                surfaceClassName="h-full flex items-center justify-center"
              >
                {content}
              </PastelCard>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </section>
  );
};

export default Hero;
