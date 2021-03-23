import { flashcardsList } from "../data/flashcardsList";

const flashcardCover = document.querySelector(".learning__flashcard");
const flashcardFront = document.querySelector(".flashcard--front");
const flashcardBack = document.querySelector(".flashcard--back");
const reverseButton = document.querySelector(".flashcard__button--reverse");
const nextButton = document.querySelector(".flashcard__button--next");

const chooseSection = document.querySelector(".choose");
const homeButton = document.querySelector(".home__button");

const learningSection = document.querySelector(".learning");
const chooseButtonPolish = document.querySelector(".choose__button--polish");
const chooseButtonGerman = document.querySelector(".choose__button--german");
const chooseButtonPhrases = document.querySelector(".choose__button--phrases");

const checkButton = document.querySelector(".flashcard__button--check");
const inputForm = document.querySelector(".learning__answer");
const learningForm = document.querySelector(".learning__form");

//Get first flashcard
let randomWord =
  flashcardsList[Math.floor(Math.random() * flashcardsList.length)];

let section;

const language = {
  POLISH: "polish",
  GERMAN: "german",
  PHRASES: "phrases",
};

//Displaying Choose Section on click 'Ucz się' button
const displayChooseSection = () => (chooseSection.style.display = "flex");

homeButton.addEventListener("click", displayChooseSection);

//Displaying Learning Section with Polish-German Flashcards on click 'Start' button
const displayPolishSection = () => {
  learningSection.style.display = "grid";
  flashcardFront.textContent = randomWord.polish;
  flashcardBack.textContent = randomWord.german;
  section = language.POLISH;
};

chooseButtonPolish.addEventListener("click", displayPolishSection);

//Displaying Learning Section with Polish-German Flashcards on click 'Start' button
const displayGermanSection = () => {
  learningSection.style.display = "grid";
  flashcardFront.textContent = randomWord.german;
  flashcardBack.textContent = randomWord.polish;
  section = language.GERMAN;
};

chooseButtonGerman.addEventListener("click", displayGermanSection);

//Fliping flash card
const flipCard = () => {
  flashcardCover.classList.toggle("is-flipped");
};

reverseButton.addEventListener("click", flipCard);

//New flashcard
const newWord = () => {
  randomWord =
    flashcardsList[Math.floor(Math.random() * flashcardsList.length)];

  //checking chosen section
  switch (section) {
    case language.POLISH:
      flashcardFront.textContent = randomWord.polish;
      flashcardBack.textContent = randomWord.german;
      break;
    case language.GERMAN:
      flashcardFront.textContent = randomWord.german;
      flashcardBack.textContent = randomWord.polish;
      break;
    case language.PHRASES:
      flashcardFront.textContent = randomWord.german;
      flashcardBack.textContent = randomWord.polish;
    default:
      flashcardFront.textContent = randomWord.polish;
      flashcardBack.textContent = randomWord.german;
  }

  inputForm.style.color = "white";
  document.getElementById("card-answer").value = "";
};

const nextFlashcard = () => {
  if (flashcardCover.classList.contains("is-flipped")) {
    flashcardCover.classList.toggle("is-flipped");
    setTimeout(newWord, 300);
  } else newWord();
};

nextButton.addEventListener("click", nextFlashcard);

const checkAnswer = (event) => {
  event.preventDefault();
  const userAnswer = document.getElementById("card-answer").value;
  const correctAnswer = flashcardBack.textContent;
  if (userAnswer !== correctAnswer) inputForm.style.color = "red";
  else {
    inputForm.style.color = "green";
    flipCard();
  }
};

const checkAnswerOnEnter = (event) => {
  
  if (event.key == "Enter") {
    event.preventDefault();
    const userAnswer = document.getElementById("card-answer").value;
    const correctAnswer = flashcardBack.textContent;
    if (userAnswer !== correctAnswer) inputForm.style.color = "red";
    else {
      inputForm.style.color = "green";
      flipCard();
    }
  }
};

checkButton.addEventListener("click", checkAnswer);

inputForm.addEventListener("keypress", checkAnswerOnEnter, false);
