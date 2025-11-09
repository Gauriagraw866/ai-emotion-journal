import React, { useState, useEffect } from "react";
import { getJournalEntries } from "./api";
import JournalForm from "./components/JournalForm";
import EntryList from "./components/EntryList";
import EmotionChart from "./components/EmotionChart";
import EmotionTrends from "./components/EmotionTrends";

export default function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getJournalEntries();
      setEntries(data);
    })();
  }, []);

  const handleNewEntry = (entry) => {
    setEntries((prev) => [entry, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-pink-50 to-white flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-indigo-700 tracking-tight">
        ✨ AI Emotion Journal
      </h1>
      <JournalForm onNewEntry={handleNewEntry} />
      <EmotionChart />
      <EntryList entries={entries} />
    </div>
  );
}
