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

// ... (Le reste du fichier est le même)
