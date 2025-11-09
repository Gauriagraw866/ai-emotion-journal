## 🖼️ Preview
<img width="1275" height="846" alt="Screenshot (28)" src="https://github.com/user-attachments/assets/8a681d4e-2fd1-4d68-aea0-15cdac82fda2" />

## 🚀 Live Demo

- 🎨 **Frontend (React + Tailwind)**:  
  [https://aiemotiontracker.netlify.app](https://aiemotiontracker.netlify.app/)

- ⚙️ **Backend API (Flask + MongoDB)**:  
  [https://ai-emotion-journal-backend.onrender.com](https://ai-emotion-journal.onrender.com)
# 🧠 AI Emotion Journal

An intelligent and visually vibrant web application that allows users to **record their daily thoughts** through **text or voice**, and uses **AI-based sentiment analysis** to determine and visualize their **emotional trends** over time.  

---
## 🧠 Features
- 🗣️ Write or speak your thoughts
- 🤖 AI-powered emotion analysis (Happy, Sad, Angry, Neutral, etc.)
- 📈 Real-time emotion visualization with charts
- ☁️ Persistent storage using MongoDB Atlas
- 🧾 Modern responsive UI (React + TailwindCSS)

---

## 🛠️ Tech Stack
**Frontend:** React.js, TailwindCSS, Recharts  
**Backend:** Flask, Flask-CORS, MongoDB, TextBlob  
**Hosting:** Netlify (Frontend), Render (Backend)

---

## 💻 Setup (Local)
```bash
# Backend setup
cd backend
pip install -r requirements.txt
python app.py

# Frontend setup
cd ../frontend
npm install
npm start

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Gauriagraw866/ai-emotion-journal.git
cd ai-emotion-journal

🧠 How It Works

1.User enters or speaks their thoughts.

2.The app instantly stores the entry with a placeholder “Analyzing...” emotion.

3.A background thread runs sentiment analysis using the VADER NLP model.

4.The result (Happy, Sad, or Neutral) is updated in MongoDB.

5.The chart and entry list automatically visualize your mood trends.

  ##Future Enhancements

🌙 Dark Mode Toggle

🔔 Live Emotion Update (real-time refresh)

🧍‍♂️ User Authentication (Login/Register)

📅 Calendar-based Emotion Tracking

🧠 AI-generated mood suggestions or affirmations

