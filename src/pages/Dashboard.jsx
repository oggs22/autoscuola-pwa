import React, { useState } from "react";
export default function Dashboard() {
  const [userData, setUserData] = useState({
    overallPerformance: 0,
    courseCompletion: 0,
    termAttendance: 0,
  });

  const goTo = (path) => {
    window.location.href = path;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-6">
        <button className="text-gray-600 text-2xl">☰</button>{" "}
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button className="text-gray-600 text-2xl">🔔</button>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Cerca per parola chiave"
          className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </span>{" "}
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-lg mb-6">
        <div className="flex items-center mb-4">
          <img
            src="https://placehold.co/60x60/FFD700/000000?text=JS"
            alt="User"
            className="rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Daniella Rossi
            </h3>
            <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>{" "}
          </div>
        </div>
        <div className="flex justify-around text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <span className="text-green-600 font-bold text-lg">
                {userData.overallPerformance}%
              </span>
            </div>
            <span className="text-sm text-gray-600">Prestazioni Generali</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <span className="text-blue-600 font-bold text-lg">
                {userData.courseCompletion}%
              </span>
            </div>
            <span className="text-sm text-gray-600">Completamento Corso</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
              <span className="text-purple-600 font-bold text-lg">
                {userData.termAttendance}%
              </span>
            </div>
            <span className="text-sm text-gray-600">Frequenza Periodo</span>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-4">
        La Mia Scuola Guida
      </h2>
      <div className="grid grid-cols-2 gap-4 flex-grow">
        <button
          onClick={() => goTo("/quiz")}
          className="flex flex-col items-center justify-center bg-white p-4 rounded-3xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="text-4xl mb-2">📝</span>
          <span className="text-lg font-semibold text-gray-800">Quiz</span>
        </button>

        <button
          onClick={() => goTo("/videos")}
          className="flex flex-col items-center justify-center bg-white p-4 rounded-3xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="text-4xl mb-2">🎥</span>
          <span className="text-lg font-semibold text-gray-800">Video</span>
        </button>

        <button
          onClick={() => goTo("/theory")}
          className="flex flex-col items-center justify-center bg-white p-4 rounded-3xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="text-4xl mb-2">📚</span>
          <span className="text-lg font-semibold text-gray-800">Teoria</span>
        </button>

        <button
          onClick={() => goTo("/transport")}
          className="flex flex-col items-center justify-center bg-white p-4 rounded-3xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="text-4xl mb-2">🚌</span>
          <span className="text-lg font-semibold text-gray-800">Trasporto</span>
        </button>
      </div>

      <div className="flex justify-around items-center bg-white p-4 mt-6 rounded-t-3xl shadow-inner">
        <button className="text-blue-600 text-3xl">🏠</button>
        <button className="text-gray-400 text-3xl">📊</button>{" "}
        <button className="text-gray-400 text-3xl">🛒</button>
        <button className="text-gray-400 text-3xl">👤</button>{" "}
      </div>
    </div>
  );
}
