import os
import json
from groq import Groq
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))


# ---------- CHUNKING ----------
def chunk_text(text, max_chars=3500):
    chunks = []
    while len(text) > max_chars:
        split_at = text.rfind(".", 0, max_chars)
        if split_at == -1:
            split_at = max_chars
        chunks.append(text[:split_at])
        text = text[split_at:]
    chunks.append(text)
    return chunks


# ---------- SUMMARIZE EACH CHUNK ----------
def summarize_chunk(chunk, index):
    prompt = f"""
    Summarize this transcript chunk #{index}.
    Keep it concise, clean, and focused only on important points.
    DO NOT write questions.

    Chunk:
    {chunk}
    """

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[{"role": "user", "content": prompt}],
        temperature=0,
        max_tokens=800
    )

    return response.choices[0].message.content


# ---------- FINAL QUIZ GENERATION ----------
def generate_final_quiz(full_summary):

    prompt = f"""
You MUST output valid JSON only.

The JSON MUST follow this exact structure:

{{
  "easy": [
    {{ "question": "...", "options": ["option1", "option2", "option3", "option4"], "correct_answer": "...", "difficulty": "Easy" }},
    ... 10 questions ...
  ],
  "medium": [
    {{ "question": "...", "options": ["option1", "option2", "option3", "option4"], "correct_answer": "...", "difficulty": "Medium" }},
    ... 10 questions ...
  ],
  "hard": [
    {{ "question": "...", "options": ["option1", "option2", "option3", "option4"], "correct_answer": "...", "difficulty": "Hard" }},
    ... 10 questions ...
  ]
}}

STRICT RULES:
- Each difficulty group MUST contain exactly 10 questions.
- Each question MUST have 4 meaningful options (NOT "A,B,C,D", NOT placeholders).
- Each option MUST be an actual possible answer based on the transcript summary.
- Options MUST NOT be generic letters.
- The correct_answer MUST match exactly one of the option texts.
- Questions MUST come from the concepts in the summary.
- No extra comments or markdown.
- Output ONLY JSON.

SUMMARY:
{full_summary}
"""



    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.1,
        max_tokens=4000,
        response_format={"type": "json_object"}  # enforce JSON
    )

    raw = response.choices[0].message.content
    parsed = json.loads(raw)

    # Validate expected structure
    if not ("easy" in parsed and "medium" in parsed and "hard" in parsed):
        raise ValueError("Model did not return structured difficulty levels")

    # Return single flat list (your frontend expects this)
    final_list = parsed["easy"] + parsed["medium"] + parsed["hard"]
    return final_list



# ---------- MASTER FUNCTION ----------
def generate_quiz_from_transcript(transcript):

    # A. Chunk
    chunks = chunk_text(transcript)

    # B. Summaries
    summaries = [summarize_chunk(chunk, i + 1) for i, chunk in enumerate(chunks)]

    # C. Combined summary
    final_summary = "\n\n".join(summaries)

    # D. Generate structured quiz
    return generate_final_quiz(final_summary)
