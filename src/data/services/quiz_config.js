// Configurations for quiz question distributions based on difficulty levels
export const questionDistribution = [
  { facile: 5, moyen: 3, difficile: 2 }, // Number of questions distribution for Easy quiz
  { facile: 3, moyen: 5, difficile: 2 }, // Number of questions distribution for Normal quiz
  { facile: 2, moyen: 3, difficile: 5 }, // Number of questions distribution for Hard quiz
]


// Time allocated per question based on difficulty level (in seconds)
export const questionChronos = {
  Facile: 30,
  Moyen: 25,
  Difficile: 20,
}

export const difficulties = ["Facile", "Normal", "Difficile"]

