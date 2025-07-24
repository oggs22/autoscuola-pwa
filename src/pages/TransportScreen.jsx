import React, { useState } from "react";
const TransportScreen = () => {
  const [activeTab, setActiveTab] = useState("DA FARE"); // 'DA FARE' or 'FATTE'

  const upcomingLessons = [
    {
      id: 1,
      date: "25 LUG",
      instructor: "Roberto Ascenzi",
      startTime: "11:30",
      car: "SEAT",
      duration: "45 min",
    },
    {
      id: 2,
      date: "28 LUG",
      instructor: "Maria Rossi",
      startTime: "15:00",
      car: "FIAT 500",
      duration: "60 min",
    },
  ];

  const completedLessons = [
    {
      id: 3,
      date: "20 LUG",
      instructor: "Giuseppe Verdi",
      startTime: "10:00",
      car: "FORD FIESTA",
      duration: "45 min",
    },
    {
      id: 4,
      date: "18 LUG",
      instructor: "Roberto Ascenzi",
      startTime: "09:00",
      car: "SEAT",
      duration: "60 min",
    },
  ];

  const lessonsToDisplay =
    activeTab === "DA FARE" ? upcomingLessons : completedLessons;

  const goToDashboard = () => {
    window.location.href = "/dashboard";
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => goToDashboard()}
          className="text-gray-600 text-2xl"
        >
          ←
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Lista Guide</h1>
        <div></div>
      </div>

      <div className="flex justify-around bg-white rounded-xl shadow-md mb-6 p-1">
        <button
          onClick={() => setActiveTab("DA FARE")}
          className={`flex-1 py-2 text-center font-semibold rounded-lg transition-colors duration-200 ${
            activeTab === "DA FARE"
              ? "bg-blue-500 text-white shadow-sm"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          DA FARE
        </button>
        <button
          onClick={() => setActiveTab("FATTE")}
          className={`flex-1 py-2 text-center font-semibold rounded-lg transition-colors duration-200 ${
            activeTab === "FATTE"
              ? "bg-blue-500 text-white shadow-sm"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          FATTE
        </button>
      </div>

      <div className="flex-grow space-y-4">
        {lessonsToDisplay.length > 0 ? (
          lessonsToDisplay.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-white p-4 rounded-2xl shadow-lg flex items-center space-x-4"
            >
              <div className="flex-shrink-0 bg-blue-100 text-blue-700 font-bold text-center p-3 rounded-lg">
                <div className="text-xl">{lesson.date.split(" ")[0]}</div>
                <div className="text-sm">{lesson.date.split(" ")[1]}</div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center text-gray-700 mb-1">
                  <span className="mr-2 text-xl">👤</span>
                  <span className="font-medium">Istruttore:</span>{" "}
                  {lesson.instructor}
                </div>
                <div className="flex items-center text-gray-700 mb-1">
                  <span className="mr-2 text-xl">⏰</span>
                  <span className="font-medium">Ora d'inizio:</span>{" "}
                  {lesson.startTime}
                </div>
                <div className="flex items-center text-gray-700 mb-1">
                  <span className="mr-2 text-xl">🚗</span>
                  <span className="font-medium">Vettura:</span> {lesson.car}
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2 text-xl">⏱️</span>
                  <span className="font-medium">Durata:</span> {lesson.duration}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 mt-8">
            Nessuna lezione da mostrare in questa categoria.
          </p>
        )}
      </div>
    </div>
  );
};

export default TransportScreen;