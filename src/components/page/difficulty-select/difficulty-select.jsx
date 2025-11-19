import NavBar from '../../layout/navbar.jsx'
import { getQuizByThemeId } from '../../../data/quizzes.js'
import { generateQuestionList } from '../../../data/questions.js'

const difficultyStyles = [
  {
    bg: 'bg-[#E8F7EE]',
    textColor: 'text-[#1F6B3A]',
    border: 'border-[#CBEAD5]',
  },
  {
    bg: 'bg-[#FFF3E3]',
    textColor: 'text-[#9A5A00]',
    border: 'border-[#FAD9AC]',
  },
  {
    bg: 'bg-[#FFE8E5]',
    textColor: 'text-[#B42318]',
    border: 'border-[#F5B5AE]',
  },
]

const questionDistribution = [
  { facile: 5, moyen: 3, difficile: 2 },
  { facile: 3, moyen: 5, difficile: 2 },
  { facile: 2, moyen: 3, difficile: 5 },
]

export default function DifficultySelect({ theme, onDifficultySelect, onProfileClick }) {
  if (!theme) return null

  const quiz = getQuizByThemeId(theme.id)
  if (!quiz) return null

  const handleDifficultyClick = (difficultyIndex) => {
    const questions = generateQuestionList(theme.id, difficultyIndex)
    if (onDifficultySelect) {
      onDifficultySelect(difficultyIndex, questions)
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-[#F4F6FB] pb-16">
      <NavBar isPPShown={true} onProfileClick={onProfileClick} />
      <main className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-4 text-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold text-slate-900">{theme.titre}</h1>
          <p className="text-base leading-relaxed text-slate-500">
            {theme.description}
          </p>
        </div>

        <div className="flex flex-col gap-2 text-slate-400">
          <span className="text-sm uppercase tracking-[0.3em]">Choisissez un niveau de difficulté</span>
        </div>

        <section className="flex w-full flex-col gap-4 md:flex-row">
          {quiz.difficulteQuizz.map((difficulty, index) => {
            const style = difficultyStyles[index]
            const distribution = questionDistribution[index]
            return (
              <button
                key={index}
                type="button"
                onClick={() => handleDifficultyClick(index)}
                className={`group flex flex-1 flex-col items-center rounded-3xl border ${style.border} ${style.bg} px-6 py-10 text-center shadow-[0_18px_35px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_45px_rgba(15,23,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB40]`}
              >
                <span className={`text-lg font-semibold ${style.textColor}`}>{difficulty.titre}</span>
                <div className="mt-3 space-y-1 text-sm text-slate-600">
                  <p>{difficulty.nbrPoints} points possibles</p>
                  <p>Temps: {formatTime(difficulty.chrono)}</p>
                  <p className="text-xs text-slate-500">
                    {distribution.facile}F / {distribution.moyen}M / {distribution.difficile}D
                  </p>
                </div>
              </button>
            )
          })}
        </section>
      </main>
    </div>
  )
}

