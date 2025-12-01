from flask import Flask, request, jsonify
from flask_cors import CORS
from transcript import extract_video_id, get_caption_url, download_transcript
from quiz_generator import generate_quiz_from_transcript

app = Flask(__name__)
CORS(app)


@app.route("/generate-quiz", methods=["GET"])
def generate_quiz():
    youtube_url = request.args.get("videoUrl")

    if not youtube_url:
        return jsonify({"error": "Missing videoUrl parameter"}), 400

    video_id = extract_video_id(youtube_url)
    if not video_id:
        return jsonify({"error": "Invalid YouTube URL"}), 400

    caption_url = get_caption_url(video_id, "en")
    if not caption_url:
        return jsonify({"error": "No transcript available"}), 404

    transcript = download_transcript(caption_url)
    if not transcript:
        return jsonify({"error": "Transcript download failed"}), 500

    quiz = generate_quiz_from_transcript(transcript)

    # Normalize quiz output → ALWAYS return flat array
    return jsonify({
        "success": True,
        "video_id": video_id,
        "quiz": quiz["questions"] if isinstance(quiz, dict) and "questions" in quiz else quiz
    })


@app.errorhandler(404)
def handle_not_found(_):
    return jsonify({"error": "Not found"}), 404


@app.errorhandler(500)
def handle_internal_error(error):
    return jsonify({"error": "Internal server error", "details": str(error)}), 500


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5002, debug=True)
