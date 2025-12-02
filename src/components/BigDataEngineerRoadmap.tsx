import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Lock, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { bigDataEngineerModules } from "@/data/bigDataEngineerContent";
import { Progress as ProgressType } from "@/hooks/useBigDataEngineerProgress";
import { VideoLesson } from "./VideoLesson";
import { Quiz } from "./Quiz";

interface BigDataEngineerRoadmapProps {
  progress: ProgressType;
  onMarkVideoComplete: (videoId: string) => void;
  onMarkVideoIncomplete: (videoId: string) => void;
  onQuizComplete: (quizId: string, score: number, passed: boolean) => void;
}

export const BigDataEngineerRoadmap = ({
  progress,
  onMarkVideoComplete,
  onMarkVideoIncomplete,
  onQuizComplete,
}: BigDataEngineerRoadmapProps) => {
  const isModuleUnlocked = (moduleOrder: number) => {
    if (moduleOrder === 1) return true;
    
    const previousModule = bigDataEngineerModules.find((m) => m.order === moduleOrder - 1);
    if (!previousModule) return false;
    
    const previousQuizResult = progress.quizzesCompleted[previousModule.quiz.id];
    return previousQuizResult?.passed || false;
  };

  return (
    <div className="container px-4 py-8 mx-auto max-w-5xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Big Data Engineer Learning Roadmap</h1>
        <p className="text-muted-foreground">
          Complete modules with videos, quizzes, and practical projects to master big data engineering.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4" defaultValue="item-0">
        {bigDataEngineerModules.map((module, idx) => {
          const unlocked = isModuleUnlocked(module.order);
          const allVideosWatched = module.videos.every((video) =>
            progress.videosWatched.includes(video.id)
          );
          const quizResult = progress.quizzesCompleted[module.quiz.id];
          const videosWatchedCount = module.videos.filter((v) =>
            progress.videosWatched.includes(v.id)
          ).length;

          return (
            <Card
              key={module.id}
              className={`overflow-hidden ${!unlocked ? "opacity-60" : ""}`}
            >
              <AccordionItem value={`item-${idx}`} className="border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center w-full text-left">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{module.title}</h3>
                      </div>

                      <p className="text-sm text-muted-foreground mb-2">
                        {module.description}
                      </p>

                      <div className="flex items-center gap-3">
                        <Progress value={(videosWatchedCount / module.videos.length) * 100} className="h-2 flex-1" />
                        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                          {Math.round((videosWatchedCount / module.videos.length) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  {!unlocked ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <Lock className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p className="font-medium">Module Locked</p>
                      <p className="text-sm mt-1">
                        Complete the previous module to unlock
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <span>Video Lessons</span>
                          <Badge variant="secondary">
                            {videosWatchedCount}/{module.videos.length}
                          </Badge>
                        </h4>
                        <div className="space-y-3">
                          {module.videos.map((video) => (
                            <VideoLesson
                              key={video.id}
                              video={video}
                              isWatched={progress.videosWatched.includes(video.id)}
                              onMarkComplete={onMarkVideoComplete}
                              onMarkIncomplete={onMarkVideoIncomplete}
                            />
                          ))}
                        </div>
                      </div>

                      {module.quiz && (
                        <div>
                          <h4 className="font-semibold mb-3">Module Quiz</h4>
                          {!allVideosWatched ? (
                            <Card className="p-4 bg-muted/50">
                              <p className="text-sm text-muted-foreground text-center">
                                Complete all videos to unlock the quiz
                              </p>
                            </Card>
                          ) : (
                            <Quiz
                              quiz={module.quiz}
                              onComplete={(score, passed) => onQuizComplete(module.quiz.id, score, passed)}
                              previousResult={quizResult}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Card>
          );
        })}
      </Accordion>
    </div>
  );
};
