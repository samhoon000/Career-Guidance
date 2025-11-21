import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useDataScientistProgress } from "@/hooks/useDataScientistProgress";
import { getTotalVideos, getTotalQuizzes } from "@/data/dataScientistContent";
import { CheckCircle2, Video, Trophy, Clock } from "lucide-react";

export const DataScientistProgress = () => {
  const { progress, calculateOverallProgress } = useDataScientistProgress();
  
  const totalVideos = getTotalVideos();
  const totalQuizzes = getTotalQuizzes();
  const overallProgress = calculateOverallProgress(totalVideos, totalQuizzes);
  
  const passedQuizzes = Object.values(progress.quizzesCompleted).filter(
    (q) => q.passed
  ).length;

  const estimatedHoursRemaining = Math.max(
    0,
    Math.round(((100 - overallProgress) / 100) * 180)
  );

  return (
    <Card className="p-6 mb-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">Your Progress</h3>
          <span className="text-3xl font-bold text-primary">{overallProgress}%</span>
        </div>
        
        <Progress value={overallProgress} className="h-3" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
            <Video className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Videos</p>
              <p className="text-lg font-semibold">
                {progress.videosWatched.length}/{totalVideos}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-success" />
            <div>
              <p className="text-xs text-muted-foreground">Quizzes</p>
              <p className="text-lg font-semibold">
                {passedQuizzes}/{totalQuizzes}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
            <Trophy className="w-5 h-5 text-accent" />
            <div>
              <p className="text-xs text-muted-foreground">Modules</p>
              <p className="text-lg font-semibold">
                {passedQuizzes}/6
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Time Left</p>
              <p className="text-lg font-semibold">{estimatedHoursRemaining}h</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
