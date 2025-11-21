export const themes = [
  {
    id: 1,
    titre: "Capitales du Monde",
    description: "Associez chaque pays à sa capitale. Testez vos connaissances géographiques à travers le monde.",
  },
  {
    id: 2,
    titre: "Histoire de France",
    description: "Des Gaulois à la Vème République: dates clés, rois, révolutions et grandes figures historiques.",
  },
  {
    id: 3,
    titre: "Science Pop",
    description: "Physique du quotidien, chimie de cuisine et grandes découvertes scientifiques.",
  },
  {
    id: 4,
    titre: "Culture Ciné",
    description: "Réalisateurs, Oscars, bandes originales et répliques cultes des années 70 à aujourd'hui.",
  },
  {
    id: 5,
    titre: "Programmation JS",
    description: "JavaScript, frameworks modernes, concepts avancés et bonnes pratiques du développement web.",
  },
 {
    id: 6,
    titre: "Jeu Vidéo",
    description : "Plongez dans l'univers des jeux vidéo: histoire, genres, consoles et icônes du gaming.",
  },
  
]



// Fonction pour obtenir un théme par id
export function getQuizByThemeId(themeId) {
  let theme= themes.find(q => q.id === themeId)
  return theme || null
}


