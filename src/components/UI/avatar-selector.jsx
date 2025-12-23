import Avatar from "./avatar.jsx"

/**
 * AvatarSelector Component
 * Displays a grid of selectable avatars
 * 
 * @param {string[]} avatars - Array of avatar image URLs
 * @param {string} selectedAvatar - Currently selected avatar URL
 * @param {function} onAvatarSelect - Callback function when an avatar is selected
 * @param {string} className - Additional CSS classes for the container
 */
function AvatarSelector({ 
  avatars = [], 
  selectedAvatar, 
  onAvatarSelect,
  className = "" 
}) {
  if (!avatars || avatars.length === 0) {
    return null
  }

  return (
    <div className={`w-full ${className}`.trim()}>
      <p className="mb-3 text-sm font-medium text-slate-600 text-center">
        Choisissez votre avatar
      </p>
      <div className="grid grid-cols-4 gap-3">
        {avatars.map((avatar, index) => (
          <Avatar
            key={index}
            src={avatar}
            alt={`Avatar ${index + 1}`}
            isSelected={selectedAvatar === avatar}
            onClick={() => onAvatarSelect?.(avatar)}
          />
        ))}
      </div>
    </div>
  )
}

export default AvatarSelector

