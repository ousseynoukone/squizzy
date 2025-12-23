/**
 * Avatar Component
 * Displays a user avatar image with optional selection state
 * Can be used as a clickable button or as a display-only image
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for the image
 * @param {boolean} isSelected - Whether this avatar is currently selected (only used when onClick is provided)
 * @param {function} onClick - Click handler function (if provided, renders as button, otherwise as div)
 * @param {string} size - Size preset: "sm" (h-12 w-12), "md" (h-16 w-16), "lg" (h-32 w-32). Default: "md"
 * @param {string} className - Additional CSS classes
 */
function Avatar({ 
  src, 
  alt = "Avatar", 
  isSelected = false, 
  onClick, 
  size = "md",
  className = "" 
}) {
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-32 w-32"
  }
  
  const baseClasses = `${sizeClasses[size] || sizeClasses.md} rounded-full overflow-hidden transition`
  
  // If onClick is provided, render as clickable button with selection state
  if (onClick) {
    const borderClasses = isSelected
      ? "border-2 border-[#2563EB] ring-2 ring-[#2563EB]/20"
      : "border-2 border-slate-200 hover:border-slate-300"
    
    const combinedClasses = `${baseClasses} ${borderClasses} ${className}`.trim()

    return (
      <button
        type="button"
        onClick={onClick}
        className={combinedClasses}
        aria-label={alt}
        aria-pressed={isSelected}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </button>
    )
  }
  
  // Otherwise, render as display-only image
  const combinedClasses = `${baseClasses} ${className}`.trim()
  
  return (
    <div className={combinedClasses}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  )
}

export default Avatar

