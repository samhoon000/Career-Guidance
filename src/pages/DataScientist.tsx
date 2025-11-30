import Header from "@/components/Header";
import { DataScientistProgress } from "@/components/DataScientistProgress";
import { DataScientistRoadmap } from "@/components/DataScientistRoadmap";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DataScientist = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => (window.location.href = "/index.html")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tracks
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
              <Brain className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Data Scientist Track</h1>
              <p className="text-lg text-muted-foreground">
                Master machine learning, statistics, and AI to solve complex problems
              </p>
            </div>
          </div>
        </div>

        <DataScientistProgress />
        <DataScientistRoadmap />
      </main>
    </div>
  );
};

export default DataScientist;
