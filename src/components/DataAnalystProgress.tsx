import { CareerTrackProgressHeader } from "@/components/shared/CareerTrackProgressHeader";

interface DataAnalystProgressProps {
  overallProgress: number;
  videosWatched: number;
  totalVideos: number;
  quizzesPassed: number;
  totalQuizzes: number;
}

export const DataAnalystProgress = ({
  overallProgress,
  videosWatched,
  totalVideos,
  quizzesPassed,
  totalQuizzes,
}: DataAnalystProgressProps) => {
  const modulesUnlocked = Math.round(overallProgress / 16.67);
  const totalModules = 6;

  return (
    <CareerTrackProgressHeader
      overallProgress={overallProgress}
      videosWatched={videosWatched}
      totalVideos={totalVideos}
      quizzesPassed={quizzesPassed}
      totalQuizzes={totalQuizzes}
      modulesUnlocked={modulesUnlocked}
      totalModules={totalModules}
      trackName="Data Analyst"
    />
  );
};
