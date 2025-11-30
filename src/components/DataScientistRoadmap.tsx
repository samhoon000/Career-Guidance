import { useState } from "react";
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
import { dataScientistModules, projects } from "@/data/dataScientistContent";
import { useDataScientistProgress } from "@/hooks/useDataScientistProgress";
import { VideoLesson } from "@/components/VideoLesson";
import { Quiz } from "@/components/Quiz";

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
