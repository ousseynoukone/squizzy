import { useState } from "react"
import button from "../../UI/button.jsx"
import { saveUserData } from "../../../utils/storage.js"

const avatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=20",
  "https://i.pravatar.cc/150?img=33",
  "https://i.pravatar.cc/150?img=47",
  "https://i.pravatar.cc/150?img=51",
  "https://i.pravatar.cc/150?img=68",
]

function FormConnection({ onComplete }) {
  const [name, setName] = useState("")
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name.trim()) {
      saveUserData(name, selectedAvatar)
      if (onComplete) onComplete()
    }
  }

  return (
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
        required
      />
      
      <div className="w-full">
        <p className="mb-3 text-sm font-medium text-slate-600 text-center">
          Choisissez votre avatar
        </p>
        <div className="grid grid-cols-4 gap-3">
          {avatars.map((avatar, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedAvatar(avatar)}
              className={`h-16 w-16 rounded-full overflow-hidden border-2 transition ${
                selectedAvatar === avatar
                  ? "border-[#2563EB] ring-2 ring-[#2563EB]/20"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <img
                src={avatar}
                alt={`Avatar ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {button({ type: "submit", children: "Valider" })}
    </form>
  )
}

export default FormConnection