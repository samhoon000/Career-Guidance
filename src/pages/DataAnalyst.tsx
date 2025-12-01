import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { DataAnalystProgress } from "@/components/DataAnalystProgress";
import { DataAnalystRoadmap } from "@/components/DataAnalystRoadmap";
import { useDataAnalystProgress } from "@/hooks/useDataAnalystProgress";
import { videos, quizzes } from "@/data/dataAnalystContent";
import { useEffect } from "react";
import NotesAssistantWidget from "@/components/NotesAssistantWidget";

const DataAnalyst = () => {
  const navigate = useNavigate();
  const { progress, calculateOverallProgress } = useDataAnalystProgress();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const totalVideos = videos.length;
  const totalQuizzes = quizzes.length;
  const videosWatched = progress.videosWatched.length;
  const quizzesPassed = Object.values(progress.quizzesCompleted).filter(
    (q) => q.passed
  ).length;
  const overallProgress = calculateOverallProgress(totalVideos, totalQuizzes);

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

      <DataAnalystProgress
        overallProgress={overallProgress}
        videosWatched={videosWatched}
        totalVideos={totalVideos}
        quizzesPassed={quizzesPassed}
        totalQuizzes={totalQuizzes}
      />

      <DataAnalystRoadmap />
      <NotesAssistantWidget />
    </div>
  );
};

export default DataAnalyst;
