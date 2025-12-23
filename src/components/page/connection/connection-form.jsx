import { useState } from "react"
import button from "../../UI/button.jsx"
import Input from "../../UI/input.jsx"
import AvatarSelector from "../../UI/avatar-selector.jsx"
import { saveUserData } from "../../../utils/storage.js"
import { useNavigate } from "react-router-dom"

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

function FormConnection() {
  const [name, setName] = useState("")
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0])
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name.trim()) {
      saveUserData(name, selectedAvatar)
      navigate('/theme');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center gap-6"
    >
      <Input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Léa, Hugo, Amira"
        required
      />
      
      <AvatarSelector
        avatars={avatars}
        selectedAvatar={selectedAvatar}
        onAvatarSelect={setSelectedAvatar}
      />

      {button({ type: "submit", children: "Valider"  })}
    </form>
  )
}

export default FormConnection

