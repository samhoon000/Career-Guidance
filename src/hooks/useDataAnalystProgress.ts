import { useState, useEffect } from "react";

export interface UserProgress {
  videosWatched: string[];
  quizzesCompleted: {
    [quizId: string]: {
      score: number;
      passed: boolean;
      completedAt: string;
      attempts: number;
    };
  };
  currentModule: string;
  overallProgress: number;
}

const STORAGE_KEY = "data-analyst-progress";

const initialProgress: UserProgress = {
  videosWatched: [],
  quizzesCompleted: {},
  currentModule: "excel-fundamentals",
  overallProgress: 0,
};

export const useDataAnalystProgress = () => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialProgress;
  });

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
    setProgress((prev) => {
      if (prev.videosWatched.includes(videoId)) return prev;
      return {
        ...prev,
        videosWatched: [...prev.videosWatched, videoId],
      };
    });
  };

  const markVideoIncomplete = (videoId: string) => {
    setProgress((prev) => ({
      ...prev,
      videosWatched: prev.videosWatched.filter((id) => id !== videoId),
    }));
  };

  const isVideoWatched = (videoId: string): boolean => {
    return progress.videosWatched.includes(videoId);
  };

  const saveQuizResult = (quizId: string, score: number, passed: boolean) => {
    setProgress((prev) => {
      const existingAttempts = prev.quizzesCompleted[quizId]?.attempts || 0;
      return {
        ...prev,
        quizzesCompleted: {
          ...prev.quizzesCompleted,
          [quizId]: {
            score,
            passed,
            completedAt: new Date().toISOString(),
            attempts: existingAttempts + 1,
          },
        },
      };
    });
  };

  const getQuizResult = (quizId: string) => {
    return progress.quizzesCompleted[quizId];
  };

  const getModuleProgress = (moduleId: string, totalVideos: number, hasQuiz: boolean) => {
    const moduleVideos = progress.videosWatched.filter((id) => id.startsWith(moduleId.split("-")[0]));
    const videosProgress = (moduleVideos.length / totalVideos) * (hasQuiz ? 80 : 100);
    
    const quizKey = `quiz-${moduleId.split("-")[0]}`;
    const quizResult = progress.quizzesCompleted[quizKey];
    const quizProgress = quizResult?.passed ? 20 : 0;
    
    return Math.round(videosProgress + quizProgress);
  };

  const isModuleComplete = (moduleId: string, totalVideos: number) => {
    const quizKey = `quiz-${moduleId.split("-")[0]}`;
    const moduleVideos = progress.videosWatched.filter((id) => id.startsWith(moduleId.split("-")[0]));
    const quizResult = progress.quizzesCompleted[quizKey];
    
    return moduleVideos.length === totalVideos && quizResult?.passed;
  };

  const calculateOverallProgress = (totalVideos: number, totalQuizzes: number) => {
    const videosProgress = (progress.videosWatched.length / totalVideos) * 70;
    const passedQuizzes = Object.values(progress.quizzesCompleted).filter((q) => q.passed).length;
    const quizzesProgress = (passedQuizzes / totalQuizzes) * 30;
    
    return Math.round(videosProgress + quizzesProgress);
  };

  const resetProgress = () => {
    setProgress(initialProgress);
  };

  return {
    progress,
    markVideoComplete,
    markVideoIncomplete,
    isVideoWatched,
    saveQuizResult,
    getQuizResult,
    getModuleProgress,
    isModuleComplete,
    calculateOverallProgress,
    resetProgress,
  };
};
