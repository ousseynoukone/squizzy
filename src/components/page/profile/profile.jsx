import NavBar from "../../layout/navbar"
import { getUsername } from "../../../utils/utils.js"

// Mock quiz history data
const quizHistory = [
  {
    id: 1,
    quizNumber: "Q1",
    subject: "Culture Générale",
    score: 18,
    total: 20,
    percentage: 90,
    evaluation: "Excellent",
    theme: "Général",
    difficulty: "Moyen"
  },
  {
    id: 2,
    quizNumber: "Q2",
    subject: "Histoire de France",
    score: 12,
    total: 15,
    percentage: 80,
    evaluation: "Très bien",
    theme: "Histoire",
    difficulty: "Facile"
  },
  {
    id: 3,
    quizNumber: "Q3",
    subject: "Programmation JS",
    score: 7,
    total: 10,
    percentage: 70,
    evaluation: "À renforcer",
    theme: "Tech",
    difficulty: "Difficile"
  }
]

export default function Profile({ onBack }) {
  const username = getUsername() || "AlexA"

  const handleRetake = (quizId) => {
    // Handle retake logic here
    console.log(`Retaking quiz ${quizId}`)
  }

  return (
    <div className="min-h-screen bg-white pb-16">
      <NavBar isPPShown={false} />
      <main className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 pt-8">
        {/* Back Button */}
        <div className="w-full flex justify-start">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB40] rounded-lg px-3 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">Retour</span>
          </button>
        </div>

        {/* Profile Section */}
        <section className="flex w-full flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-slate-900">Profil</h1>
          <p className="text-lg text-slate-700">{username}</p>
          <div className="mt-2">
            <img
              src="https://i.pravatar.cc/120?img=47"
              alt="Profile"
              className="h-32 w-32 rounded-full object-cover"
            />
          </div>
        </section>

        {/* Quiz Activity Section */}
        <section className="w-full rounded-2xl border border-[#E6ECF5] bg-white px-8 py-10 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Activité des quiz</h2>
          
          <div className="space-y-4">
            {quizHistory.map((quiz) => (
              <div
                key={quiz.id}
                className="flex flex-wrap items-center gap-4 md:gap-6 border-b border-[#E6ECF5] pb-4 last:border-b-0 last:pb-0"
              >
                {/* Quiz Identifier */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB] text-sm font-semibold text-white">
                    {quiz.quizNumber}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900">Quiz</p>
                    <p className="text-sm text-slate-500">{quiz.subject}</p>
                  </div>
                </div>

                {/* Score */}
                <div className="flex-shrink-0">
                  <p className="text-base font-semibold text-slate-900">
                    {quiz.score}/{quiz.total} ({quiz.percentage}%)
                  </p>
                </div>

                {/* Evaluation */}
                <div className="flex-shrink-0">
                  <p className="text-base font-medium text-slate-900">{quiz.evaluation}</p>
                </div>

                {/* Theme */}
                <div className="flex-shrink-0">
                  <span className="inline-block rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700">
                    {quiz.theme}
                  </span>
                </div>

                {/* Difficulty */}
                <div className="flex-shrink-0">
                  <span className="inline-block rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700">
                    {quiz.difficulty}
                  </span>
                </div>

                {/* Retake Button */}
                <div className="ml-auto flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => handleRetake(quiz.id)}
                    className="rounded-lg bg-[#2563EB] px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB60]"
                  >
                    Retenter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
