import NavBar from "../../layout/navbar.jsx"
import { themes } from "../../../data/themes.js"

const accentColors = [
  "from-[#FFEAB7] to-[#FFEAB7]",
  "from-[#FFEB92] to-[#FFD443]",
  "from-[#FFD2DB] to-[#FFA8C0]",
  "from-[#9CC9FF] to-[#2F6DFF]",
  "from-[#FFEAB7] to-[#FFEAB7]",
]

export default function ThemeSelection({ onThemeSelect, onProfileClick }) {
  return (
    <div className="pb-16">
      <NavBar isPPShown={true} onProfileClick={onProfileClick} />
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
          {themes.map((theme, index) => (
            <article
              key={theme.id}
              className="rounded-[22px] border border-slate-100 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,23,42,0.12)]"
            >
              <div
                className={`h-1.5 w-full rounded-full bg-gradient-to-r ${accentColors[index % accentColors.length]} mb-4`}
              />
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  {theme.titre}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {theme.description}
                </p>
                <button
                  onClick={() => onThemeSelect && onThemeSelect(theme)}
                  className="mt-2 w-fit rounded-xl bg-[#2563EB] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/60"
                >
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


