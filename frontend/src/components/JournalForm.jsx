import React, { useState, useRef } from "react";
import { addJournalEntry } from "../api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function JournalForm({ onNewEntry }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return toast.error("🎤 Speech recognition not supported!");
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.onresult = (e) => setText((prev) => prev + " " + e.results[0][0].transcript);
    recognition.onerror = () => toast.error("🎙️ Microphone error!");
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
    toast.info("🎧 Listening...");
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
    toast.info("🛑 Stopped listening");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return toast.warning("✍️ Please write or speak something!");
    const tempEntry = { text, emotion: "Analyzing...", date: new Date().toISOString().split("T")[0] };
    onNewEntry(tempEntry);
    setText("");
    setLoading(true);
    try {
      const result = await addJournalEntry(text);
      onNewEntry({
        text,
        emotion: result.emotion,
        date: new Date().toISOString().split("T")[0],
      });
      toast.success("✅ Entry saved!");
    } catch {
      toast.error("❌ Backend connection failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white/70 backdrop-blur-lg rounded-2xl w-full max-w-2xl border border-indigo-100 shadow-lg"
    >
      <textarea
        className="border w-full p-4 rounded-lg focus:ring-2 focus:ring-indigo-400 bg-white/80 placeholder-gray-500 text-gray-800"
        rows="4"
        placeholder="Write or speak your thoughts..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex justify-between items-center mt-4">
        <button
          type="button"
          onClick={listening ? stopListening : startListening}
          className={`px-5 py-2.5 rounded-lg text-white font-semibold transition ${
            listening
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {listening ? "🛑 Stop" : "🎤 Speak"}
        </button>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "💫 Saving..." : "💾 Save Entry"}
        </button>
      </div>
      <ToastContainer position="top-right" autoClose={1500} theme="light" />
    </form>
  );
}
