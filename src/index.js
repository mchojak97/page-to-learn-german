import {flashcardsList} from '../data/flashcardsList'

let randomWord = flashcardsList[Math.floor(Math.random() * flashcardsList.length)]

const flashcardCover = document.querySelector('.learning__flashcard')
const flashcardFront = document.querySelector('.flashcard--front')
const flashcardBack = document.querySelector('.flashcard--back')
const reverseButton = document.querySelector('.flashcard__button--reverse')

const flipCard = () => {
    flashcardCover.classList.toggle('is-flipped')
    console.log(randomWord)
}

flashcardFront.textContent = randomWord.polish
flashcardBack.textContent = randomWord.german

reverseButton.addEventListener('click', flipCard)