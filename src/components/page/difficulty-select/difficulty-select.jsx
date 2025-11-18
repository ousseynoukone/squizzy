import NavBar from '../../layout/navbar.jsx'

const difficulties = [
  {
    id: 'easy',
    label: 'Facile',
    description: '5 pays, capitales iconiques, idéal pour se mettre en jambes.',
    bg: 'bg-[#E8F7EE]',
    textColor: 'text-[#1F6B3A]',
    border: 'border-[#CBEAD5]',
  },
  {
    id: 'medium',
    label: 'Moyen',
    description: '10 pays mélangés: Europe, Asie, Amériques. Connaissances solides requises.',
    bg: 'bg-[#FFF3E3]',
    textColor: 'text-[#9A5A00]',
    border: 'border-[#FAD9AC]',
  },
  {
    id: 'hard',
    label: 'Difficile',
    description: '15 pays moins connus, pièges et variantes linguistiques.',
    bg: 'bg-[#FFE8E5]',
    textColor: 'text-[#B42318]',
    border: 'border-[#F5B5AE]',
  },
]

export default function DifficultySelect({ onClick }) {
  return (
    <div className="min-h-screen bg-[#F4F6FB] pb-16">
      <NavBar isPPShown={false} />
      <main className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-4 text-center">
        <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold text-slate-900">Capitales du monde</h1>
          <p className="text-base leading-relaxed text-slate-500">
            Associez chaque pays à sa capitale. Exemple: France → Paris, Japon → Tokyo.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-slate-400">
          <span className="text-sm uppercase tracking-[0.3em]">Choisissez un niveau de difficulté</span>
        </div>

        <section className="flex w-full flex-col gap-4 md:flex-row">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty.id}
              type="button"
              onClick={() => onClick?.(difficulty.id)}
              className={`group flex flex-1 flex-col items-center rounded-3xl border ${difficulty.border} ${difficulty.bg} px-6 py-10 text-center shadow-[0_18px_35px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_45px_rgba(15,23,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB40]`}
            >
              <span className={`text-lg font-semibold ${difficulty.textColor}`}>{difficulty.label}</span>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{difficulty.description}</p>
            </button>
          ))}
        </section>
      </main>
    </div>
  )
}

