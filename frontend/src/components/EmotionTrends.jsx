import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getEmotionTrends } from "../api";

export default function EmotionTrends() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const trendData = await getEmotionTrends();
        setData(trendData);
      } catch (error) {
        console.error("Error fetching trend data:", error);
      }
    })();
  }, []);

  const colors = {
    Angry: "#22c55e",
    Disgusted: "#ef4444",
    Excited: "#ec4899",
    Fear: "#a78bfa",
    Happy: "#60a5fa",
    Neutral: "#facc15",
    Sad: "#38bdf8",
    Surprised: "#f472b6",
  };

  return (
    <div className="mt-10 w-full max-w-2xl bg-white/80 rounded-2xl shadow-md p-6 border border-indigo-100">
      <h2 className="text-xl font-semibold text-indigo-600 mb-4">
        📅 Mood Trend (by Day)
      </h2>
      {data.length === 0 ? (
        <p className="text-gray-500 text-center italic">
          No data yet — add some entries!
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            {Object.entries(colors).map(([emotion, color]) => (
              <Bar
                key={emotion}
                dataKey={emotion}
                fill={color}
                stackId="a"
                radius={[6, 6, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
