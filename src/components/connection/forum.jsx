import { useState } from "react"
function formconnection(){
    const [name, setName] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Player name:", name)
    }

    return(
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
    )
}
export default formconnection;