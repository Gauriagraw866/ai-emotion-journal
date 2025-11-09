from flask import Blueprint, request, jsonify, current_app
from utils.sentiment_analyzer import analyze_emotion
from threading import Thread
import time

journal_bp = Blueprint("journal", __name__)

@journal_bp.route("/add", methods=["POST"])
def add_entry():
    """Add a new journal entry and analyze emotion."""
    data = request.get_json()
    text = str(data.get("text", "")).strip()
    if not text:
        return jsonify({"error": "Text is required"}), 400

    emotion = analyze_emotion(text)
    app = current_app._get_current_object()
    entry = {
        "text": text,
        "emotion": emotion,
        "date": time.strftime("%Y-%m-%d %H:%M:%S")
    }

    def save_entry():
        with app.app_context():
            db = current_app.db
            db.entries.insert_one(entry)

    Thread(target=save_entry).start()
    return jsonify({"message": "Entry saved", "emotion": emotion}), 200


@journal_bp.route("/entries", methods=["GET"])
def get_entries():
    """Return all journal entries sorted by date (latest first)."""
    db = current_app.db
    entries = list(db.entries.find({}, {"_id": 0}).sort("date", -1))
    return jsonify(entries), 200


@journal_bp.route("/stats", methods=["GET"])
def get_stats():
    """Return emotion count for analytics."""
    db = current_app.db
    all_emotions = ["Happy", "Sad", "Angry", "Excited", "Fear", "Disgusted", "Surprised", "Neutral"]
    stats = {emotion: 0 for emotion in all_emotions}

    for e in db.entries.find({}, {"_id": 0, "emotion": 1}):
        emo = e.get("emotion", "Neutral")
        if emo in stats:
            stats[emo] += 1

    return jsonify(stats), 200


@journal_bp.route("/trends", methods=["GET"])
def get_trends():
    """Return emotion counts grouped by date."""
    db = current_app.db
    entries = db.entries.find({}, {"_id": 0, "date": 1, "emotion": 1})

    trends = {}
    for e in entries:
        date = e["date"].split(" ")[0]  # only keep YYYY-MM-DD
        emotion = e["emotion"]
        if date not in trends:
            trends[date] = {"Happy": 0, "Sad": 0, "Neutral": 0}
        if emotion in trends[date]:
            trends[date][emotion] += 1

    # Format for frontend [{ date, Happy, Sad, Neutral }]
    trend_data = [
        {"date": date, **counts} for date, counts in sorted(trends.items())
    ]
    return jsonify(trend_data), 200
