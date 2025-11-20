import { useState, useEffect } from "react"
import { getUsername, getUserAvatar } from "../../../utils/utils.js"
import { getQuizHistory, deleteQuizHistory, clearAllQuizHistory } from "../../../utils/storage.js"
import { themes } from "../../../data/themes.js"

export default function Profile({ onBack, onRetake }) {
  const username = getUsername() || "AlexA"
  const avatar = getUserAvatar() || "https://i.pravatar.cc/120?img=47"
  const [quizHistory, setQuizHistory] = useState([])

  useEffect(() => {
    const history = getQuizHistory()
    setQuizHistory(history)
  }, [])

  const handleRetake = (quiz) => {
    const theme = themes.find(t => t.titre === quiz.theme)
    if (theme && onRetake) {
      const difficultyMap = { 'Facile': 0, 'Normal': 1, 'Difficile': 2 }
      const difficultyIndex = difficultyMap[quiz.difficulte] ?? 0
      onRetake(theme, difficultyIndex)
    }
  }

  const handleDeleteQuiz = (quizId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce quiz de l\'historique ?')) {
      const updated = deleteQuizHistory(quizId)
      setQuizHistory(updated)
    }
  }

  const handleClearAll = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer tout l\'historique ? Cette action est irréversible.')) {
      clearAllQuizHistory()
      setQuizHistory([])
    }
  }

  const calculatePercentage = (score, total) => {
    if (total === 0) return 0
    return Math.round((score / total) * 100)
  }

  return (
    <div className="min-h-screen bg-white pb-16">
      <main className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 pt-8">

        {/* Profile Section */}
        <section className="flex w-full flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-slate-900">Profil</h1>
          <p className="text-lg text-slate-700">{username}</p>
          <div className="mt-2">
            <img
              src={avatar}
              alt="Profile"
              className="h-32 w-32 rounded-full object-cover"
            />
          </div>
        </section>

        {/* Quiz Activity Section */}
        <section className="w-full rounded-2xl border border-[#E6ECF5] bg-white px-8 py-10 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">Activité des quiz</h2>
            {quizHistory.length > 0 && (
              <button
                type="button"
                onClick={handleClearAll}
                className="text-sm text-red-600 hover:text-red-700 font-medium transition"
              >
                Tout supprimer
              </button>
            )}
          </div>
          
          {quizHistory.length === 0 ? (
            <p className="text-center text-slate-500 py-8">Aucun quiz complété pour le moment</p>
          ) : (
            <div className="space-y-4">
              {quizHistory.map((quiz, index) => {
                const percentage = calculatePercentage(quiz.score, quiz.totalPoints)
                return (
                  <div
                    key={quiz.id}
                    className="flex flex-wrap items-center gap-4 md:gap-6 border-b border-[#E6ECF5] pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB] text-sm font-semibold text-white">
                        Q{index + 1}
                      </div>
                      <div>
                        <p className="text-base font-semibold text-slate-900">Quiz</p>
                        <p className="text-sm text-slate-500">{quiz.theme}</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <p className="text-base font-semibold text-slate-900">
                        {quiz.score}/{quiz.totalPoints} ({percentage}%)
                      </p>
                    </div>

                    <div className="flex-shrink-0">
                      <p className="text-base font-medium text-slate-900">{quiz.evaluation}</p>
                    </div>

                    <div className="flex-shrink-0">
                      <span className="inline-block rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700">
                        {quiz.theme}
                      </span>
                    </div>

                    <div className="flex-shrink-0">
                      <span className="inline-block rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700">
                        {quiz.difficulte}
                      </span>
                    </div>

                    <div className="ml-auto flex-shrink-0 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleDeleteQuiz(quiz.id)}
                        className="rounded-lg bg-red-100 text-red-600 px-4 py-2 text-sm font-semibold transition hover:bg-red-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                        title="Supprimer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRetake(quiz)}
                        className="rounded-lg bg-[#2563EB] px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB60]"
                      >
                        Retenter
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
