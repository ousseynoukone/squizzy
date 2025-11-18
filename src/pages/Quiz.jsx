import React, { useContext, useState, useEffect } from "react";
import { QuizContext } from "../context/QuizContext";
import { questionsData } from "../data/quizData";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";

const DifficultySelection = ({ theme, onSelectDifficulty }) => {
  const difficultyOptions = [
    { level: "easy", label: "Facile", style: { backgroundColor: "#e6ffe6", color: "#38761d" } },
    { level: "medium", label: "Moyen", style: { backgroundColor: "#fff8e6", color: "#b45f06" } },
    { level: "hard", label: "Difficile", style: { backgroundColor: "#ffe6e6", color: "#cc0000" } },
  ];

  const buttonStyle = (levelStyle) => ({
    ...levelStyle,
    border: "none",
    padding: "20px 40px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1.2em",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    margin: "0 15px",
  });

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "2.5em", marginBottom: "10px" }}>{theme.title}</h1>
      <p style={{ color: "#666", marginBottom: "50px" }}>
        {theme.description}
      </p>

      <h3 style={{ marginBottom: "30px" }}>Choisissez un niveau de difficulté</h3>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {difficultyOptions.map((option) => (
          <button
            key={option.level}
            style={buttonStyle(option.style)}
            onClick={() => onSelectDifficulty(option.level)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const Quiz = () => {
  const { selectedTheme, difficulty, setDifficulty, setQuestions, questions, currentQuestionIndex, quizFinished } = useContext(QuizContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (quizFinished) {
      navigate("/result");
    }
  }, [quizFinished, navigate]);

  if (!selectedTheme) {
    // Rediriger si aucun thème n'est sélectionné
    navigate("/");
    return null;
  }

  const handleSelectDifficulty = (level) => {
    setDifficulty(level);
    // Charger les questions pour le thème et la difficulté
    const themeQuestions = questionsData[selectedTheme.id]?.[level] || [];
    setQuestions(themeQuestions);
  };

  if (!difficulty) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
        <div style={{ padding: "40px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)", textAlign: "center", maxWidth: "800px", width: "100%" }}>
          <DifficultySelection theme={selectedTheme} onSelectDifficulty={handleSelectDifficulty} />
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>Chargement des questions...</h1>
      </div>
    );
  }

  return (
    <QuestionCard question={currentQuestion} questionIndex={currentQuestionIndex} />
  );
};

export default Quiz;
