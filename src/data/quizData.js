export const themes = [
  {
    id: "capitals",
    title: "Capitales du Monde",
    description: "Associez chaque pays à sa capitale. 20 questions, difficulté progressive.",
    color: "#FFD700", // Jaune
  },
  {
    id: "history",
    title: "Histoire de France",
    description: "Des Gaulois à la Vème République : dates clés, rois, révolutions et grandes figures.",
    color: "#FF6347", // Rouge Tomate
  },
  {
    id: "science",
    title: "Science Pop",
    description: "Physique du quotidien, chimie de cuisine et grandes découvertes en cartes.",
    color: "#4682B4", // Bleu Acier
  },
  {
    id: "cinema",
    title: "Culture Ciné",
    description: "Réalisateurs, Oscars, bandes originales et répliques cultes des années 70 à aujourd'hui.",
    color: "#3CB371", // Vert Moyen
  },
  {
    id: "football",
    title: "Football Europe",
    description: "Clubs, stades, Ballon d'Or, records de C1 et joueurs emblématiques.",
    color: "#FFA07A", // Saumon Clair
  },
  {
    id: "cuisine",
    title: "Cuisine du Monde",
    description: "Plats iconiques, ingrédients et techniques : de la ramen au tajine.",
    color: "#D2B48C", // Tan
  },
  {
    id: "tech",
    title: "Tech & Startups",
    description: "Sigles, langages, innovations marquantes et licornes européennes.",
    color: "#8A2BE2", // Bleu Violet
  },
  {
    id: "litterature",
    title: "Littérature",
    description: "Auteurs, courants, prix Goncourt et premières phrases célèbres.",
    color: "#F08080", // Corail Clair
  },
  {
    id: "geographie",
    title: "Géographie",
    description: "Montagnes, fleuves, mers et pays : testez vos connaissances sur la planète.",
    color: "#20B2AA", // Vert-Bleu Clair
  },
];

export const questionsData = {
  capitals: {
    easy: [
      {
        id: 1,
        question: "Quelle est la capitale de l'Australie ?",
        options: ["Sydney", "Canberra", "Melbourne", "Perth"],
        answer: "Canberra",
      },
      // Ajout d'une question pour simuler le flux
      {
        id: 2,
        question: "Quelle est la capitale de la France ?",
        options: ["Marseille", "Paris", "Lyon", "Bordeaux"],
        answer: "Paris",
      },
    ],
    medium: [
      // Questions de difficulté moyenne
    ],
    hard: [
      // Questions de difficulté difficile
    ],
  },
  // Autres thèmes avec leurs questions...
  geographie: {
    easy: [
      {
        id: 101,
        question: "Quel est le plus long fleuve du monde ?",
        options: ["Amazone", "Nil", "Yangtsé", "Mississippi"],
        answer: "Amazone",
      },
      {
        id: 102,
        question: "Quel est le plus grand désert chaud du monde ?",
        options: ["Gobi", "Kalahari", "Sahara", "Arabique"],
        answer: "Sahara",
      },
    ],
    medium: [
      {
        id: 103,
        question: "Dans quel pays se trouve le Mont Fuji ?",
        options: ["Chine", "Japon", "Corée du Sud", "Népal"],
        answer: "Japon",
      },
    ],
    hard: [
      {
        id: 104,
        question: "Quelle est la capitale du Bhoutan ?",
        options: ["Katmandou", "Thimphou", "Dacca", "Colombo"],
        answer: "Thimphou",
      },
    ],
  },
};
