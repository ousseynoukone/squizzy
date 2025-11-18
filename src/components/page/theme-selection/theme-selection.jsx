import NavBar from "../../layout/navbar.jsx"

const themes = [
  {
    id: 1,
    title: "Capitals du Monde",
    description:
      "Associez chaque pays à sa capitale. 20 questions, difficulté progressive.",
    accent: "from-[#FFEAB7] to-[#FFEAB7]",
  },
  {
    id: 2,
    title: "Histoire de France",
    description:
      "Des Gaulois à la Vème République: dates clés, rois, révolutions et grandes figures.",
    accent: "from-[#FFEB92] to-[#FFD443]",
  },
  {
    id: 3,
    title: "Science Pop",
    description:
      "Physique du quotidien, chimie de cuisine et grandes découvertes en cartes.",
    accent: "from-[#FFD2DB] to-[#FFA8C0]",
  },
  {
    id: 4,
    title: "Culture Ciné",
    description:
      "Réalisateurs, Oscars, bandes originales et répliques cultes des années 70 à aujourd’hui.",
    accent: "from-[#9CC9FF] to-[#2F6DFF]",
  },
  {
    id: 5,
    title: "Football Europe",
    description:
      "Clubs, stades, Ballon d’Or, records de C1 et joueurs emblématiques.",
    accent: "from-[#FFEAB7] to-[#FFEAB7]",
  },
  {
    id: 6,
    title: "Cuisine du Monde",
    description:
      "Plats iconiques, ingrédients et techniques: de la ramen au tajine.",
    accent: "from-[#9CC9FF] to-[#2F6DFF]",
  },
  {
    id: 7,
    title: "Tech & Startups",
    description:
      "Sigles, langages, innovations marquantes et licornes européennes.",
    accent: "from-[#9CC9FF] to-[#2F6DFF]",
  },
  {
    id: 8,
    title: "Littérature",
    description:
      "Auteurs, courants, prix Goncourt et premières phrases célèbres.",
    accent: "from-[#FFEB92] to-[#FFD443]",
  },
]

export default function ThemeSelection() {
  return (
    <div className="pb-16">
      <NavBar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4">
        <div className="flex flex-col items-center text-center gap-3">
          <h1 className="text-3xl font-semibold text-slate-900">
            Choisissez un thème pour commencer
          </h1>
          <p className="max-w-3xl text-sm text-slate-500">
            Explorez des domaines variés: histoire, science, culture ou sport.
            Chaque carte vous lance dans un quiz adapté à votre niveau.
          </p>
        </div>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {themes.map((theme) => (
            <article
              key={theme.id}
              className="rounded-[22px] border border-slate-100 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,23,42,0.12)]"
            >
              <div
                className={`h-1.5 w-full rounded-full bg-gradient-to-r ${theme.accent} mb-4`}
              />
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  {theme.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {theme.description}
                </p>
                <button className="mt-2 w-fit rounded-xl bg-[#2563EB] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/60">
                  Jouer
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}


