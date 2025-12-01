import { useState, useEffect } from "react";

const API_BASE = "http://localhost:5000/api/progress"; // change if needed
const TRACK_ID = "data_analyst";

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

const defaultProgress: UserProgress = {
  videosWatched: [],
  quizzesCompleted: {},
  currentModule: "excel-fundamentals",
  overallProgress: 0,
};

export const useDataAnalystProgress = () => {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [loaded, setLoaded] = useState(false);

  const token = localStorage.getItem("cg-token");

  // ----------------------------
  // 🔥 1) Load progress from backend
  // ----------------------------
  useEffect(() => {
    const fetchProgress = async () => {
      if (!token) return;

      try {
        const res = await fetch(`${API_BASE}/${TRACK_ID}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (data.success && data.progress) {
          setProgress({
            videosWatched: data.progress.modules.flatMap((m: any) => m.videosWatched || []),
            quizzesCompleted: data.progress.quizzesCompleted || {},
            currentModule: data.progress.currentModule || "excel-fundamentals",
            overallProgress: data.progress.overallProgress || 0,
          });
        }
      } catch (err) {
        console.error("Error loading progress:", err);
      }

      setLoaded(true);
    };

    fetchProgress();
  }, [token]);

  // ----------------------------
  // 🔥 Helper to send updates to backend
  // ----------------------------
  const saveToBackend = async (updates: any) => {
    if (!token) return;

    try {
      await fetch(API_BASE, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          trackId: TRACK_ID,
          updates,
        }),
      });
    } catch (err) {
      console.error("Failed to sync progress:", err);
    }
  };

  // ----------------------------
  // 🔥 VIDEO COMPLETE
  // ----------------------------
  const markVideoComplete = (videoId: string) => {
    setProgress((prev) => {
      if (prev.videosWatched.includes(videoId)) return prev;

      const updated = {
        ...prev,
        videosWatched: [...prev.videosWatched, videoId],
      };

      saveToBackend(updated);
      return updated;
    });
  };

  const markVideoIncomplete = (videoId: string) => {
    setProgress((prev) => {
      const updated = {
        ...prev,
        videosWatched: prev.videosWatched.filter((id) => id !== videoId),
      };

      saveToBackend(updated);
      return updated;
    });
  };

  const isVideoWatched = (videoId: string) => {
    return progress.videosWatched.includes(videoId);
  };

  // ----------------------------
  // 🔥 QUIZ COMPLETE
  // ----------------------------
  const saveQuizResult = (quizId: string, score: number, passed: boolean) => {
    setProgress((prev) => {
      const updated = {
        ...prev,
        quizzesCompleted: {
          ...prev.quizzesCompleted,
          [quizId]: {
            score,
            passed,
            completedAt: new Date().toISOString(),
            attempts: (prev.quizzesCompleted[quizId]?.attempts || 0) + 1,
          },
        },
      };

      saveToBackend(updated);
      return updated;
    });
  };

  const getQuizResult = (quizId: string) => progress.quizzesCompleted[quizId];

  // ----------------------------
  // 🔥 MODULE PROGRESS
  // ----------------------------
  const getModuleProgress = (
    moduleId: string,
    totalVideos: number,
    hasQuiz: boolean
  ) => {
    const modulePrefix = moduleId.split("-")[0];

    const watchedVideos = progress.videosWatched.filter((id) =>
      id.startsWith(modulePrefix)
    );

    const videosProgress =
      (watchedVideos.length / totalVideos) * (hasQuiz ? 80 : 100);

    const quizKey = `quiz-${modulePrefix}`;
    const quizProgress = progress.quizzesCompleted[quizKey]?.passed ? 20 : 0;

    return Math.round(videosProgress + quizProgress);
  };

  const isModuleComplete = (moduleId: string, totalVideos: number) => {
    const modulePrefix = moduleId.split("-")[0];

    const watchedVideos = progress.videosWatched.filter((id) =>
      id.startsWith(modulePrefix)
    );

    const quizKey = `quiz-${modulePrefix}`;
    const quizResult = progress.quizzesCompleted[quizKey];

    return watchedVideos.length === totalVideos && quizResult?.passed;
  };

  // ----------------------------
  // 🔥 Overall Progress Calculation
  // ----------------------------
  const calculateOverallProgress = (totalVideos: number, totalQuizzes: number) => {
    const videoPart =
      (progress.videosWatched.length / totalVideos) * 70;

    const quizPassed = Object.values(progress.quizzesCompleted).filter(
      (q) => q.passed
    ).length;

    const quizPart = (quizPassed / totalQuizzes) * 30;

    return Math.round(videoPart + quizPart);
  };

  // ----------------------------
  // 🔥 Reset
  // ----------------------------
  const resetProgress = () => {
    setProgress(defaultProgress);
    saveToBackend(defaultProgress);
  };

  return {
    loaded,
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
