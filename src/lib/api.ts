const FALLBACK_API_BASE_URL = "http://127.0.0.1:5001";



const normalizeApiBaseUrl = (rawValue?: string | null): string => {
  const candidate = rawValue?.trim();
  const withProtocol = candidate
    ? /^https?:\/\//i.test(candidate)
      ? candidate
      : `http://${candidate.replace(/^\/+/, "")}`
    : FALLBACK_API_BASE_URL;

  try {
    const url = new URL(withProtocol);
    if (!url.hostname) {
      throw new Error("Missing hostname");
    }
    return url.origin;
  } catch {
    return FALLBACK_API_BASE_URL;
  }
};

export const API_BASE_URL = normalizeApiBaseUrl(import.meta.env.VITE_API_BASE_URL);

export const ensureValidApiBaseUrl = (): string => {
  if (!API_BASE_URL || !/^https?:\/\/[^/]+$/i.test(API_BASE_URL)) {
    throw new Error(
      'API_BASE_URL is invalid. Please set VITE_API_BASE_URL (e.g. "http://127.0.0.1:5001").'
    );
  }

  return API_BASE_URL;
};

export const buildQuizUrl = (videoUrl: string) => {
  if (!videoUrl) {
    throw new Error("A videoUrl is required to build the quiz URL.");
  }

  return `${API_BASE_URL}/generate-quiz?videoUrl=${encodeURIComponent(videoUrl)}`;
};

