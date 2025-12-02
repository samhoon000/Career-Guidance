import { CareerTrackProgressHeader } from "@/components/shared/CareerTrackProgressHeader";
import { useDataScientistProgress } from "@/hooks/useDataScientistProgress";
import { getTotalVideos, getTotalQuizzes, dataScientistModules } from "@/data/dataScientistContent";

export const DataScientistProgress = () => {
  const { progress, calculateOverallProgress } = useDataScientistProgress();
  
  const totalVideos = getTotalVideos();
  const totalQuizzes = getTotalQuizzes();
  const overallProgress = calculateOverallProgress(totalVideos, totalQuizzes);
  
  const passedQuizzes = Object.values(progress.quizzesCompleted).filter(
    (q) => q.passed
  ).length;

  const modulesUnlocked = passedQuizzes;
  const totalModules = dataScientistModules.length;

  return (
    <CareerTrackProgressHeader
      overallProgress={overallProgress}
      videosWatched={progress.videosWatched.length}
      totalVideos={totalVideos}
      quizzesPassed={passedQuizzes}
      totalQuizzes={totalQuizzes}
      modulesUnlocked={modulesUnlocked}
      totalModules={totalModules}
      trackName="Data Scientist"
    />
  );
};
