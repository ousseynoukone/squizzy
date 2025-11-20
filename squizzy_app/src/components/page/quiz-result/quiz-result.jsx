import { useEffect } from 'react'
import { saveQuizHistory } from '../../../utils/storage.js'
import { getEvaluation } from '../../../utils/evaluation.js'
import { getQuizByThemeId } from '../../../data/quizzes.js'

export default function QuizResult({ data, theme, onReplay, onNewTheme }) {
  useEffect(() => {
    if (data && theme) {
      const quiz = getQuizByThemeId(theme.id)
      const difficultyNames = ['Facile', 'Normal', 'Difficile']
      const difficultyName = difficultyNames[data.difficultyIndex] || 'Inconnu'
      
      saveQuizHistory({
        theme: theme.titre,
        difficulte: difficultyName,
        score: data.score,
        totalPoints: data.totalPossiblePoints,
        correctAnswers: data.correctAnswers,
        totalQuestions: data.totalQuestions,
        evaluation: getEvaluation(data.scorePercentage),
      })
    }
  }, [data, theme])

  if (!data) return null

  const evaluation = getEvaluation(data.scorePercentage)

  return (
    <div className="min-h-screen bg-[#F4F6FB] pb-16">
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-4 text-center">
        <section className="w-full rounded-[32px] border border-[#E6ECF5] bg-white px-8 py-10 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <p className="text-sm uppercase tracking-[0.4em] text-[#A0AEC0]">Résultats</p>
          <p className="mt-2 text-3xl font-semibold text-slate-900">
            {data.correctAnswers}/{data.totalQuestions} questions correctement répondues
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
            {data.segments.map((segment) => (
              <div key={segment.label} className="text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-[#94A3B8]">{segment.label}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">{segment.value}%</p>
                <p className="text-xs text-slate-500 mt-1">
                  {segment.correct}/{segment.total} correctes
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold text-slate-900">
              Score {data.score} / {data.totalPossiblePoints} pts
            </p>
            <p className="text-lg font-medium text-slate-700 mt-2">
              Évaluation: {evaluation}
            </p>
          </div>
        </section>

        <section className="w-full rounded-[32px] border border-[#E6ECF5] bg-white px-8 py-10 text-left shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-slate-900">Détail des réponses</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {data.answers.map((answer, index) => (
              <div
                key={index}
                className={`rounded-2xl px-5 py-4 text-sm font-semibold ${
                  answer.isCorrect
                    ? 'bg-[#E8F0FE] text-[#1d4ed8]'
                    : 'bg-[#FEE2E2] text-[#B42318]'
                }`}
              >
                <p className="font-bold mb-1">Q{index + 1}: {answer.question}</p>
                <p className="font-normal">
                  Votre réponse: {answer.userAnswer}
                </p>
                {!answer.isCorrect && (
                  <p className="font-normal mt-1">
                    Bonne réponse: {answer.correctAnswer}
                  </p>
                )}
                <p className="text-xs mt-2 opacity-75">
                  {answer.points} points - {answer.difficulty}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <button
              type="button"
              onClick={onReplay}
              className="rounded-full bg-[#2563EB] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2563EB52] transition hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB60]"
            >
              Rejouer
            </button>
            <button
              type="button"
              onClick={onNewTheme}
              className="rounded-full bg-slate-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
            >
              Nouveau thème
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

