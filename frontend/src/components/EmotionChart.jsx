import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getEmotionStats } from "../api";

const COLORS = [
  "#4ade80", // Happy
  "#f87171", // Sad
  "#fb923c", // Angry
  "#f472b6", // Excited
  "#a78bfa", // Fear
  "#facc15", // Disgusted
  "#38bdf8", // Surprised
  "#a1a1aa", // Neutral
];


export default function EmotionChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const stats = await getEmotionStats();
      const chartData = Object.entries(stats).map(([name, value]) => ({ name, value }));
      setData(chartData);
    })();
  }, []);

  return (
    <div className="mt-8 w-full max-w-2xl bg-white/80 rounded-2xl shadow-md p-6 border border-indigo-100">
      <h2 className="text-xl font-semibold text-indigo-600 mb-4">📊 Mood Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
