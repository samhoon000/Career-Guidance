import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Clock, Trophy } from "lucide-react";
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

  const estimatedHours = Math.max(
    0,
    Math.round(((totalVideos + totalQuizzes * 3 - videosWatched - quizzesPassed * 3) / 4) * 2)
  );

  return (
    <div className="space-y-4 mb-8">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Your Progress</h2>
          <span className="text-3xl font-bold text-primary">
            {completionPercentage}%
          </span>
        </div>
        <Progress value={completionPercentage} className="h-3 mb-4" />
        
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center p-4 bg-secondary/50 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle2 className="w-5 h-5 text-success mr-2" />
              <span className="text-sm font-medium">Videos</span>
            </div>
            <p className="text-2xl font-bold">
              {videosWatched}/{totalVideos}
            </p>
          </div>
          
          <div className="text-center p-4 bg-secondary/50 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 text-accent mr-2" />
              <span className="text-sm font-medium">Quizzes</span>
            </div>
            <p className="text-2xl font-bold">
              {quizzesPassed}/{totalQuizzes}
            </p>
          </div>
          
          <div className="text-center p-4 bg-secondary/50 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-5 h-5 text-primary mr-2" />
              <span className="text-sm font-medium">Time Left</span>
            </div>
            <p className="text-2xl font-bold">{estimatedHours}h</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
