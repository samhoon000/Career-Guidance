import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

console.log("Loaded GROQ Key prefix:", (process.env.GROQ_API_KEY || '').slice(0, 6));

const app = express();
app.use(cors());
app.use(express.json());

const GROQ_KEY = process.env.GROQ_API_KEY;

app.post("/assistant", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content:
              "You are an educational and career assistant. You answer ANY question about careers, learning, jobs, roles, responsibilities, study help, skills, certifications, and education. You ONLY refuse politics, religion, personal issues, medical/legal advice, or anything clearly unrelated. If refusing, say: 'I can help only with education and career related topics.'"
          },
          { role: "user", content: userMessage }
        ]
      })
    });

    // Log raw response for debugging
    const raw = await response.text();
    console.log('RAW GROQ RESPONSE:', raw);

    // Try parsing JSON
    let data;
    try {
      data = JSON.parse(raw);
    } catch (err) {
      return res.json({
        reply: "Groq returned a non-JSON response.",
        raw
      });
    }

    // If Groq returned an error, show it
    if (!response.ok) {
      return res.json({
        reply: "GROQ_ERROR",
        detail: data
      });
    }

    // Extract assistant reply safely
    const reply =
      data?.choices?.[0]?.message?.content ??
      "Groq returned no message content.";

    res.json({ reply });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    res.json({ reply: "SERVER_ERROR", error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Groq server running on port ${PORT}`));

