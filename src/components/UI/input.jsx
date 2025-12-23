/**
 * Composant Input
 * Composant de champ de saisie réutilisable avec styles prédéfinis
 * 
 * @param {string} value - Valeur du champ
 * @param {function} onChange - Fonction appelée lors du changement de valeur
 * @param {string} placeholder - Texte d'aide affiché quand le champ est vide
 * @param {string} type - Type d'input (text, email, password, etc.). Par défaut: "text"
 * @param {boolean} required - Indique si le champ est obligatoire
 * @param {string} className - Classes CSS supplémentaires
 * @param {string} name - Nom du champ (pour les formulaires)
 * @param {string} id - Identifiant unique du champ
 * @param {object} ...props - Autres props HTML standard pour l'input
 */
function Input({
  value,
  onChange,
  placeholder = "",
  type = "text",
  required = false,
  className = "",
  name,
  id,
  ...props
}) {
  // Classes CSS de base pour le style
  const baseClasses = "w-full rounded-2xl border border-slate-200 px-5 py-3 text-sm text-slate-800 shadow-sm outline-none ring-0 transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
  
  // Combiner les classes de base avec les classes personnalisées
  const combinedClasses = className 
    ? `${baseClasses} ${className}`.trim()
    : baseClasses

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      name={name}
      id={id}
      className={combinedClasses}
      {...props}
    />
  )
}

export default Input

