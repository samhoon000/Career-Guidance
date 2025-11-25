import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDataAnalystProgress } from "@/hooks/useDataAnalystProgress";
import { useDataScientistProgress } from "@/hooks/useDataScientistProgress";
import { useBigDataEngineerProgress } from "@/hooks/useBigDataEngineerProgress";
import { useCloudEngineerProgress } from "@/hooks/useCloudEngineerProgress";
import { useMLEngineerProgress } from "@/hooks/useMLEngineerProgress";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: Target,
    title: "Multiple Career Tracks",
    description:
      "Choose from Data Analyst, Data Scientist, Big Data, Cloud, ML Engineer paths.",
    color: "text-primary bg-primary/10",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Learning",
    description:
      "Personalized curriculum with 24/7 AI mentorship for each track.",
    color: "text-accent bg-accent/10",
  },
  {
    icon: Zap,
    title: "Industry Projects",
    description:
      "Build portfolio-ready projects specific to your chosen career path.",
    color: "text-success bg-success/10",
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const dataAnalystProgress = useDataAnalystProgress();
  const dataScientistProgress = useDataScientistProgress();
  const bigDataProgress = useBigDataEngineerProgress();
  const cloudProgress = useCloudEngineerProgress();
  const mlProgress = useMLEngineerProgress();

  const handleGetStarted = () => {
    const tracksSection = document.getElementById("tracks");
    if (tracksSection) {
      tracksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExplorePaths = () => {
    // Check which track has the most progress
    const progressData = [
      { route: "/data-analyst", progress: dataAnalystProgress.progress.overallProgress },
      { route: "/data-scientist", progress: dataScientistProgress.progress.overallProgress },
      { route: "/big-data-engineer", progress: bigDataProgress.progress.overallProgress },
      { route: "/cloud-engineer", progress: cloudProgress.progress.overallProgress },
      { route: "/ml-engineer", progress: mlProgress.progress.overallProgress },
    ];

    // Find track with highest progress
    const maxProgress = progressData.reduce((max, current) => 
      current.progress > max.progress ? current : max
    );

    // If any progress exists, navigate to that track, otherwise scroll to tracks
    if (maxProgress.progress > 0) {
      navigate(maxProgress.route);
    } else {
      handleGetStarted();
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />

      <div className="container px-4 mx-auto text-center relative z-10">
        {/* Badge */}
       
        <br />
        

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-fade-in-up">
          Hello [user]!
          <br />
          Your Career Starts Here
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up delay-100">
          Choose your path: Data Analyst, Data Scientist, Cloud Engineer, or ML Engineer. 
          Structured learning with AI mentorship and real-world projects.
        </p>

        <div className="mb-16" />

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up delay-300">
          {features.map(({ icon: Icon, title, description, color }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${color}`}
              >
                <Icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations + Grid */}
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
