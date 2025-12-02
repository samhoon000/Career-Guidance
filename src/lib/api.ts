import { QUIZ_API_FALLBACK } from "@/api/endpoints";

export const buildQuizUrl = (videoUrl: string) => {
  if (!videoUrl) {
    throw new Error("A videoUrl is required to build the quiz URL.");
  }

  return `${QUIZ_API_FALLBACK}/generate-quiz?videoUrl=${encodeURIComponent(videoUrl)}`;
};

