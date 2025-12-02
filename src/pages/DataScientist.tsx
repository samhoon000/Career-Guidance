import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { DataScientistProgress } from "@/components/DataScientistProgress";
import { DataScientistRoadmap } from "@/components/DataScientistRoadmap";
import { useEffect } from "react";
import NotesAssistantWidget from "@/components/NotesAssistantWidget";

const DataScientist = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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

      <DataScientistProgress />
      <DataScientistRoadmap />
      <NotesAssistantWidget />
    </div>
  );
};

export default DataScientist;
