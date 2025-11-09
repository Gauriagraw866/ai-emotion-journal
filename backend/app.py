from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
from routes.journal_routes import journal_bp
import os

app = Flask(__name__)
CORS(app)

# ✅ MongoDB connection
try:
    MONGO_URI = os.getenv("MONGO_URI","mongodb+srv://Gauri866:Agrawal123@emotion-journal-cluster.gavhefn.mongodb.net/?retryWrites=true&w=majority")
    client = MongoClient(MONGO_URI)
    db = client["emotion_journal"]
    app.db = db
    print("✅ MongoDB connected successfully!")
except Exception as e:
    print("❌ MongoDB connection error:", e)

# Register Blueprint
app.register_blueprint(journal_bp, url_prefix="/api/journal")

if __name__ == "__main__":
    print("🚀 Starting Flask server on http://127.0.0.1:5000")
    app.run(host="127.0.0.1", port=5000, debug=True)
