import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BigDataEngineerProgress } from "@/components/BigDataEngineerProgress";
import { BigDataEngineerRoadmap } from "@/components/BigDataEngineerRoadmap";
import { useBigDataEngineerProgress } from "@/hooks/useBigDataEngineerProgress";
import Header from "@/components/Header";
import NotesAssistantWidget from "@/components/NotesAssistantWidget";

const BigDataEngineer = () => {
  const navigate = useNavigate();
  const {
    progress,
    markVideoComplete,
    markVideoIncomplete,
    markQuizComplete,
  } = useBigDataEngineerProgress();

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
          <h1 className="text-4xl font-bold mb-4">Big Data Engineer Learning Path</h1>
          <p className="text-lg text-muted-foreground">
            Master big data technologies and build scalable data pipelines for processing massive datasets.
          </p>
        </div>

        <BigDataEngineerProgress progress={progress} />
        <BigDataEngineerRoadmap
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

export default BigDataEngineer;
