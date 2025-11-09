import React, { useState, useEffect } from "react";
import { addJournalEntry, getJournalEntries } from "../api";

import JournalForm from "../components/JournalForm";
import EmotionChart from "../components/EmotionChart";
import EntryList from "../components/EntryList";
import headerImage from "../assets/header.png";

export default function Dashboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch entries from backend
  const fetchEntries = async () => {
    try {
      const data = await getJournalEntries();
      setEntries(data);
    } catch (error) {
      console.error("❌ Error fetching entries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  // Add a new entry
  const addEntry = async (text) => {
    try {
      const result = await addJournalEntry(text);
      setEntries((prev) => [...prev, { text, sentiment: result.sentiment }]);
    } catch (error) {
      console.error("❌ Error adding entry:", error);
      alert("Error saving entry. Check backend connection!");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold text-gray-700">
        Loading your journal entries...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-10 space-y-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 opacity-70 blur-3xl -z-10" />

      {/* Header section */}
      <div className="flex flex-col items-center space-y-2">
        <img src={headerImage} alt="AI Journal" className="w-28 animate-bounce" />
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
          🧠 AI Emotion Journal
        </h1>
        <p className="text-gray-600 text-sm italic">
          Reflect. Record. Reveal your emotions through AI 💫
        </p>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center gap-10 w-full px-4">
        <JournalForm onNewEntry={addEntry} />
        <EmotionChart entries={entries} />
        <EntryList entries={entries} />
      </div>
    </div>
  );
}
