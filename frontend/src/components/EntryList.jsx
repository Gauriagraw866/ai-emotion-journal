import React from "react";
import happy from "../assets/happy.png";
import sad from "../assets/sad.png";
import neutral from "../assets/neutral.png";
import angry from "../assets/angry.png";
import excited from "../assets/excited.png";
import fear from "../assets/fear.png";
import disgusted from "../assets/disgusted.png";
import surprised from "../assets/surprised.png";

export default function EntryList({ entries }) {
  const getImage = (emotion) => {
    switch (emotion) {
      case "Happy":
        return happy;
      case "Sad":
        return sad;
      case "Angry":
        return angry;
      case "Excited":
        return excited;
      case "Fear":
        return fear;
      case "Disgusted":
        return disgusted;
      case "Surprised":
        return surprised;
      default:
        return neutral;
    }
  };

  return (
    <div className="w-full max-w-2xl bg-gradient-to-br from-pink-50 via-white to-indigo-50 rounded-2xl shadow-lg p-6 border border-pink-100 mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-pink-600">📝 Journal Entries</h2>
      {entries.length === 0 ? (
        <p className="text-gray-500 text-center italic">No entries yet...</p>
      ) : (
        <ul className="space-y-4">
          {entries.map((e, i) => (
            <li
              key={i}
              className="p-4 bg-white rounded-xl shadow flex justify-between items-center"
            >
              <div>
                <p className="text-gray-700 font-medium">{e.text}</p>
                <p className="text-sm text-gray-500">{e.date}</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={getImage(e.emotion)} alt={e.emotion} className="w-10 h-10" />
                <span
                  className={`text-sm font-semibold mt-1 ${
                    e.emotion === "Happy"
                      ? "text-green-500"
                      : e.emotion === "Sad"
                      ? "text-red-500"
                      : e.emotion === "Angry"
                      ? "text-orange-500"
                      : e.emotion === "Excited"
                      ? "text-pink-500"
                      : e.emotion === "Fear"
                      ? "text-purple-500"
                      : e.emotion === "Disgusted"
                      ? "text-yellow-600"
                      : e.emotion === "Surprised"
                      ? "text-blue-500"
                      : "text-gray-500"
                  }`}
                >
                  {e.emotion}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
