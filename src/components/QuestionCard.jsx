import React, { useState, useEffect, useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const TIMER_DURATION = 30; // 30 secondes par question

const QuestionCard = ({ question, questionIndex }) => {
  const { saveAnswer, nextQuestion } = useContext(QuizContext);
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Logique du Timer
  useEffect(() => {
    if (isAnswered) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleAnswer(null, true); // Réponse automatique si le temps est écoulé (isTimeout = true)
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isAnswered]);

  // Réinitialiser le timer à chaque nouvelle question
  useEffect(() => {
    setTimeLeft(TIMER_DURATION);
    setSelectedOption(null);
    setIsAnswered(false);
  }, [question]);

  const handleAnswer = (option, isTimeout = false) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);
    saveAnswer(question.id, option);

    if (isTimeout) {
      nextQuestion();
    } else {
      // Passer à la question suivante après un court délai pour voir la réponse
      setTimeout(() => {
        nextQuestion();
      }, 1500);
    }
  };

  const optionStyle = (option) => {
    let style = {
      padding: "15px 25px",
      borderRadius: "10px",
      cursor: "pointer",
      margin: "10px",
      border: "1px solid #ccc",
      backgroundColor: "white",
      transition: "background-color 0.3s, border-color 0.3s",
      fontWeight: "bold",
      textAlign: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    };

    if (isAnswered) {
      if (option === question.answer) {
        // Bonne réponse
        style.backgroundColor = "#d4edda";
        style.borderColor = "#c3e6cb";
      } else if (option === selectedOption) {
        // Mauvaise réponse sélectionnée
        style.backgroundColor = "#f8d7da";
        style.borderColor = "#f5c6cb";
      } else {
        // Option non sélectionnée
        style.opacity = 0.6;
      }
    } else if (selectedOption === option) {
      // Option sélectionnée avant la validation
      style.backgroundColor = "#e0f7fa";
      style.borderColor = "#b2ebf2";
    }

    return style;
  };

  const getOptionLabel = (index) => {
    return String.fromCharCode(65 + index); // A, B, C, D
  };

  return (
    <div style={{ textAlign: "center", padding: "40px", backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "white", padding: "40px", borderRadius: "10px", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ marginBottom: "10px" }}>Question N°{questionIndex + 1}</h2>
        <p style={{ fontSize: "1.2em", marginBottom: "40px" }}>{question.question}</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {question.options.map((option, index) => (
            <div
              key={index}
              style={optionStyle(option)}
              onClick={() => handleAnswer(option)}
            >
              <span style={{ marginRight: "10px", border: "1px solid", borderRadius: "50%", padding: "5px 10px" }}>
                {getOptionLabel(index)}
              </span>
              {option}
            </div>
          ))}
        </div>

        <div style={{ marginTop: "40px", fontSize: "2em", fontWeight: "bold", color: timeLeft <= 5 ? "red" : "#333" }}>
          00:{timeLeft.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;