import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, Target, Zap } from "lucide-react";

const featureCards = [
  {
    icon: Target,
    title: "Multiple Career Tracks",
    description: "Choose from Data Analyst, Data Scientist, Cloud Engineer, ML Engineer, and more.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Learning",
    description: "Personalized curriculum with 24/7 mentorship adapted to your pace.",
  },
  {
    icon: Zap,
    title: "Industry Projects",
    description: "Build portfolio-ready work rooted in real-world scenarios.",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20 flex flex-col">
      <header className="w-full flex justify-end p-6">
        <Button
          variant="outline"
          className="rounded-full px-6 py-2 text-sm font-semibold border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          onClick={() => navigate("/mentor")}
        >
          Join as a Mentor
        </Button>
      </header>
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="text-[#0A3A67]">Welcome to </span>
              <span className="bg-gradient-to-r from-primary via-primary to-orange-300 bg-clip-text text-transparent">
                SkillQuest
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground">Your Personalized Career Learning Journey</p>
            <Button
              size="lg"
              className="rounded-full px-10 py-6 text-base font-semibold bg-gradient-to-r from-[#0A3A67] via-primary to-orange-400 text-white shadow-lg hover:-translate-y-0.5 hover:shadow-2xl transition-all"
              onClick={() => navigate("/login")}
            >
              Get Started
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureCards.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-3xl bg-card border border-border/60 shadow-lg p-8 flex flex-col items-center text-center space-y-4"
              >
                <div className="h-12 w-12 rounded-2xl bg-[#0A3A67]/10 text-[#0A3A67] flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-foreground">{title}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;

