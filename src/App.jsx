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
import { generateQuestionList } from './data/questions.js'
import NavBar from './components/layout/navbar.jsx'
import { createBrowserRouter, Router, RouterProvider, Navigate } from 'react-router-dom'

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

  const handleRetakeFromProfile = (theme, difficultyIndex) => {
    setSelectedTheme(theme)
    setSelectedDifficulty(difficultyIndex)
    const questions = generateQuestionList(theme.id, difficultyIndex)
    setQuizQuestions(questions)
    setStep('quiz')
  }

  const router = createBrowserRouter(

    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,            
            element: <Navigate to="/home" replace />
          },
          {
            path: "/home",
            element: <div>Home</div>,
          },
          {
            path: "/login",
            element: <Connexion />,
          },

          {
            path: "/theme",
            element: <ThemeSelection ></ThemeSelection>,
          },
          {
            path: "/difficulty",
            element: <DifficultySelect></DifficultySelect>,
          },
          {
            path: "/quiz",
            element:  <QuizGame></QuizGame>,
          },
          {
            path: "/result",
            element: <QuizResult></QuizResult>,
          },
          {
            path: "/profile",
            element: <Profile />,
          }
        ]
      }
    ]
  )
  // return (
  //   <Layout>
  //     {step === 'connection' && (
  //       <Connexion onComplete={handleConnectionComplete} />
  //     )}
  //     {step === 'theme' && (
  //       <div> 
  //       <NavBar isPPShown={true} onProfileClick={handleProfileClick} />
  //       <ThemeSelection onThemeSelect={handleThemeSelect} onProfileClick={handleProfileClick} />
  //       </div>
  //     )}
  //     {step === 'difficulty' && selectedTheme && (
  //       <div> 
  //         <NavBar isPPShown={true} onProfileClick={handleProfileClick} />
  //         <DifficultySelect
  //           theme={selectedTheme}
  //           onDifficultySelect={handleDifficultySelect}
  //         />

  //       </div>
  //     )}
  //     {step === 'quiz' && quizQuestions && selectedTheme && selectedDifficulty !== null && (
  //              <div> 
  //         <NavBar isPPShown={false} />

  //      <QuizGame
  //         questions={quizQuestions}
  //         theme={selectedTheme}
  //         difficultyIndex={selectedDifficulty}
  //         onComplete={handleQuizComplete}
  //       />

  //         </div>
  //     )}
  //     {step === 'result' && quizResults && (
  //       <div> 
  //         <NavBar isPPShown={true} onProfileClick={handleProfileClick} />
  //         <QuizResult
  //           data={quizResults}
  //           theme={selectedTheme}
  //           onReplay={handleReplay}
  //           onNewTheme={handleNewTheme}
  //           onProfileClick={handleProfileClick} 
  //         />
  //       </div>
  //     )}
  //     {step === 'profile' && (
  //       <Profile onBack={handleBackFromProfile} onRetake={handleRetakeFromProfile} />
  //     )}
  //   </Layout>
  // )

  return <RouterProvider router={router} />
}

export default App
