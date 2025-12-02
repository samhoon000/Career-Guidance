import { CareerTrackProgressHeader } from "@/components/shared/CareerTrackProgressHeader";
import { mlEngineerModules } from "@/data/mlEngineerContent";
import { Progress as ProgressType } from "@/hooks/useMLEngineerProgress";

interface MLEngineerProgressProps {
  progress: ProgressType;
}

export const MLEngineerProgress = ({ progress }: MLEngineerProgressProps) => {
  const totalVideos = mlEngineerModules.reduce(
    (acc, module) => acc + module.videos.length,
    0
  );
  const totalQuizzes = mlEngineerModules.length;
  const videosWatched = progress.videosWatched.length;
  const quizzesPassed = Object.values(progress.quizzesCompleted).filter(
    (q) => q.passed
  ).length;

  const completionPercentage = Math.round(
    ((videosWatched + quizzesPassed * 3) / (totalVideos + totalQuizzes * 3)) * 100
  );

  const modulesUnlocked = quizzesPassed;
  const totalModules = mlEngineerModules.length;

  return (
    <CareerTrackProgressHeader
      overallProgress={completionPercentage}
      videosWatched={videosWatched}
      totalVideos={totalVideos}
      quizzesPassed={quizzesPassed}
      totalQuizzes={totalQuizzes}
      modulesUnlocked={modulesUnlocked}
      totalModules={totalModules}
      trackName="ML Engineer"
    />
  );
};
