import { Question } from "../objects/Question.js";
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

let questionTest;

export default function CreateQuizz(Theme, difficulte, nbQuestions) {
  let Questionaire = getThemeQuestionnaire(Theme);
  let nbQ = nbQuestions; //Pas utilisé pour le moment
  let nbF;
  let nbM;
  let nbD;

  switch (difficulte) {
    case 1: //Moyen
      nbF = 4;
      nbM = 4;
      nbD = 2;
      break;
    case 2: //Difficile
      nbF = 2;
      nbM = 4;
      nbD = 4;
      break;
    default: //Facile
      nbF = 7;
      nbM = 2;
      nbD = 1;
      break;
  }

  const Quizz = Array();
  let Facile = Array();
  let Moyen = Array();
  let Difficile = Array();

  Facile = getQuestionsByDifficulty(Questionaire, "Facile");
  console.log(Facile);
  Facile = getRandomQuestions(Theme, Facile, nbF);
  Quizz.push(...Facile);

  Moyen = getQuestionsByDifficulty(Questionaire, "Moyen");
  console.log(Moyen);
  Moyen = getRandomQuestions(Theme, Moyen, nbM);
  Quizz.push(...Moyen);

  Difficile = getQuestionsByDifficulty(Questionaire, "Difficile");
  console.log(Difficile);
  Difficile = getRandomQuestions(Theme, Difficile, nbD);
  Quizz.push(...Difficile);

  console.log(Quizz);
  //return Quizz; //Utilise ça pour récupérer le Quizz
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
  while (counterQuestion < nbQuestions) {
    let idQ = randomInteger(0, listeQuestions.length - 1);
    let ReponsesListe = listeQuestions[idQ]["Reponses"];

    questionTest = new Question(
      listeQuestions[idQ]["id"],
      listeQuestions[idQ]["Intitule"],
      shuffle(ReponsesListe),
      listeQuestions[idQ]["Bonne_Reponse"],
      listeQuestions[idQ]["Difficulte"],
      Theme
    );

    if (!newListeQuestions.find((o) => o.id === questionTest.id)) {
      counterQuestion++;
      newListeQuestions.push(questionTest);
    }
  }
  return newListeQuestions;
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
