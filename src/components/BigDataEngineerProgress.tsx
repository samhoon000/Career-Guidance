import { CareerTrackProgressHeader } from "@/components/shared/CareerTrackProgressHeader";
import { bigDataEngineerModules } from "@/data/bigDataEngineerContent";
import { Progress as ProgressType } from "@/hooks/useBigDataEngineerProgress";

interface BigDataEngineerProgressProps {
  progress: ProgressType;
}

export const BigDataEngineerProgress = ({ progress }: BigDataEngineerProgressProps) => {
  const totalVideos = bigDataEngineerModules.reduce(
    (acc, module) => acc + module.videos.length,
    0
  );
  const totalQuizzes = bigDataEngineerModules.length;
  const videosWatched = progress.videosWatched.length;
  const quizzesPassed = Object.values(progress.quizzesCompleted).filter(
    (q) => q.passed
  ).length;

  const completionPercentage = Math.round(
    ((videosWatched + quizzesPassed * 3) / (totalVideos + totalQuizzes * 3)) * 100
  );

  const modulesUnlocked = quizzesPassed;
  const totalModules = bigDataEngineerModules.length;

  return (
    <CareerTrackProgressHeader
      overallProgress={completionPercentage}
      videosWatched={videosWatched}
      totalVideos={totalVideos}
      quizzesPassed={quizzesPassed}
      totalQuizzes={totalQuizzes}
      modulesUnlocked={modulesUnlocked}
      totalModules={totalModules}
      trackName="Big Data Engineer"
    />
  );
};
