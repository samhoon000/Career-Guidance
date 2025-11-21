import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Video, Trophy, Clock } from "lucide-react";

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
  const estimatedWeeksLeft = Math.ceil(((totalVideos - videosWatched) / totalVideos) * 12);

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 border-b sticky top-0 z-10 backdrop-blur-sm">
      <div className="container px-4 py-6 mx-auto">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Your Progress</h2>
              <p className="text-sm text-muted-foreground">
                Keep learning to unlock your Data Analyst career
              </p>
            </div>
            <Badge variant="default" className="text-lg px-4 py-2">
              {overallProgress}%
            </Badge>
          </div>

          <div className="space-y-2">
            <Progress value={overallProgress} className="h-4 bg-muted border border-border" />
            <p className="text-xs text-muted-foreground text-right">{overallProgress}% Complete</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Video className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {videosWatched}/{totalVideos}
                  </p>
                  <p className="text-xs text-muted-foreground">Videos Watched</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {quizzesPassed}/{totalQuizzes}
                  </p>
                  <p className="text-xs text-muted-foreground">Quizzes Passed</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{Math.round(overallProgress / 16.67)}/6</p>
                  <p className="text-xs text-muted-foreground">Modules Unlocked</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{estimatedWeeksLeft}</p>
                  <p className="text-xs text-muted-foreground">Weeks Left</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
