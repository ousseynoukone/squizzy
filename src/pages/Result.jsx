import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const {
    score,
    questions,
    userAnswers,
    pseudo,
    selectedTheme,
    difficulty,
    resetQuiz,
  } = useContext(QuizContext);
  const navigate = useNavigate();

  if (!selectedTheme || questions.length === 0) {
    navigate("/");
    return null;
  }

  const correctAnswersCount = userAnswers.filter((answer) => {
    const question = questions.find((q) => q.id === answer.questionId);
    return question && answer.selectedOption === question.answer;
  }).length;

  const totalQuestions = questions.length;
  const scorePercentage = Math.round((correctAnswersCount / totalQuestions) * 100);

  const handleReplay = () => {
    // resetQuiz(); // Ne pas réinitialiser le pseudo
    // On ne réinitialise que les variables du quiz, pas le pseudo
    // La fonction resetQuiz dans QuizContext a été modifiée pour ne pas réinitialiser le pseudo
    // On peut donc la laisser, mais on va s'assurer qu'elle ne réinitialise que les variables du quiz.
    // Vérification dans QuizContext.jsx : setPseudo("") a été commenté. C'est bon.
    resetQuiz();
    navigate("/");
  };

  const getAnswerDetail = (questionId) => {
    const question = questions.find((q) => q.id === questionId);
    const userAnswer = userAnswers.find((a) => a.questionId === questionId);
    const isCorrect = userAnswer && userAnswer.selectedOption === question.answer;
    const answerText = userAnswer ? userAnswer.selectedOption : "Non répondu";
    const status = isCorrect ? "Correct" : "Incorrect";
    return { question, answerText, status, isCorrect };
  };

  const detailStyle = (isCorrect) => ({
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: isCorrect ? "#e6ffe6" : "#ffe6e6",
    border: `1px solid ${isCorrect ? "#c3e6cb" : "#f5c6cb"}`,
    margin: "5px",
    fontWeight: "bold",
    fontSize: "0.9em",
    textAlign: "center",
  });

  return (
    <div style={{ textAlign: "center", padding: "40px", backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
        <div style={{ color: "#007bff", fontSize: "1.5em", fontWeight: "bold" }}>SQ SQUIZZY</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "10px" }}>{pseudo}</span>
          {/* Placeholder pour l'avatar */}
          <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#ccc" }}></div>
        </div>
      </header>

      <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "white", padding: "40px", borderRadius: "10px", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}>
        <h1 style={{ marginBottom: "30px" }}>Résultats</h1>

        <p style={{ fontSize: "1.2em", marginBottom: "10px" }}>
          {correctAnswersCount}/{totalQuestions} questions correctement répondues
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "30px" }}>
          <div style={{ fontWeight: "bold" }}>Facile: N/A</div>
          <div style={{ fontWeight: "bold" }}>Moyen: N/A</div>
          <div style={{ fontWeight: "bold" }}>Difficile: N/A</div>
        </div>

        <h2 style={{ color: "#007bff", marginBottom: "5px" }}>Score {score} pts</h2>
        <p style={{ fontSize: "0.9em", color: "#666", marginBottom: "40px" }}>Meilleur score 900 pts (Placeholder)</p>

        <h2 style={{ marginBottom: "20px" }}>Évaluation</h2>

        <div style={{ border: "1px solid #eee", padding: "20px", borderRadius: "10px" }}>
          <p style={{ marginBottom: "15px", fontWeight: "bold" }}>Détail des réponses</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
            {questions.map((q, index) => {
              const detail = getAnswerDetail(q.id);
              return (
                <div key={q.id} style={detailStyle(detail.isCorrect)}>
                  Q{index + 1} {detail.answerText} — {detail.status}
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleReplay}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 30px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1em",
            marginTop: "30px",
            marginRight: "10px",
          }}
        >
          Rejouer
        </button>
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            padding: "10px 30px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1em",
            marginTop: "30px",
          }}
        >
          Accueil
        </button>
      </div>
    </div>
  );
};

export default Result;
