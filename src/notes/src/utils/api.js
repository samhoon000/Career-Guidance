import { GROQ_API_FALLBACK } from "@/api/endpoints";

const BASE_URL = GROQ_API_FALLBACK;

export async function sendToGroq(text) {
  const res = await fetch(`${BASE_URL}/assistant`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text })
  });

  const data = await res.json();
  return data.reply;
}
