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
import { Lock, Play, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { mlEngineerModules, projects } from "@/data/mlEngineerContent";
import { Progress as ProgressType } from "@/hooks/useMLEngineerProgress";
import { VideoLesson } from "./VideoLesson";
import { Quiz } from "./Quiz";

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

interface MLEngineerRoadmapProps {
  progress: ProgressType;
  onMarkVideoComplete: (videoId: string) => void;
  onMarkVideoIncomplete: (videoId: string) => void;
  onQuizComplete: (quizId: string, score: number, passed: boolean) => void;
}

export const MLEngineerRoadmap = ({
  progress,
  onMarkVideoComplete,
  onMarkVideoIncomplete,
  onQuizComplete,
}: MLEngineerRoadmapProps) => {
  const isModuleUnlocked = (moduleOrder: number) => {
    if (moduleOrder === 1) return true;
    
    const previousModule = mlEngineerModules.find((m) => m.order === moduleOrder - 1);
    if (!previousModule) return false;
    
    const previousQuizResult = progress.quizzesCompleted[previousModule.quiz.id];
    return previousQuizResult?.passed || false;
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
    <div className="container px-4 py-8 mx-auto max-w-5xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">ML Engineer Learning Roadmap</h1>
        <p className="text-muted-foreground">
          Complete modules with videos, quizzes, and practical projects to master ML engineering.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4" defaultValue="item-0">
        {mlEngineerModules.map((module, idx) => {
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
