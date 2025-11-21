import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Lock, CheckCircle2, Play } from "lucide-react";
import { dataScientistModules } from "@/data/dataScientistContent";
import { useDataScientistProgress } from "@/hooks/useDataScientistProgress";
import { VideoLesson } from "@/components/VideoLesson";
import { Quiz } from "@/components/Quiz";

export const DataScientistRoadmap = () => {
  const {
    isVideoWatched,
    markVideoComplete,
    markVideoIncomplete,
    saveQuizResult,
    getQuizResult,
    getModuleProgress,
    isModuleComplete,
  } = useDataScientistProgress();

  const isModuleUnlocked = (moduleOrder: number) => {
    if (moduleOrder === 1) return true;
    const previousModule = dataScientistModules.find((m) => m.order === moduleOrder - 1);
    if (!previousModule) return false;
    return isModuleComplete(previousModule.id, previousModule.videos.length);
  };

  const areAllVideosWatched = (moduleId: string) => {
    const module = dataScientistModules.find((m) => m.id === moduleId);
    if (!module) return false;
    return module.videos.every((video) => isVideoWatched(video.id));
  };

  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible className="space-y-4">
        {dataScientistModules.map((module) => {
          const unlocked = isModuleUnlocked(module.order);
          const moduleProgress = getModuleProgress(module.id, module.videos.length, true);
          const completed = isModuleComplete(module.id, module.videos.length);
          const quizResult = getQuizResult(module.quiz.id);

          return (
            <AccordionItem
              key={module.id}
              value={module.id}
              className="border-none"
            >
              <Card className={`overflow-hidden ${!unlocked && "opacity-60"}`}>
                <AccordionTrigger
                  className="px-6 py-4 hover:no-underline"
                  disabled={!unlocked}
                >
                  <div className="flex items-start gap-4 w-full text-left">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {!unlocked ? (
                        <Lock className="w-6 h-6 text-muted-foreground" />
                      ) : completed ? (
                        <CheckCircle2 className="w-6 h-6 text-success" />
                      ) : (
                        <Play className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold">{module.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {module.duration}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {module.description}
                      </p>
                      {unlocked && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">
                              {module.videos.length} videos • 1 quiz
                            </span>
                            <span className="font-semibold">{moduleProgress}%</span>
                          </div>
                          <Progress value={moduleProgress} className="h-2" />
                        </div>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="px-6 pb-6 space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        Video Lessons
                      </h4>
                      {module.videos.map((video) => (
                        <VideoLesson
                          key={video.id}
                          video={video}
                          isWatched={isVideoWatched(video.id)}
                          onMarkComplete={markVideoComplete}
                          onMarkIncomplete={markVideoIncomplete}
                        />
                      ))}
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Module Quiz
                      </h4>
                      {!areAllVideosWatched(module.id) ? (
                        <Card className="p-4 bg-muted/50">
                          <p className="text-sm text-muted-foreground text-center">
                            Complete all videos to unlock the quiz
                          </p>
                        </Card>
                      ) : (
                        <Quiz
                          quiz={module.quiz}
                          onComplete={(score, passed) =>
                            saveQuizResult(module.quiz.id, score, passed)
                          }
                          previousResult={quizResult}
                        />
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};
