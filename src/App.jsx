import { useState } from "react";
import "./App.css";

import Layout from "./components/layout/layout.jsx";
import DifficultySelect from "./components/page/difficulty-select/difficulty-select.jsx";
import QuizGame from "./components/page/quiz-game/quiz-game.jsx";
import QuizResult from "./components/page/quiz-result/quiz-result.jsx";
import CreateQuizz from "./utils/functions/CreateQuizz.js";
import { Theme } from "./utils/objects/Theme";

const mockResults = {
  totalQuestions: 10,
  correctAnswers: 7,
  score: 720,
  bestScore: 900,
  segments: [
    { label: "Facile", value: 90 },
    { label: "Moyen", value: 70 },
    { label: "Difficile", value: 50 },
  ],
  answers: [
    { id: 1, text: "Q1 Canberra — Correct" },
    { id: 2, text: "Q2 Paris — Correct" },
    { id: 3, text: "Q3 Tokyo — Correct" },
    { id: 4, text: "Q4 Nairobi — Incorrect" },
    { id: 5, text: "Q5 Amazon — Correct" },
    { id: 6, text: "Q6 Sahara — Incorrect" },
    { id: 7, text: "Q7 Jupiter — Correct" },
    { id: 8, text: "Q8 Everest — Correct" },
    { id: 9, text: "Q9 Beethoven — Correct" },
    { id: 10, text: "10e question non répondue" },
  ],
};

function App() {
  const [step, setStep] = useState("difficulty");
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setStep("quiz");
  };

  const handleQuizFinish = () => {
    setStep("result");
  };

  const handleReplay = () => {
    setSelectedDifficulty(null);
    setStep("difficulty");
  };

  return (
    <Layout>
      <button onClick={CreateQuizz(Theme.SPORT, 1, 10)}>Clique</button>

      {step === "difficulty" && (
        <DifficultySelect onClick={handleDifficultySelect} />
      )}
      {step === "quiz" && (
        <QuizGame difficulty={selectedDifficulty} onFinish={handleQuizFinish} />
      )}
      {step === "result" && (
        <QuizResult data={mockResults} onReplay={handleReplay} />
      )}
    </Layout>
  );
}

export default App;
