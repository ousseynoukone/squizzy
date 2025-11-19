import { useState, useEffect } from 'react'
import './App.css'

import Layout from './components/layout/layout.jsx'
import Connexion from './components/page/connection/connection.jsx'
import ThemeSelection from './components/page/theme-selection/theme-selection.jsx'
import DifficultySelect from './components/page/difficulty-select/difficulty-select.jsx'
import QuizGame from './components/page/quiz-game/quiz-game.jsx'
import QuizResult from './components/page/quiz-result/quiz-result.jsx'
import Profile from './components/page/profile/profile.jsx'
import { userExists } from './utils/storage.js'

function App() {
  const [step, setStep] = useState('connection')
  const [selectedTheme, setSelectedTheme] = useState(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState(null)
  const [quizQuestions, setQuizQuestions] = useState(null)
  const [quizResults, setQuizResults] = useState(null)

  useEffect(() => {
    if (userExists()) {
      setStep('theme')
    }
  }, [])

  const handleConnectionComplete = () => {
    setStep('theme')
  }

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme)
    setStep('difficulty')
  }

  const handleDifficultySelect = (difficultyIndex, questions) => {
    setSelectedDifficulty(difficultyIndex)
    setQuizQuestions(questions)
    setStep('quiz')
  }

  const handleQuizComplete = (results) => {
    setQuizResults(results)
    setStep('result')
  }

  const handleReplay = () => {
    setQuizResults(null)
    setStep('difficulty')
  }

  const handleNewTheme = () => {
    setSelectedTheme(null)
    setSelectedDifficulty(null)
    setQuizQuestions(null)
    setQuizResults(null)
    setStep('theme')
  }

  const handleProfileClick = () => {
    setStep('profile')
  }

  const handleBackFromProfile = () => {
    setStep('theme')
  }

  return (
    <Layout>
      {step === 'connection' && (
        <Connexion onComplete={handleConnectionComplete} />
      )}
      {step === 'theme' && (
        <ThemeSelection onThemeSelect={handleThemeSelect} onProfileClick={handleProfileClick} />
      )}
      {step === 'difficulty' && selectedTheme && (
        <DifficultySelect
          theme={selectedTheme}
          onDifficultySelect={handleDifficultySelect}
          onProfileClick={handleProfileClick}
        />
      )}
      {step === 'quiz' && quizQuestions && selectedTheme && selectedDifficulty !== null && (
        <QuizGame
          questions={quizQuestions}
          theme={selectedTheme}
          difficultyIndex={selectedDifficulty}
          onComplete={handleQuizComplete}
        />
      )}
      {step === 'result' && quizResults && (
        <QuizResult
          data={quizResults}
          theme={selectedTheme}
          onReplay={handleReplay}
          onNewTheme={handleNewTheme}
        />
      )}
      {step === 'profile' && (
        <Profile onBack={handleBackFromProfile} />
      )}
    </Layout>
  )
}

export default App
