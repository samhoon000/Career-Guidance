import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { CloudEngineerProgress } from "@/components/CloudEngineerProgress";
import { CloudEngineerRoadmap } from "@/components/CloudEngineerRoadmap";
import { useCloudEngineerProgress } from "@/hooks/useCloudEngineerProgress";
import { useEffect } from "react";
import NotesAssistantWidget from "@/components/NotesAssistantWidget";

const CloudEngineer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const {
    progress,
    markVideoComplete,
    markVideoIncomplete,
    markQuizComplete,
  } = useCloudEngineerProgress();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container px-4 py-6 mx-auto">
        <Button
          variant="ghost"
          onClick={() => (window.location.href = "/index.html")}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Career Tracks
        </Button>
      </div>

      <CloudEngineerProgress progress={progress} />
      <CloudEngineerRoadmap
        progress={progress}
        onMarkVideoComplete={markVideoComplete}
        onMarkVideoIncomplete={markVideoIncomplete}
        onQuizComplete={markQuizComplete}
      />
      <NotesAssistantWidget />
    </div>
  );
};

export default CloudEngineer;
