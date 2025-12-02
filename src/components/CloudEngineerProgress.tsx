import { CareerTrackProgressHeader } from "@/components/shared/CareerTrackProgressHeader";
import { cloudEngineerModules } from "@/data/cloudEngineerContent";
import { Progress as ProgressType } from "@/hooks/useCloudEngineerProgress";

interface CloudEngineerProgressProps {
  progress: ProgressType;
}

export const CloudEngineerProgress = ({ progress }: CloudEngineerProgressProps) => {
  const totalVideos = cloudEngineerModules.reduce(
    (acc, module) => acc + module.videos.length,
    0
  );
  const totalQuizzes = cloudEngineerModules.length;
  const videosWatched = progress.videosWatched.length;
  const quizzesPassed = Object.values(progress.quizzesCompleted).filter(
    (q) => q.passed
  ).length;

  const completionPercentage = Math.round(
    ((videosWatched + quizzesPassed * 3) / (totalVideos + totalQuizzes * 3)) * 100
  );

  const modulesUnlocked = quizzesPassed;
  const totalModules = cloudEngineerModules.length;

  return (
    <CareerTrackProgressHeader
      overallProgress={completionPercentage}
      videosWatched={videosWatched}
      totalVideos={totalVideos}
      quizzesPassed={quizzesPassed}
      totalQuizzes={totalQuizzes}
      modulesUnlocked={modulesUnlocked}
      totalModules={totalModules}
      trackName="Cloud Engineer"
    />
  );
};
