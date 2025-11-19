// Pool de questions organisées par thème et difficulté de question
// Distribution pour chaque difficulté de quiz:
// - Facile: 5 Facile, 3 Moyen, 2 Difficile
// - Normal: 3 Facile, 5 Moyen, 2 Difficile
// - Difficile: 2 Facile, 3 Moyen, 5 Difficile

export const questions = [
  // Thème 1: Capitales du Monde
  {
    id: 1,
    intitule: "Quelle est la capitale de l'Australie ?",
    themeId: 1,
    listeReponses: ["Sydney", "Canberra", "Melbourne", "Perth"],
    bonneReponse: "Canberra",
    difficulte: {
      titre: "Facile",
      nbrPoints: 10,
      chrono: 30, // secondes
    },
  },
  {
    id: 2,
    intitule: "Quelle est la capitale du Japon ?",
    themeId: 1,
    listeReponses: ["Osaka", "Kyoto", "Tokyo", "Yokohama"],
    bonneReponse: "Tokyo",
    difficulte: {
      titre: "Facile",
      nbrPoints: 10,
      chrono: 30,
    },
  },
  {
    id: 3,
    intitule: "Quelle est la capitale du Brésil ?",
    themeId: 1,
    listeReponses: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    bonneReponse: "Brasília",
    difficulte: {
      titre: "Facile",
      nbrPoints: 10,
      chrono: 30,
    },
  },
  {
    id: 4,
    intitule: "Quelle est la capitale de la Nouvelle-Zélande ?",
    themeId: 1,
    listeReponses: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
    bonneReponse: "Wellington",
    difficulte: {
      titre: "Facile",
      nbrPoints: 10,
      chrono: 30,
    },
  },
  {
    id: 5,
    intitule: "Quelle est la capitale du Canada ?",
    themeId: 1,
    listeReponses: ["Toronto", "Montréal", "Ottawa", "Vancouver"],
    bonneReponse: "Ottawa",
    difficulte: {
      titre: "Facile",
      nbrPoints: 10,
      chrono: 30,
    },
  },
  {
    id: 6,
    intitule: "Quelle est la capitale du Maroc ?",
    themeId: 1,
    listeReponses: ["Casablanca", "Rabat", "Marrakech", "Fès"],
    bonneReponse: "Rabat",
    difficulte: {
      titre: "Moyen",
      nbrPoints: 20,
      chrono: 25,
    },
  },
  {
    id: 7,
    intitule: "Quelle est la capitale de la Turquie ?",
    themeId: 1,
    listeReponses: ["Istanbul", "Ankara", "Izmir", "Antalya"],
    bonneReponse: "Ankara",
    difficulte: {
      titre: "Moyen",
      nbrPoints: 20,
      chrono: 25,
    },
  },
  {
    id: 8,
    intitule: "Quelle est la capitale du Myanmar ?",
    themeId: 1,
    listeReponses: ["Yangon", "Naypyidaw", "Mandalay", "Bago"],
    bonneReponse: "Naypyidaw",
    difficulte: {
      titre: "Moyen",
      nbrPoints: 20,
      chrono: 25,
    },
  },
  {
    id: 9,
    intitule: "Quelle est la capitale du Bhoutan ?",
    themeId: 1,
    listeReponses: ["Paro", "Thimphou", "Punakha", "Wangdue Phodrang"],
    bonneReponse: "Thimphou",
    difficulte: {
      titre: "Difficile",
      nbrPoints: 30,
      chrono: 20,
    },
  },
  {
    id: 10,
    intitule: "Quelle est la capitale du Suriname ?",
    themeId: 1,
    listeReponses: ["Paramaribo", "Lelydorp", "Nieuw Nickerie", "Moengo"],
    bonneReponse: "Paramaribo",
    difficulte: {
      titre: "Difficile",
      nbrPoints: 30,
      chrono: 20,
    },
  },
  // Thème 2: Histoire de France
  {
    id: 11,
    intitule: "En quelle année a eu lieu la Révolution française ?",
    themeId: 2,
    listeReponses: ["1787", "1789", "1791", "1793"],
    bonneReponse: "1789",
    difficulte: {
      titre: "Facile",
      nbrPoints: 10,
      chrono: 30,
    },
  },
  {
    id: 12,
    intitule: "Qui était le roi de France lors de la Révolution ?",
    themeId: 2,
    listeReponses: ["Louis XV", "Louis XVI", "Louis XVII", "Louis XVIII"],
    bonneReponse: "Louis XVI",
    difficulte: {
      titre: "Facile",
      nbrPoints: 10,
      chrono: 30,
    },
  },
  {
    id: 13,
    intitule: "Quelle bataille a marqué la fin de Napoléon ?",
    themeId: 2,
    listeReponses: ["Austerlitz", "Waterloo", "Iéna", "Marengo"],
    bonneReponse: "Waterloo",
    difficulte: {
      titre: "Facile",
      nbrPoints: 10,
      chrono: 30,
    },
  },
  {
    id: 14,
    intitule: "En quelle année a été signé l'édit de Nantes ?",
    themeId: 2,
    listeReponses: ["1596", "1598", "1600", "1602"],
    bonneReponse: "1598",
    difficulte: {
      titre: "Moyen",
      nbrPoints: 20,
      chrono: 25,
    },
  },
  {
    id: 15,
    intitule: "Qui était le Premier ministre sous Louis XIV ?",
    themeId: 2,
    listeReponses: ["Richelieu", "Mazarin", "Colbert", "Fouquet"],
    bonneReponse: "Colbert",
    difficulte: {
      titre: "Moyen",
      nbrPoints: 20,
      chrono: 25,
    },
  },
  {
    id: 16,
    intitule: "Quelle dynastie a régné sur la France de 987 à 1328 ?",
    themeId: 2,
    listeReponses: ["Mérovingiens", "Carolingiens", "Capétiens", "Valois"],
    bonneReponse: "Capétiens",
    difficulte: {
      titre: "Difficile",
      nbrPoints: 30,
      chrono: 20,
    },
  },
  // Thème 3: Science Pop
  {
    id: 17,
    intitule: "Quelle est la vitesse de la lumière dans le vide ?",
    themeId: 3,
    listeReponses: ["300 000 km/s", "150 000 km/s", "450 000 km/s", "600 000 km/s"],
    bonneReponse: "300 000 km/s",
    difficulte: {
      titre: "Facile",
      nbrPoints: 10,
      chrono: 30,
    },
  },
  {
    id: 18,
    intitule: "Quel est le symbole chimique de l'or ?",
    themeId: 3,
    listeReponses: ["Or", "Au", "Go", "Ag"],
    bonneReponse: "Au",
    difficulte: {
      titre: "Facile",
      nbrPoints: 10,
      chrono: 30,
    },
  },
  {
    id: 19,
    intitule: "Combien de planètes composent notre système solaire ?",
    themeId: 3,
    listeReponses: ["7", "8", "9", "10"],
    bonneReponse: "8",
    difficulte: {
      titre: "Facile",
      nbrPoints: 10,
      chrono: 30,
    },
  },
  {
    id: 20,
    intitule: "Qu'est-ce que la photosynthèse ?",
    themeId: 3,
    listeReponses: [
      "La production d'énergie par les cellules",
      "La transformation de la lumière en énergie chimique par les plantes",
      "La respiration des plantes",
      "La décomposition de la matière organique",
    ],
    bonneReponse: "La transformation de la lumière en énergie chimique par les plantes",
    difficulte: {
      titre: "Moyen",
      nbrPoints: 20,
      chrono: 25,
    },
  },
  {
    id: 21,
    intitule: "Quel est le nombre d'Avogadro approximatif ?",
    themeId: 3,
    listeReponses: ["6.02 × 10²³", "6.02 × 10²²", "6.02 × 10²⁴", "6.02 × 10²⁵"],
    bonneReponse: "6.02 × 10²³",
    difficulte: {
      titre: "Difficile",
      nbrPoints: 30,
      chrono: 20,
    },
  },
  // Thème 4: Culture Ciné
  {
    id: 22,
    intitule: "Qui a réalisé le film 'Pulp Fiction' ?",
    themeId: 4,
    listeReponses: ["Martin Scorsese", "Quentin Tarantino", "Steven Spielberg", "Christopher Nolan"],
    bonneReponse: "Quentin Tarantino",
    difficulte: {
      titre: "Facile",
      nbrPoints: 10,
      chrono: 30,
    },
  },
  {
    id: 23,
    intitule: "Quel film a remporté l'Oscar du meilleur film en 2020 ?",
    themeId: 4,
    listeReponses: ["1917", "Parasite", "Joker", "Once Upon a Time in Hollywood"],
    bonneReponse: "Parasite",
    difficulte: {
      titre: "Moyen",
      nbrPoints: 20,
      chrono: 25,
    },
  },
  {
    id: 24,
    intitule: "Dans quel film entend-on 'May the Force be with you' ?",
    themeId: 4,
    listeReponses: ["Star Trek", "Star Wars", "Blade Runner", "Dune"],
    bonneReponse: "Star Wars",
    difficulte: {
      titre: "Facile",
      nbrPoints: 10,
      chrono: 30,
    },
  },
  // Thème 5: Programmation JS
  {
    id: 25,
    intitule: "Qu'est-ce qu'une closure en JavaScript ?",
    themeId: 5,
    listeReponses: [
      "Une fonction qui peut accéder aux variables de son scope parent",
      "Une méthode pour fermer une fonction",
      "Un type de boucle",
      "Une structure de données",
    ],
    bonneReponse: "Une fonction qui peut accéder aux variables de son scope parent",
    difficulte: {
      titre: "Moyen",
      nbrPoints: 20,
      chrono: 25,
    },
  },
  {
    id: 26,
    intitule: "Quelle méthode permet de créer un nouveau tableau à partir d'un autre ?",
    themeId: 5,
    listeReponses: ["forEach", "map", "filter", "reduce"],
    bonneReponse: "map",
    difficulte: {
      titre: "Facile",
      nbrPoints: 10,
      chrono: 30,
    },
  },
  {
    id: 27,
    intitule: "Qu'est-ce que le hoisting en JavaScript ?",
    themeId: 5,
    listeReponses: [
      "Le déplacement des déclarations en haut du scope",
      "Une erreur de syntaxe",
      "Une méthode de performance",
      "Un type de variable",
    ],
    bonneReponse: "Le déplacement des déclarations en haut du scope",
    difficulte: {
      titre: "Difficile",
      nbrPoints: 30,
      chrono: 20,
    },
  },
]

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

