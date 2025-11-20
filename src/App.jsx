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
import Home from './components/page/home/home.jsx'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

function App() {

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
            element: <Home/>,
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
  return <RouterProvider router={router} />
}

export default App
