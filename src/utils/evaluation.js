// Fonction pour calculer l'évaluation basée sur le pourcentage de score

export function getEvaluation(scorePercentage) {
  if (scorePercentage >= 90) {
    return "Excellent"
  } else if (scorePercentage >= 75) {
    return "Très bien"
  } else if (scorePercentage >= 60) {
    return "Moyen"
  } else {
    return "À renforcer"
  }
}

// Calculer le pourcentage de score
export function calculateScorePercentage(score, totalPoints) {
  if (totalPoints === 0) return 0
  return Math.round((score / totalPoints) * 100)
}

