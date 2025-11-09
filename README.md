## 🌍 Live Demo
- Frontend: [ai-emotion-journal.netlify.app](https://ai-emotion-journal.netlify.app)
- Backend API: [ai-emotion-journal-backend.onrender.com](https://ai-emotion-journal-backend.onrender.com)

# 🧠 AI Emotion Journal

An intelligent and visually vibrant web application that allows users to **record their daily thoughts** through **text or voice**, and uses **AI-based sentiment analysis** to determine and visualize their **emotional trends** over time.  

---

## 🚀 Features

✅ **Text & Voice Input** — Journal your mood by typing or speaking  
✅ **AI Sentiment Analysis** — Detects emotions as *Happy*, *Sad*, or *Neutral*  
✅ **Interactive Emotion Graph** — Visualizes daily emotion trends  
✅ **MongoDB Storage** — Securely saves user entries  
✅ **Real-time Toast Notifications** — For success/error feedback  
✅ **Gradient UI with Glassmorphism** — Modern, soft, and colorful interface  
✅ **Responsive Design** — Works smoothly on mobile & desktop  
✅ **Fast & Lightweight Backend** — Flask + NLTK (VADER sentiment)  

---

## 🧩 Tech Stack

| Layer | Technology Used |
|-------|------------------|
| **Frontend** | React.js, Tailwind CSS, Axios, Chart.js, React Toastify |
| **Backend** | Flask, Python, Flask-CORS, Threading for async NLP |
| **Database** | MongoDB Atlas |
| **AI / NLP** | NLTK’s VADER Sentiment Analyzer |
| **Speech** | Web Speech API (Browser-based Speech-to-Text) |

---

## 📁 Project Structure

ai-emotion-journal/
│
├── backend/
│ ├── app.py
│ ├── config.py
│ ├── requirements.txt
│ ├── routes/
│ │ └── journal_routes.py
│ ├── utils/
│ │ └── sentiment_analyzer.py
│ └── README.md
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── api.js
│ │ ├── index.js
│ │ ├── index.css
│ │ ├── pages/
│ │ │ └── Dashboard.jsx
│ │ ├── components/
│ │ │ ├── JournalForm.jsx
│ │ │ ├── EmotionChart.jsx
│ │ │ └── EntryList.jsx
│ │ └── assets/
│ │ ├── happy.png
│ │ ├── sad.png
│ │ ├── neutral.png
│ │ └── header.png
│ ├── tailwind.config.js
│ ├── package.json
│ └── README.md
│
└── README.md


---

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

