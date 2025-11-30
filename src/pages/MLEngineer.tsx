import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MLEngineerProgress } from "@/components/MLEngineerProgress";
import { MLEngineerRoadmap } from "@/components/MLEngineerRoadmap";
import { useMLEngineerProgress } from "@/hooks/useMLEngineerProgress";
import Header from "@/components/Header";
import { useEffect } from "react";

const MLEngineer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const navigate = useNavigate();
  const {
    progress,
    markVideoComplete,
    markVideoIncomplete,
    markQuizComplete,
  } = useMLEngineerProgress();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container px-4 py-8 mx-auto">
        <Button
          variant="ghost"
          onClick={() => (window.location.href = "/index.html")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Career Tracks
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">ML Engineer Learning Path</h1>
          <p className="text-lg text-muted-foreground">
            Productionize machine learning models and build AI-powered applications at scale.
          </p>
        </div>

        <MLEngineerProgress progress={progress} />
        <MLEngineerRoadmap
          progress={progress}
          onMarkVideoComplete={markVideoComplete}
          onMarkVideoIncomplete={markVideoIncomplete}
          onQuizComplete={markQuizComplete}
        />
      </div>
    </div>
  );
};

export default MLEngineer;
