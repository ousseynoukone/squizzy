// Configuration des quiz par thème et difficulté
// Chaque quiz a 3 niveaux de difficulté avec différentes configurations

export const quizzes = [
  // Thème 1: Capitales du Monde
  {
    id: 1,
    titre: "Capitales du Monde",
    themeId: 1,
    difficulteQuizz: [
      {
        titre: "Facile",
        nbrPoints: 100, // Points totaux possibles
        chrono: 600, // 10 minutes en secondes
      },
      {
        titre: "Normal",
        nbrPoints: 200,
        chrono: 480, // 8 minutes
      },
      {
        titre: "Difficile",
        nbrPoints: 300,
        chrono: 360, // 6 minutes
      },
    ],
  },
  // Thème 2: Histoire de France
  {
    id: 2,
    titre: "Histoire de France",
    themeId: 2,
    difficulteQuizz: [
      {
        titre: "Facile",
        nbrPoints: 100,
        chrono: 600,
      },
      {
        titre: "Normal",
        nbrPoints: 200,
        chrono: 480,
      },
      {
        titre: "Difficile",
        nbrPoints: 300,
        chrono: 360,
      },
    ],
  },
  // Thème 3: Science Pop
  {
    id: 3,
    titre: "Science Pop",
    themeId: 3,
    difficulteQuizz: [
      {
        titre: "Facile",
        nbrPoints: 100,
        chrono: 600,
      },
      {
        titre: "Normal",
        nbrPoints: 200,
        chrono: 480,
      },
      {
        titre: "Difficile",
        nbrPoints: 300,
        chrono: 360,
      },
    ],
  },
  // Thème 4: Culture Ciné
  {
    id: 4,
    titre: "Culture Ciné",
    themeId: 4,
    difficulteQuizz: [
      {
        titre: "Facile",
        nbrPoints: 100,
        chrono: 600,
      },
      {
        titre: "Normal",
        nbrPoints: 200,
        chrono: 480,
      },
      {
        titre: "Difficile",
        nbrPoints: 300,
        chrono: 360,
      },
    ],
  },
  // Thème 5: Programmation JS
  {
    id: 5,
    titre: "Programmation JS",
    themeId: 5,
    difficulteQuizz: [
      {
        titre: "Facile",
        nbrPoints: 100,
        chrono: 600,
      },
      {
        titre: "Normal",
        nbrPoints: 200,
        chrono: 480,
      },
      {
        titre: "Difficile",
        nbrPoints: 300,
        chrono: 360,
      },
    ],
  },
]

// Fonction pour obtenir un quiz par thème
export function getQuizByThemeId(themeId) {
  return quizzes.find(q => q.themeId === themeId)
}

// Fonction pour obtenir la configuration de difficulté
export function getDifficultyConfig(themeId, difficultyIndex) {
  const quiz = getQuizByThemeId(themeId)
  if (!quiz) return null
  return quiz.difficulteQuizz[difficultyIndex]
}

