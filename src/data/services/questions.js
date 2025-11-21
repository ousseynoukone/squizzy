// Pool de questions organisées par thème et difficulté de question
// Distribution pour chaque difficulté de quiz:
// - Facile: 5 Facile, 3 Moyen, 2 Difficile
// - Normal: 3 Facile, 5 Moyen, 2 Difficile
// - Difficile: 2 Facile, 3 Moyen, 5 Difficile

import questions  from '../questions.json'

// Fonction pour obtenir les questions d'un thème
export function getQuestionsByThemeId(themeId) {
  return questions.filter(q => q.themeId === themeId)
}

// Fonction pour générer une liste de questions selon la difficulté du quiz
export function generateQuestionList(themeId, quizDifficultyIndex) {
  const allQuestions = getQuestionsByThemeId(themeId)
  
  // Séparer les questions par difficulté
  const facileQuestions = allQuestions.filter(q => q.difficulte.titre === "Facile")
  const moyenQuestions = allQuestions.filter(q => q.difficulte.titre === "Moyen")
  const difficileQuestions = allQuestions.filter(q => q.difficulte.titre === "Difficile")
  
  // Distribution selon la difficulté du quiz
  let distribution
  if (quizDifficultyIndex === 0) {
    // Facile: 5F, 3M, 2D
    distribution = { facile: 5, moyen: 3, difficile: 2 }
  } else if (quizDifficultyIndex === 1) {
    // Normal: 3F, 5M, 2D
    distribution = { facile: 3, moyen: 5, difficile: 2 }
  } else {
    // Difficile: 2F, 3M, 5D
    distribution = { facile: 2, moyen: 3, difficile: 5 }
  }
  
  // Mélanger et sélectionner les questions
  const shuffle = (array) => array.sort(() => Math.random() - 0.5)
  
  const selectedFacile = shuffle([...facileQuestions]).slice(0, distribution.facile)
  const selectedMoyen = shuffle([...moyenQuestions]).slice(0, distribution.moyen)
  const selectedDifficile = shuffle([...difficileQuestions]).slice(0, distribution.difficile)
  
  // Mélanger toutes les questions sélectionnées
  return shuffle([...selectedFacile, ...selectedMoyen, ...selectedDifficile])
}

