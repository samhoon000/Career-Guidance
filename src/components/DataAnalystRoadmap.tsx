import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Lock, CheckCircle2, Play } from "lucide-react";
import { VideoLesson } from "./VideoLesson";
import { Quiz } from "./Quiz";
import { modules, videos, quizzes } from "@/data/dataAnalystContent";
import { useDataAnalystProgress } from "@/hooks/useDataAnalystProgress";
import { projects } from "@/data/dataAnalystContent";

// Helper function to extract YouTube video ID from various URL formats
const extractYouTubeVideoId = (url: string): string | null => {
  if (!url) return null;
  
  // Handle various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return null;
};

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

  // Track which project videos are open (key: "sectionIdx-projectIdx")
  const [openProjectVideos, setOpenProjectVideos] = useState<Set<string>>(new Set());

  const toggleProjectVideo = (sectionIdx: number, projectIdx: number) => {
    const key = `${sectionIdx}-${projectIdx}`;
    setOpenProjectVideos((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const isProjectVideoOpen = (sectionIdx: number, projectIdx: number) => {
    return openProjectVideos.has(`${sectionIdx}-${projectIdx}`);
  };

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
          Complete 6 modules with videos, quizzes, and practical projects to master data analysis.
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
  
  <div className="flex items-center w-full text-left">
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-1">
        <h3 className="font-semibold text-lg">{module.title}</h3>
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
        {/* FINAL PROJECTS SECTION */}
        <Card className="overflow-hidden">
          <AccordionItem value="projects" className="border-none">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center w-full text-left">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">Practical Projects</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Apply all your skills with real-world projects
                  </p>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="px-6 pb-6">
              <Accordion type="single" collapsible className="space-y-4">
                {projects.map((section, sectionIdx) => (
                  <Card key={section.level} className="overflow-hidden">
                    <AccordionItem value={`project-${sectionIdx}`} className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex items-center w-full text-left">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-lg">{section.level} Projects</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {section.level} level practical projects
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <div className="space-y-3">
                          {section.items.map((project, projectIdx) => {
                            const videoId = extractYouTubeVideoId(project.youtube);
                            const isVideoOpen = isProjectVideoOpen(sectionIdx, projectIdx);

                            return (
                              <Card key={projectIdx} className="p-4 hover:shadow-md transition-shadow">
                                {!isVideoOpen ? (
                                  <div className="flex items-center justify-between">
                                    <p className="font-medium">{project.title}</p>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => toggleProjectVideo(sectionIdx, projectIdx)}
                                    >
                                      <Play className="w-4 h-4 mr-2" />
                                      Watch Video
                                    </Button>
                                  </div>
                                ) : (
                                  <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                      <p className="font-medium">{project.title}</p>
                                    </div>
                                    {videoId && (
                                      <>
                                        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                                          <iframe
                                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                                            src={`https://www.youtube.com/embed/${videoId}`}
                                            title={project.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                          />
                                        </div>
                                        <div className="flex gap-2">
                                          <Button
                                            onClick={() => toggleProjectVideo(sectionIdx, projectIdx)}
                                            variant="outline"
                                            size="sm"
                                            className="flex-1"
                                          >
                                            Hide Video
                                          </Button>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                )}
                              </Card>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Card>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Card>

      </Accordion>
    </div>
  );
};
