import axios from "axios";

const API_BASE_URL = "https://ai-emotion-journal.onrender.com/api/journal";

export const addJournalEntry = async (text) => {
  const response = await axios.post(`${API_BASE_URL}/add`, { text });
  return response.data;
};

export const getJournalEntries = async () => {
  const response = await axios.get(`${API_BASE_URL}/entries`);
  return response.data;
};

export const getEmotionStats = async () => {
  const response = await axios.get(`${API_BASE_URL}/stats`);
  return response.data;
};
export const getEmotionTrends = async () => {
  const response = await axios.get("http://127.0.0.1:5000/api/journal/trends");
  return response.data;
};
