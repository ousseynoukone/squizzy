import { useEffect, useMemo, useState } from 'react'
import NavBar from '../layout/navbar.jsx'

const answers = [
  { id: 'A', label: 'Sydney' },
  { id: 'B', label: 'Canberra' },
  { id: 'C', label: 'Melbourne' },
  { id: 'D', label: 'Perth' },
]

function AnswerCard({ answer, isSelected, onSelect }) {
  const baseClasses =
    'flex w-full items-center gap-3 rounded-[26px] border px-6 py-5 text-left transition shadow-[0_12px_30px_rgba(15,23,42,0.06)]'
  const stateClasses = isSelected
    ? 'border-[#1A73E8] bg-[#1A73E8] text-white'
    : 'border-[#E4EAF4] bg-white text-slate-600 hover:border-[#CBD5F0]'

  return (
    <button
      type="button"
      className={`${baseClasses} ${stateClasses} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB40]`}
      onClick={() => onSelect(answer.id)}
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold ${
          isSelected ? 'border-white bg-white/20 text-white' : 'border-[#E2E8F0] bg-[#F8FAFF] text-slate-500'
        }`}
      >
        {answer.id}
      </span>
      <span className="text-base font-semibold text-slate-800">
        Réponse {answer.id}: <span className="font-normal">{answer.label}</span>
      </span>
    </button>
  )
}

export default function QuizGame({ difficulty, onRestart }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [timeLeft, setTimeLeft] = useState(30)

  useEffect(() => {
    setSelectedAnswer(null)
    setTimeLeft(30)
  }, [difficulty])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formattedTime = useMemo(() => `00:${timeLeft.toString().padStart(2, '0')}`, [timeLeft])

  const leftAnswers = [answers[0], answers[2]]
  const rightAnswers = [answers[1], answers[3]]

  return (
    <div className="min-h-screen bg-[#F4F6FB] pb-16">
      <NavBar isPPShown={false} />
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-4 text-center">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#94A3B8]">
            Question N°1
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">Quelle est la capitale de l'Australie ?</h1>
          <p className="text-sm text-slate-500">
            Niveau {difficulty === 'easy' ? 'Facile' : difficulty === 'medium' ? 'Moyen' : 'Difficile'}
          </p>
        </div>

        <section className="grid w-full gap-6 md:grid-cols-[1fr_auto_1fr] md:grid-rows-2 md:items-center">
          <div className="flex flex-col gap-6">
            {leftAnswers.map((answer) => (
              <AnswerCard
                key={answer.id}
                answer={answer}
                isSelected={selectedAnswer === answer.id}
                onSelect={setSelectedAnswer}
              />
            ))}
          </div>

          <div className="row-span-2 flex items-center justify-center">
            <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-2xl font-semibold text-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              {formattedTime}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {rightAnswers.map((answer) => (
              <AnswerCard
                key={answer.id}
                answer={answer}
                isSelected={selectedAnswer === answer.id}
                onSelect={setSelectedAnswer}
              />
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            className="rounded-full border border-transparent bg-[#2563EB] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2563EB40] transition hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB60]"
          >
            Valider
          </button>
        </div>
      </main>
    </div>
  )
}

