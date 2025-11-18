import { useState } from "react"

export default function Connexion() {
  const [name, setName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Player name:", name)
  }

  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-3xl rounded-3xl bg-white px-12 py-10 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2563EB] text-sm font-semibold text-white">
                SQ
              </div>
              <span className="text-2xl font-semibold tracking-[0.18em] text-slate-900">
                SQUIZZY
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Le quiz moderne pour apprendre en s&apos;amusant.
            </p>
          </div>

          <div className="text-sm font-medium text-slate-600">
            Qui êtes-vous ?
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col items-center gap-6"
          >
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Léa, Hugo, Amira"
              className="w-full rounded-2xl border border-slate-200 px-5 py-3 text-sm text-slate-800 shadow-sm outline-none ring-0 transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
            />
            <button
              type="submit"
              className="rounded-full bg-[#2563EB] px-10 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/60"
            >
              Valider
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
