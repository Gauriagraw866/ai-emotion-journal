from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
import config
from routes.journal_routes import journal_bp  # ✅ import this blueprint

app = Flask(__name__)
CORS(app)  # allow frontend access

# ✅ Connect MongoDB
try:
    client = MongoClient(config.MONGO_URL, serverSelectionTimeoutMS=3000)
    db = client["ai_emotion_journal"]
    app.db = db
    client.server_info()
    print("✅ MongoDB connected successfully!")
except Exception as e:
    print("❌ MongoDB connection failed:", e)

# ✅ Register the blueprint under /api/journal
app.register_blueprint(journal_bp, url_prefix="/api/journal")

@app.route("/")
def home():
    return {"message": "AI Emotion Journal Backend is Running 🚀"}

if __name__ == "__main__":
    print("🚀 Starting Flask server on http://127.0.0.1:5000")
    app.run(debug=True)

