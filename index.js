// Adding variables to store our data
let random_number = Math.floor(Math.random() * 100) + 1;

const guessList = document.querySelector('.guess-list');
const lastResult = document.querySelector('.last-result');
const lowOrHi = document.querySelector('.low-or-hi');

const guessSubmit = document.querySelector('.inputfield')
const guessField = document.querySelector('.guess-submit')

let guess_count = 1
let reset_button

// Functions
function checkGuess(){

  /* =============================
  1. Printing prvious guesses
  ================================ */

  const userGuess = Number(guessField.value)
  if (guess_count===1){
    guessList.textContent = 'Previous guesses:'
  }
  guessList.textContent += userGuess ','

  /* =============================
2. Check if user guessed right
================================ */

if (userGuess === random_number) {
  lastResult.textContent = "Wow. You are doing well"
  lastResult.style.backgroundColor = 'lime';
  lowOrHi.textContent = '';
  setGameOver()
}


else if (guess_count===10) {
  lastResult.textContent = "This Game Is Over!!!!!!!!!!!!!!!!"
  lastResult.style.backgroundColor = 'wine';
  lowOrHi.textContent = '';
  setGameOver()
}

else {
  lastResult.textContent = "Oops.... You are wrong"
  lastResult.style.backgroundColor = 'amber';
  if (userGuess < random_number) {
     lowOrHi.textContent = 'Your last guess was too low. Please try again';
    }
  }

else if (userGuess > random_number) {
  lowOrHi.textContent = 'Your last guess was too high. Please try again';
}

console.log(guess_count);

/* =============================
  3. Check if user have exhusted the
  guess count
  ================================ */


  /*================================
  4. Let the user know when they
  guess wrong. Give the user hint
  if the guess was too low
  or too high.
  ================================ */

/* =============================
  5. Increase counter, reset and
  make input focus.
  ================================ */

  guess_count++
  guessField.value = '';
  guessField.focus()

}
guessSubmit.addEventListener('click', checkGuess);
// checkGuess();

/* =============================
  6. disable the input guessField
  write gameover and
  call the reset game function
  ================================ */
  function setGameOver() {
    guessField.disabled = true
    guessSubmit.disabled = true

    reset_button = document.createElement('button')
    reset_button.textContent = "Start new game"

    document.querySelector(".game").append(reset_button)
    reset_button.addEventListener('click' , resetGame)

  }

  /* =============================
    7. Reset game function
    ================================ */
function resetGame() {
  guess_count = 1;

  const resetParas = document.querySelectorAll('.result-paras p');
  console.log(resetParas);

  for (const resetPara of resetParas) {
    resetPara.textContent = ''
  }

// remove the reset_button
reset_button.parentNode.removeChild(reset_button);

// enable input guessSubmit and guessField
guessField.disabled = false
guessSubmit.disabled = false
guessField.value = ''
guessField.focus();

lastResult.style.backgroundColor = 'gold'

randomNumber = Math.floor(Math.random() * 100) + 1;
}



// resetGame()
//
//
// setGameOver()
