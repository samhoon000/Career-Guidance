import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Lock } from "lucide-react";
import { cloudEngineerModules } from "@/data/cloudEngineerContent";
import { Progress as ProgressType } from "@/hooks/useCloudEngineerProgress";
import { VideoLesson } from "./VideoLesson";
import { Quiz } from "./Quiz";

interface CloudEngineerRoadmapProps {
  progress: ProgressType;
  onMarkVideoComplete: (videoId: string) => void;
  onMarkVideoIncomplete: (videoId: string) => void;
  onQuizComplete: (quizId: string, score: number, passed: boolean) => void;
}

export const CloudEngineerRoadmap = ({
  progress,
  onMarkVideoComplete,
  onMarkVideoIncomplete,
  onQuizComplete,
}: CloudEngineerRoadmapProps) => {
  const isModuleUnlocked = (moduleOrder: number) => {
    if (moduleOrder === 1) return true;
    
    const previousModule = cloudEngineerModules.find((m) => m.order === moduleOrder - 1);
    if (!previousModule) return false;
    
    const previousQuizResult = progress.quizzesCompleted[previousModule.quiz.id];
    return previousQuizResult?.passed || false;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="space-y-4">
        {cloudEngineerModules.map((module) => {
          const unlocked = isModuleUnlocked(module.order);
          const allVideosWatched = module.videos.every((video) =>
            progress.videosWatched.includes(video.id)
          );
          const quizResult = progress.quizzesCompleted[module.quiz.id];

          return (
            <AccordionItem key={module.id} value={module.id} disabled={!unlocked}>
              <Card className={!unlocked ? "opacity-60" : ""}>
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex items-start gap-4 text-left w-full">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{module.title}</h3>
                        {!unlocked && <Lock className="w-4 h-4 text-muted-foreground" />}
                        {quizResult?.passed && (
                          <Badge variant="default" className="bg-success">
                            Completed
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {module.description}
                      </p>
                      <Badge variant="outline">{module.duration}</Badge>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-6 pb-4 space-y-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase">
                        Video Lessons
                      </h4>
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

                    <div className="pt-4 border-t">
                      <Quiz
                        quiz={module.quiz}
                        onComplete={(score, passed) => onQuizComplete(module.quiz.id, score, passed)}
                        previousResult={quizResult}
                      />
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
