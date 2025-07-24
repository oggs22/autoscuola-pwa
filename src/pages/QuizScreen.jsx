import React, { useState } from "react";
const QuizScreen = () => {
  const staticQuizQuestions = [
    {
      question:
        "Qual è il limite di velocità in autostrada in Italia per le autovetture, salvo diversa indicazione?",
      options: ["A) 90 km/h", "B) 110 km/h", "C) 130 km/h", "D) 150 km/h"],
      correctAnswer: "C) 130 km/h",
    },
    {
      question:
        "Cosa indica un segnale stradale di forma triangolare con bordo rosso?",
      options: ["A) Obbligo", "B) Pericolo", "C) Divieto", "D) Indicazione"],
      correctAnswer: "B) Pericolo",
    },
    {
      question:
        "Quando è obbligatorio l'uso delle luci anabbaglianti di giorno?",
      options: [
        "A) Sempre in città",
        "B) Fuori dai centri abitati",
        "C) Solo in caso di pioggia o nebbia",
        "D) Mai, solo di notte",
      ],
      correctAnswer: "B) Fuori dai centri abitati",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const quizQuestion = staticQuizQuestions[currentQuestionIndex];

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(
      (prevIndex) => (prevIndex + 1) % staticQuizQuestions.length
    );
  };

  const goTo = (path) => {
    window.location.href = path;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => goTo("/dashboard")}
          className="text-gray-600 text-2xl"
        >
          ←
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Quiz di Guida</h1>
        <div></div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-lg mb-6 flex-grow flex flex-col justify-center">
        <>
          <p className="text-lg font-semibold mb-4 text-gray-800">
            {quizQuestion.question}
          </p>
          <div className="space-y-3">
            {quizQuestion.options.map((option, index) => (
              <button
                key={index}
                className="w-full p-3 border border-gray-300 rounded-xl text-left hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                {option}
              </button>
            ))}
          </div>
          {quizQuestion.correctAnswer && (
            <p className="mt-4 text-sm text-gray-600 text-center">
              Risposta corretta:{" "}
              <span className="font-bold">{quizQuestion.correctAnswer}</span>{" "}
              (Per scopi dimostrativi)
            </p>
          )}
          <button
            onClick={handleNextQuestion}
            className="mt-6 w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Prossima Domanda
          </button>
        </>
      </div>
    </div>
  );
};

export default QuizScreen;
