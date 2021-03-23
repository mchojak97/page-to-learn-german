import { flashcardsList } from "../data/flashcardsList";

let randomWord =
  flashcardsList[Math.floor(Math.random() * flashcardsList.length)];

const flashcardCover = document.querySelector(".learning__flashcard");
const flashcardFront = document.querySelector(".flashcard--front");
const flashcardBack = document.querySelector(".flashcard--back");
const reverseButton = document.querySelector(".flashcard__button--reverse");
const nextButton = document.querySelector(".flashcard__button--next");

const chooseSection = document.querySelector(".choose");
const homeButton = document.querySelector(".home__button");

const learningSection = document.querySelector(".learning");
const chooseButton = document.querySelector(".choose__button");

const checkButton = document.querySelector(".flashcard__button--check");
const inputForm = document.querySelector(".learning__answer");
//Displaying Choose Section on click 'Ucz się' button
const displayChooseSection = () => (chooseSection.style.display = "flex");

homeButton.addEventListener("click", displayChooseSection);

//Displaying Learning Section on click 'Start' button
const displayLearningSection = () => (learningSection.style.display = "grid");

chooseButton.addEventListener("click", displayLearningSection);

//Fliping flash card
const flipCard = () => {
  flashcardCover.classList.toggle("is-flipped");
};

flashcardFront.textContent = randomWord.polish;
flashcardBack.textContent = randomWord.german;

reverseButton.addEventListener("click", flipCard);

//New flashcard
const newWord = () => {
  randomWord =
    flashcardsList[Math.floor(Math.random() * flashcardsList.length)];
  flashcardFront.textContent = randomWord.polish;
  flashcardBack.textContent = randomWord.german;
  inputForm.style.color = "white";
  document.getElementById("card-answer").value = ''
};

const nextFlashcard = () => {
  if (flashcardCover.classList.contains("is-flipped")) {
    flashcardCover.classList.toggle("is-flipped");
    setTimeout(newWord, 300);
  } else newWord();
};

nextButton.addEventListener("click", nextFlashcard);

const checkAnswer = () => {
  const userAnswer = document.getElementById("card-answer").value;
  const correctAnswer = flashcardBack.textContent;
  if (userAnswer !== correctAnswer) inputForm.style.color = "red";
  else {
    inputForm.style.color = "green";
    flipCard();
  }
};

checkButton.addEventListener("click", checkAnswer);
