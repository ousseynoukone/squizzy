import { Question } from "../objects/Question.js";
import Questionaire from "../../data/Squizzy_Questions_JeuxVideo.json";

let questionTest;

const Theme = {
  GEOGRAPHIE: "GEOGRAPHIE",
  HISTOIRE: "HISTOIRE",
  JEUXVIDEO: "JEUXVIDEO",
};

//CreateQuizz(Theme.JEUXVIDEO, 0, 10);

export default function CreateQuizz(nbQuestions) {
  const Quizz = Array();
  let counterQuestion = 0;
  while (counterQuestion < nbQuestions) {
    let idQ = randomInteger(0, 24);
    let ReponsesListe = Questionaire[idQ]["Reponses"];

    questionTest = new Question(
      Questionaire[idQ]["ID_Question"],
      Questionaire[idQ]["Intitule"],
      shuffle(ReponsesListe),
      Questionaire[idQ]["Bonne_Reponse"],
      Questionaire[idQ]["Difficulte"],
      Theme.JEUXVIDEO
    );

    if (!Quizz.find((o) => o.id === questionTest.id)) {
      counterQuestion++;
      Quizz.push(questionTest);
    }
  }
  console.log(Quizz);
}

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
