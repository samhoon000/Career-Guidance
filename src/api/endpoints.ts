export const LOGIN_API = import.meta.env.VITE_LOGIN_API_URL;
export const MENTOR_API = import.meta.env.VITE_MENTOR_API_URL;
export const CHAT_API = import.meta.env.VITE_CHAT_API_URL;
export const GROQ_API = import.meta.env.VITE_GROQ_API_URL;
export const QUIZ_API = import.meta.env.VITE_QUIZ_API_URL;

// Add local fallbacks for safety
export const LOGIN_API_FALLBACK = LOGIN_API || "http://localhost:5000";
export const MENTOR_API_FALLBACK = MENTOR_API || "http://localhost:5001";
export const CHAT_API_FALLBACK = CHAT_API || "http://localhost:3000";
export const GROQ_API_FALLBACK = GROQ_API || "http://localhost:3001";
export const QUIZ_API_FALLBACK = QUIZ_API || "http://localhost:5002";

