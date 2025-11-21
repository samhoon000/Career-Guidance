import { useState, useEffect } from "react";

export interface Progress {
  videosWatched: string[];
  quizzesCompleted: Record<string, { score: number; passed: boolean; attempts: number }>;
  currentModuleId: string;
  overallProgress: number;
}

const STORAGE_KEY = "cloudEngineerProgress";

const loadProgress = (): Progress => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return {
    videosWatched: [],
    quizzesCompleted: {},
    currentModuleId: "module-1",
    overallProgress: 0,
  };
};

export const useCloudEngineerProgress = () => {
  const [progress, setProgress] = useState<Progress>(loadProgress);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  // Auto-calculate overall progress
  useEffect(() => {
    const totalVideos = 24; // Approximate total videos across all modules
    const totalQuizzes = 6;
    const videosProgress = (progress.videosWatched.length / totalVideos) * 70;
    const passedQuizzes = Object.values(progress.quizzesCompleted).filter((q) => q.passed).length;
    const quizzesProgress = (passedQuizzes / totalQuizzes) * 30;
    const calculated = Math.round(videosProgress + quizzesProgress);
    
    if (calculated !== progress.overallProgress) {
      setProgress((prev) => ({ ...prev, overallProgress: calculated }));
    }
  }, [progress.videosWatched.length, Object.keys(progress.quizzesCompleted).length]);

  const markVideoComplete = (videoId: string) => {
    setProgress((prev) => ({
      ...prev,
      videosWatched: [...new Set([...prev.videosWatched, videoId])],
    }));
  };

  const markVideoIncomplete = (videoId: string) => {
    setProgress((prev) => ({
      ...prev,
      videosWatched: prev.videosWatched.filter((id) => id !== videoId),
    }));
  };

  const markQuizComplete = (quizId: string, score: number, passed: boolean) => {
    setProgress((prev) => {
      const currentAttempts = prev.quizzesCompleted[quizId]?.attempts || 0;
      return {
        ...prev,
        quizzesCompleted: {
          ...prev.quizzesCompleted,
          [quizId]: { score, passed, attempts: currentAttempts + 1 },
        },
      };
    });
  };

  const updateCurrentModule = (moduleId: string) => {
    setProgress((prev) => ({
      ...prev,
      currentModuleId: moduleId,
    }));
  };

  const updateOverallProgress = (percentage: number) => {
    setProgress((prev) => ({
      ...prev,
      overallProgress: percentage,
    }));
  };

  return {
    progress,
    markVideoComplete,
    markVideoIncomplete,
    markQuizComplete,
    updateCurrentModule,
    updateOverallProgress,
  };
};
