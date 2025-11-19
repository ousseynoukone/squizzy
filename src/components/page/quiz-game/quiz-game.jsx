import { useEffect, useState, useMemo } from 'react'

function AnswerCard({ answer, answerId, isSelected, onSelect }) {
  const baseClasses =
    'flex w-full items-center gap-3 rounded-[26px] border px-6 py-5 text-left transition shadow-[0_12px_30px_rgba(15,23,42,0.06)]'
  const stateClasses = isSelected
    ? 'border-[#1A73E8] bg-[#1A73E8] text-white'
    : 'border-[#E4EAF4] bg-white text-slate-600 hover:border-[#CBD5F0]'

  return (
    <button
      type="button"
      className={`${baseClasses} ${stateClasses} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB40]`}
      onClick={() => onSelect(answer)}
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold ${
          isSelected ? 'border-white bg-white/20 text-white' : 'border-[#E2E8F0] bg-[#F8FAFF] text-slate-500'
        }`}
      >
        {answerId}
      </span>
      <span className="text-base font-semibold text-slate-800">
        Réponse {answerId}: <span className="font-normal">{answer}</span>
      </span>
    </button>
  )
}

export default function QuizGame({ questions, theme, difficultyIndex, onComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [timeLeft, setTimeLeft] = useState(null)
  const [answers, setAnswers] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const answerLabels = ['A', 'B', 'C', 'D']

  useEffect(() => {
    if (currentQuestion) {
      setTimeLeft(currentQuestion.difficulte.chrono)
      setSelectedAnswer(null)
    }
  }, [currentQuestionIndex, currentQuestion])

  useEffect(() => {
    if (timeLeft === null) return

    if (timeLeft <= 0) {
      handleSubmitAnswer(null)
      return
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [timeLeft, currentQuestionIndex])

  const handleSubmitAnswer = (answer) => {
    if (isSubmitting) return
    setIsSubmitting(true)

    const userAnswer = answer || selectedAnswer
    const isCorrect = userAnswer === currentQuestion.bonneReponse
    const points = isCorrect ? currentQuestion.difficulte.nbrPoints : 0

    const answerData = {
      questionId: currentQuestion.id,
      question: currentQuestion.intitule,
      userAnswer: userAnswer || 'Non répondue',
      correctAnswer: currentQuestion.bonneReponse,
      isCorrect,
      points,
      difficulty: currentQuestion.difficulte.titre,
    }

    const newAnswers = [...answers, answerData]
    setAnswers(newAnswers)

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setIsSubmitting(false)
      }, 500)
    } else {
      calculateResults(newAnswers)
    }
  }

  const calculateResults = (allAnswers) => {
    const correctAnswers = allAnswers.filter(a => a.isCorrect).length
    const totalQuestions = questions.length
    const totalScore = allAnswers.reduce((sum, a) => sum + a.points, 0)
    
    const pointsByDifficulty = {
      Facile: { correct: 0, total: 0, points: 0 },
      Moyen: { correct: 0, total: 0, points: 0 },
      Difficile: { correct: 0, total: 0, points: 0 },
    }

    allAnswers.forEach(answer => {
      const diff = answer.difficulty
      if (pointsByDifficulty[diff]) {
        pointsByDifficulty[diff].total++
        if (answer.isCorrect) {
          pointsByDifficulty[diff].correct++
          pointsByDifficulty[diff].points += answer.points
        }
      }
    })

    const segments = Object.entries(pointsByDifficulty).map(([label, data]) => ({
      label,
      value: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
      correct: data.correct,
      total: data.total,
    }))

    const totalPossiblePoints = questions.reduce((sum, q) => sum + q.difficulte.nbrPoints, 0)
    const scorePercentage = totalPossiblePoints > 0 
      ? Math.round((totalScore / totalPossiblePoints) * 100) 
      : 0

    const results = {
      totalQuestions,
      correctAnswers,
      score: totalScore,
      totalPossiblePoints,
      scorePercentage,
      segments,
      answers: allAnswers,
      theme: theme.titre,
      difficultyIndex,
    }

    if (onComplete) {
      onComplete(results)
    }
  }

  const formattedTime = useMemo(() => {
    if (timeLeft === null) return '00:00'
    const mins = Math.floor(timeLeft / 60)
    const secs = timeLeft % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }, [timeLeft])

  const shuffledAnswers = useMemo(() => {
    if (!currentQuestion) return []
    return [...currentQuestion.listeReponses].sort(() => Math.random() - 0.5)
  }, [currentQuestionIndex, currentQuestion])

  const leftAnswers = useMemo(() => shuffledAnswers.slice(0, 2), [shuffledAnswers])
  const rightAnswers = useMemo(() => shuffledAnswers.slice(2, 4), [shuffledAnswers])

  if (!currentQuestion) return null

  return (
    <div className="min-h-screen bg-[#F4F6FB] pb-16">
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-4 text-center">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#94A3B8]">
            Question N°{currentQuestionIndex + 1} / {questions.length}
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">{currentQuestion.intitule}</h1>
          <p className="text-sm text-slate-500">
            {currentQuestion.difficulte.titre} - {currentQuestion.difficulte.nbrPoints} points
          </p>
        </div>

        <section className="grid w-full gap-6 md:grid-cols-[1fr_auto_1fr] md:grid-rows-2 md:items-center">
          <div className="flex flex-col gap-6">
            {leftAnswers.map((answer, idx) => {
              const answerId = answerLabels[idx]
              return (
                <AnswerCard
                  key={idx}
                  answer={answer}
                  answerId={answerId}
                  isSelected={selectedAnswer === answer}
                  onSelect={setSelectedAnswer}
                />
              )
            })}
          </div>

          <div className="row-span-2 flex items-center justify-center">
            <div className={`flex h-36 w-36 flex-col items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-2xl font-semibold shadow-[0_18px_40px_rgba(15,23,42,0.08)] ${
              timeLeft !== null && timeLeft <= 5 ? 'text-red-600' : 'text-slate-900'
            }`}>
              {formattedTime}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {rightAnswers.map((answer, idx) => {
              const answerId = answerLabels[idx + 2]
              return (
                <AnswerCard
                  key={idx + 2}
                  answer={answer}
                  answerId={answerId}
                  isSelected={selectedAnswer === answer}
                  onSelect={setSelectedAnswer}
                />
              )
            })}
          </div>
        </section>

        <button
          type="button"
          disabled={isSubmitting}
          className="rounded-full border border-transparent bg-[#2563EB] px-10 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2563EB40] transition hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB60] disabled:opacity-50"
          onClick={() => handleSubmitAnswer(selectedAnswer)}
        >
          {isSubmitting ? 'Validation...' : 'Valider'}
        </button>
      </main>
    </div>
  )
}
