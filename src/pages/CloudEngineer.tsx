import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CloudEngineerProgress } from "@/components/CloudEngineerProgress";
import { CloudEngineerRoadmap } from "@/components/CloudEngineerRoadmap";
import { useCloudEngineerProgress } from "@/hooks/useCloudEngineerProgress";
import Header from "@/components/Header";
import { useEffect } from "react";
import NotesAssistantWidget from "@/components/NotesAssistantWidget";

const CloudEngineer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const navigate = useNavigate();
  const {
    progress,
    markVideoComplete,
    markVideoIncomplete,
    markQuizComplete,
  } = useCloudEngineerProgress();

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
          <h1 className="text-4xl font-bold mb-4">Cloud Engineer Learning Path</h1>
          <p className="text-lg text-muted-foreground">
            Deploy and manage cloud infrastructure for data solutions on AWS, Azure, and GCP.
          </p>
        </div>

        <CloudEngineerProgress progress={progress} />
        <CloudEngineerRoadmap
          progress={progress}
          onMarkVideoComplete={markVideoComplete}
          onMarkVideoIncomplete={markVideoIncomplete}
          onQuizComplete={markQuizComplete}
        />
      </div>
      <NotesAssistantWidget />
    </div>
  );
};

export default CloudEngineer;
