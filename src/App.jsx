import { useState } from 'react'
import './App.css'

import Layout from './components/layout/layout.jsx'
import DifficultySelect from './components/difficulty-select/difficulty-select.jsx'
import QuizGame from './components/quiz-game/quiz-game.jsx'

import Connexion from './components/page/connection/connection.jsx'

function App() {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null)

  return (
    <Layout>
      {selectedDifficulty ? (
        <QuizGame
          difficulty={selectedDifficulty}
          onRestart={() => setSelectedDifficulty(null)}
        />
      ) : (
        <DifficultySelect onClick={setSelectedDifficulty} />
      )}
    </Layout>
  )
}

export default App
