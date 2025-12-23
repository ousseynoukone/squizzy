import Questionaire_Anglais from "../../data/Squizzy_Questions_Anglais.json";
import Questionaire_Art from "../../data/Squizzy_Questions_Art.json";
import Questionaire_Cinema from "../../data/Squizzy_Questions_Cinema.json";
import Questionaire_Francais from "../../data/Squizzy_Questions_Francais.json";
import Questionaire_Geographie from "../../data/Squizzy_Questions_Geographie.json";
import Questionaire_Histoire from "../../data/Squizzy_Questions_Histoire.json";
import Questionaire_JeuxVideo from "../../data/Squizzy_Questions_JeuxVideo.json";
import Questionaire_Litterature from "../../data/Squizzy_Questions_Litterature.json";
import Questionaire_Mathematique from "../../data/Squizzy_Questions_Mathematique.json";
import Questionaire_Musique from "../../data/Squizzy_Questions_Musique.json";
import Questionaire_Science from "../../data/Squizzy_Questions_Science.json";
import Questionaire_Sport from "../../data/Squizzy_Questions_Sport.json";
import { questionDistribution, questionChronos } from "../../data/services/quiz_config.js";

export default function CreateQuizz(Theme, difficulte, nbQuestions) {
  let Questionaire = getThemeQuestionnaire(Theme);
  let nbQ = nbQuestions; //Pas utilisé pour le moment
  let nbF;
  let nbM;
  let nbD;

  // Use the distribution from quiz_config
  const distribution = questionDistribution[difficulte] || questionDistribution[0];
  nbF = distribution.facile;
  nbM = distribution.moyen;
  nbD = distribution.difficile;

  const Quizz = Array();
  let Facile = Array();
  let Moyen = Array();
  let Difficile = Array();

  Facile = getQuestionsByDifficulty(Questionaire, "Facile");
  Facile = getRandomQuestions(Theme, Facile, nbF);
  Quizz.push(...Facile);

  Moyen = getQuestionsByDifficulty(Questionaire, "Moyen");
  Moyen = getRandomQuestions(Theme, Moyen, nbM);
  Quizz.push(...Moyen);

  Difficile = getQuestionsByDifficulty(Questionaire, "Difficile");
  Difficile = getRandomQuestions(Theme, Difficile, nbD);
  Quizz.push(...Difficile);

  // Shuffle all questions
  const shuffledQuizz = shuffle(Quizz);

  // Transform to match expected format
  return shuffledQuizz.map(question => ({
    id: question.id,
    intitule: question.intitule,
    listeReponses: question.Reponses,
    bonneReponse: question.BonneReponse,
    difficulte: {
      titre: question.Difficulte,
      nbrPoints: getPointsForDifficulty(question.Difficulte),
      chrono: questionChronos[question.Difficulte] || questionChronos.Facile
    },
    theme: Theme
  }));
}

//---Functions---
//
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  let shuffled = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled;
}

function getQuestionsByDifficulty(data, difficulty) {
  return data.filter((q) => q.Difficulte === difficulty);
}

function getRandomQuestions(Theme, listeQuestions, nbQuestions) {
  let newListeQuestions = Array();
  let counterQuestion = 0;
  let usedIds = new Set();
  
  // Shuffle the list first to get random selection
  const shuffledList = shuffle([...listeQuestions]);
  
  while (counterQuestion < nbQuestions && shuffledList.length > 0) {
    const question = shuffledList.shift();
    
    if (!usedIds.has(question.id)) {
      // Shuffle the answers
      const shuffledReponses = shuffle([...question.Reponses]);
      
      newListeQuestions.push({
        id: question.id,
        intitule: question.Intitule,
        Reponses: shuffledReponses,
        BonneReponse: question.Bonne_Reponse,
        Difficulte: question.Difficulte,
        Theme: Theme
      });
      
      usedIds.add(question.id);
      counterQuestion++;
    }
  }
  return newListeQuestions;
}

function getPointsForDifficulty(difficulty) {
  switch (difficulty) {
    case "Facile":
      return 10;
    case "Moyen":
      return 20;
    case "Difficile":
      return 30;
    default:
      return 10;
  }
}

function getThemeQuestionnaire(Theme) {
  switch (Theme) {
    case "ANGLAIS":
      return Questionaire_Anglais;
    case "ART":
      return Questionaire_Art;
    case "CINEMA":
      return Questionaire_Cinema;
    case "FRANCAIS":
      return Questionaire_Francais;
    case "GEOGRAPHIE":
      return Questionaire_Geographie;
    case "HISTOIRE":
      return Questionaire_Histoire;
    case "JEUXVIDEO":
      return Questionaire_JeuxVideo;
    case "LITTERATURE":
      return Questionaire_Litterature;
    case "MATHEMATIQUE":
      return Questionaire_Mathematique;
    case "MUSIQUE":
      return Questionaire_Musique;
    case "SCIENCE":
      return Questionaire_Science;
    case "SPORT":
      return Questionaire_Sport;
    default: // (Error)
      return Questionaire_JeuxVideo;
  }
}
