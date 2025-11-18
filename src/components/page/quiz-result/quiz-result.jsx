import NavBar from '../../layout/navbar.jsx'

export default function QuizResult({ data, onReplay }) {
  return (
    <div className="min-h-screen bg-[#F4F6FB] pb-16">
      <NavBar  />
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
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold text-slate-900">Score {data.score} pts</p>
            <p className="text-sm text-slate-500">Meilleur score {data.bestScore} pts</p>
          </div>
        </section>

        <section className="w-full rounded-[32px] border border-[#E6ECF5] bg-white px-8 py-10 text-left shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-slate-900">Évaluation</h2>
            <p className="mt-2 text-sm text-slate-500">Détail des réponses</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {data.answers.map((answer) => (
              <div
                key={answer.id}
                className="rounded-2xl bg-[#E8F0FE] px-5 py-4 text-sm font-semibold text-[#1d4ed8]"
              >
                {answer.text}
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={onReplay}
              className="rounded-full bg-[#2563EB] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2563EB52] transition hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB60]"
            >
              Rejouer
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

