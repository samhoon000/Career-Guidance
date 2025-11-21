import requests
import json
import re

YOUTUBE_PLAYER_URL = "https://www.youtube.com/youtubei/v1/player"
HEADERS = {
    "User-Agent": "Mozilla/5.0",
    "Content-Type": "application/json"
}


def extract_video_id(url):
    """Extract YouTube video ID from URL or raw ID."""
    if len(url) == 11 and re.match("^[A-Za-z0-9_-]{11}$", url):
        return url

    match = re.search(r"(?:v=|youtu\.be/|shorts/)([^&?/]+)", url)
    return match.group(1) if match else None


def get_caption_url(video_id, lang_code="en"):
    """Fetch caption track URL using YouTube internal API."""
    payload = {
        "context": {
            "client": {"clientName": "WEB", "clientVersion": "2.20240715.01.00"}
        },
        "videoId": video_id
    }

    try:
        r = requests.post(YOUTUBE_PLAYER_URL, headers=HEADERS, json=payload)
        data = r.json()

        tracks = data["captions"]["playerCaptionsTracklistRenderer"]["captionTracks"]

        for t in tracks:
            if t.get("languageCode") == lang_code:
                return t["baseUrl"]

        return tracks[0]["baseUrl"]

    except Exception:
        return None


def download_transcript(caption_url):
    """Download and clean caption XML into readable text."""
    r = requests.get(caption_url, headers={"User-Agent": "Mozilla/5.0"})
    if r.status_code != 200:
        return None

    xml = r.text
    parts = re.findall(r'<text start="[^"]+" dur="[^"]+">(.+?)</text>', xml)

    clean_parts = [
        p.replace("&amp;", "&")
         .replace("&#39;", "'")
         .replace("&quot;", '"')
         .replace("&lt;", "<")
         .replace("&gt;", ">")
        for p in parts
    ]

    return "\n".join(clean_parts)
