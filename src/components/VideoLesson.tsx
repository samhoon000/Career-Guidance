import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Play, Clock } from "lucide-react";
import { Video } from "@/data/dataAnalystContent";
import { QuizModal } from "./quiz-modal";

interface VideoLessonProps {
  video: Video;
  isWatched: boolean;
  onMarkComplete: (videoId: string) => void;
  onMarkIncomplete: (videoId: string) => void;
}

export const VideoLesson = ({
  video,
  isWatched,
  onMarkComplete,
  onMarkIncomplete,
}: VideoLessonProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const handleToggleComplete = () => {
    if (isWatched) {
      onMarkIncomplete(video.id);
    } else {
      onMarkComplete(video.id);
    }
  };

  const handleOpenQuiz = () => {
    setSelectedVideoUrl(`https://www.youtube.com/watch?v=${video.youtubeId}`);
    setQuizOpen(true);
  };

  const handleCloseQuiz = () => {
    setQuizOpen(false);
    setSelectedVideoUrl(null);
  };

  return (
    <>
      <Card className="p-4 hover:shadow-md transition-shadow">
        <div className="flex items-start gap-3 mb-3">
          <button
            onClick={handleToggleComplete}
            className="mt-1 flex-shrink-0 transition-colors"
          >
            {isWatched ? (
              <CheckCircle2 className="w-5 h-5 text-success" />
            ) : (
              <Circle className="w-5 h-5 text-muted-foreground" />
            )}
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-sm">{video.title}</h4>
              <Badge variant="secondary" className="text-xs">
                <Clock className="w-3 h-3 mr-1" />
                {video.duration}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              {video.description}
            </p>
          </div>
        </div>

        {!showVideo ? (
          <div className="space-y-3">
            <Button
              onClick={() => setShowVideo(true)}
              variant="outline"
              size="sm"
              className="w-full"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Video
            </Button>
            <Button onClick={handleOpenQuiz} variant="outline" size="sm" className="w-full">
              Take Quiz
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => setShowVideo(false)}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                Hide Video
              </Button>
              {!isWatched && (
                <Button
                  onClick={handleToggleComplete}
                  size="sm"
                  className="flex-1"
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Mark Complete
                </Button>
              )}
            </div>
            <Button onClick={handleOpenQuiz} variant="outline" size="sm" className="w-full">
              Take Quiz
            </Button>
          </div>
        )}
      </Card>

      {selectedVideoUrl && (
        <QuizModal
          open={quizOpen}
          onClose={handleCloseQuiz}
          videoUrl={selectedVideoUrl}
        />
      )}
    </>
  );
};
