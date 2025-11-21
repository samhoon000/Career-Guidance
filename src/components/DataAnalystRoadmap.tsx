import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Lock, CheckCircle2 } from "lucide-react";
import { VideoLesson } from "./VideoLesson";
import { Quiz } from "./Quiz";
import { modules, videos, quizzes } from "@/data/dataAnalystContent";
import { useDataAnalystProgress } from "@/hooks/useDataAnalystProgress";

export const DataAnalystRoadmap = () => {
  const {
    markVideoComplete,
    markVideoIncomplete,
    isVideoWatched,
    saveQuizResult,
    getQuizResult,
    getModuleProgress,
    isModuleComplete,
  } = useDataAnalystProgress();

  const isModuleUnlocked = (moduleOrder: number) => {
    if (moduleOrder === 1) return true;
    
    const previousModule = modules.find((m) => m.order === moduleOrder - 1);
    if (!previousModule) return false;
    
    const moduleVideos = videos.filter((v) => v.moduleId === previousModule.id);
    return isModuleComplete(previousModule.id, moduleVideos.length);
  };

  return (
    <div className="container px-4 py-8 mx-auto max-w-5xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Data Analyst Learning Roadmap</h1>
        <p className="text-muted-foreground">
          Complete 6 modules with videos and quizzes to master data analysis
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4" defaultValue="item-0">
        {modules.map((module, idx) => {
          const moduleVideos = videos.filter((v) => v.moduleId === module.id);
          const moduleQuiz = quizzes.find((q) => q.moduleId === module.id);
          const isUnlocked = isModuleUnlocked(module.order);
          const isComplete = isModuleComplete(module.id, moduleVideos.length);
          const progress = getModuleProgress(module.id, moduleVideos.length, !!moduleQuiz);

          const allVideosWatched = moduleVideos.every((v) => isVideoWatched(v.id));
          const quizResult = moduleQuiz ? getQuizResult(moduleQuiz.id) : undefined;

          return (
            <Card
              key={module.id}
              className={`overflow-hidden ${
                !isUnlocked ? "opacity-60" : ""
              }`}
            >
              <AccordionItem value={`item-${idx}`} className="border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4 w-full text-left">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isComplete
                          ? "bg-success/10"
                          : isUnlocked
                          ? "bg-primary/10"
                          : "bg-muted"
                      }`}
                    >
                      {!isUnlocked ? (
                        <Lock className="w-5 h-5 text-muted-foreground" />
                      ) : isComplete ? (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      ) : (
                        <span className="text-lg font-bold text-primary">
                          {module.order}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{module.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {module.duration}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {module.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <Progress value={progress} className="h-2 flex-1" />
                        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                          {progress}%
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6">
                  {!isUnlocked ? (
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
                            {moduleVideos.filter((v) => isVideoWatched(v.id)).length}/
                            {moduleVideos.length}
                          </Badge>
                        </h4>
                        <div className="space-y-3">
                          {moduleVideos.map((video) => (
                            <VideoLesson
                              key={video.id}
                              video={video}
                              isWatched={isVideoWatched(video.id)}
                              onMarkComplete={markVideoComplete}
                              onMarkIncomplete={markVideoIncomplete}
                            />
                          ))}
                        </div>
                      </div>

                      {moduleQuiz && (
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
                              quiz={moduleQuiz}
                              onComplete={(score, passed) =>
                                saveQuizResult(moduleQuiz.id, score, passed)
                              }
                              previousResult={quizResult}
                            />
                          )}
                        </div>
                      )}

                      {isComplete && (
                        <Card className="p-4 bg-success/5 border-success/20">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-success" />
                            <div>
                              <p className="font-semibold text-success">
                                Module Complete!
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Great job! Continue to the next module.
                              </p>
                            </div>
                          </div>
                        </Card>
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
