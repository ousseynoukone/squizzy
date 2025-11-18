import { createContext, useState, useEffect } from "react";

export const QuizContext = createContext();

export function QuizProvider({ children }) {
    const [score, setScore] = useState(0);
  const [history, setHistory] = useState(() => {
    const localHistory = localStorage.getItem("quizHistory");
    return localHistory ? JSON.parse(localHistory) : [];
  });
  const [questions, setQuestions] = useState([]);
    const [pseudo, setPseudo] = useState(() => {
    return localStorage.getItem("quizPseudo") || "";
  });
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Sauvegarde du pseudo dans localStorage
  useEffect(() => {
    localStorage.setItem("quizPseudo", pseudo);
  }, [pseudo]);

  // Sauvegarde de l'historique dans localStorage
  useEffect(() => {
    localStorage.setItem("quizHistory", JSON.stringify(history));
  }, [history]);

  // Calcul du score et enregistrement de l'historique lorsque le quiz est terminé
  useEffect(() => {
    if (quizFinished) {
      calculateScore(userAnswers);
    }
  }, [quizFinished, userAnswers]);

  const calculateScore = (answers) => {
    let newScore = 0;
    answers.forEach((answer) => {
      const question = questions.find((q) => q.id === answer.questionId);
      if (question && answer.selectedOption === question.answer) {
        newScore += 100; // Exemple de score
      }
    });
    setScore(newScore);
    // Enregistrer le résultat dans l'historique
    const newResult = {
      id: Date.now(),
      pseudo: pseudo,
      theme: selectedTheme.title,
      difficulty: difficulty,
      score: newScore,
      date: new Date().toLocaleString(),
    };
    setHistory((prevHistory) => [...prevHistory, newResult]);
  };

  const saveAnswer = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [
        ...prevAnswers,
        { questionId, selectedOption },
      ];
      // Si c'est la dernière question, marquer le quiz comme terminé
      if (newAnswers.length === questions.length) {
        setQuizFinished(true);
      }
      return newAnswers;
    });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setQuestions([]);
    // setPseudo(""); // On ne réinitialise plus le pseudo pour le garder en mémoire
    setSelectedTheme(null);
    setDifficulty(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizFinished(false);
  };

  return (
    <QuizContext.Provider
      value={{
        score,
        setScore,
        questions,
        setQuestions,
        pseudo,
        setPseudo,
        selectedTheme,
        setSelectedTheme,
        difficulty,
        setDifficulty,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        userAnswers,
        setUserAnswers,
        quizFinished,
        setQuizFinished,
        saveAnswer,
        nextQuestion,
        resetQuiz,
        history,
        setHistory,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}