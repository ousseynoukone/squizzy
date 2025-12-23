// Pool de questions organisées par thème et difficulté de question
// Utilise les fichiers JSON Squizzy_Questions_*.json et la fonction CreateQuizz

import CreateQuizz from '../../utils/functions/CreateQuizz.js'
import { themes } from './themes.js'

// Mapping entre les titres de thèmes dans themes.js et les noms utilisés dans CreateQuizz
const titleToNameMap = {
  "Capitales du Monde": "GEOGRAPHIE",
  "Histoire de France": "HISTOIRE",
  "Science Pop": "SCIENCE",
  "Culture Ciné": "CINEMA",
  "Programmation JS": "MATHEMATIQUE", // Note: Utilise MATHEMATIQUE pour Programmation JS
  "Jeu Vidéo": "JEUXVIDEO",
  "Anglais Général": "ANGLAIS",
  // Ajouter d'autres mappings si de nouveaux thèmes sont ajoutés
}

// Fonction pour obtenir le nom du thème depuis l'ID
function getThemeNameFromId(themeId) {
  // Chercher dans themes.js pour trouver le thème
  const theme = themes.find(t => t.id === themeId)
  if (!theme) {
    console.error(`Theme with ID ${themeId} not found`)
    return null
  }
  
  // Mapper le titre au nom utilisé dans CreateQuizz
  const themeName = titleToNameMap[theme.titre]
  
  if (!themeName) {
    console.error(`Theme "${theme.titre}" (ID: ${themeId}) not mapped to a JSON file`)
    return null
  }
  
  return themeName
}

// Fonction pour obtenir les questions d'un thème (non utilisée directement, mais gardée pour compatibilité)
export function getQuestionsByThemeId(themeId) {
  // Cette fonction n'est plus utilisée car on utilise directement CreateQuizz
  // Mais on la garde pour compatibilité
  return []
}

// Fonction pour générer une liste de questions selon la difficulté du quiz
export function generateQuestionList(themeId, quizDifficultyIndex) {
  const themeName = getThemeNameFromId(themeId)
  
  if (!themeName) {
    console.error(`Theme ID ${themeId} not found or not mapped`)
    return []
  }
  
  // Utiliser CreateQuizz avec le nom du thème et l'index de difficulté
  const questions = CreateQuizz(themeName, quizDifficultyIndex, 10)
  
  return questions || []
}

