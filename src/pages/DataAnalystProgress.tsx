import Header from "@/components/Header";
import { DataAnalystProgress as DataAnalystProgressSection } from "@/components/DataAnalystProgress";
import { videos, quizzes } from "@/data/dataAnalystContent";
import { useDataAnalystProgress } from "@/hooks/useDataAnalystProgress";

const DataAnalystProgress = () => {
  const { progress, calculateOverallProgress } = useDataAnalystProgress();

  const totalVideos = videos.length;
  const totalQuizzes = quizzes.length;
  const videosWatched = progress.videosWatched.length;
  const quizzesPassed = Object.values(progress.quizzesCompleted).filter((quiz) => quiz.passed).length;
  const overallProgress = calculateOverallProgress(totalVideos, totalQuizzes);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <DataAnalystProgressSection
        overallProgress={overallProgress}
        videosWatched={videosWatched}
        totalVideos={totalVideos}
        quizzesPassed={quizzesPassed}
        totalQuizzes={totalQuizzes}
      />
    </div>
  );
};

export default DataAnalystProgress;


