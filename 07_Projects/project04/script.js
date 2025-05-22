let randomNumber = Math.floor(Math.random()*100) + 1
// console.log(Math.floor(Math.random()*100) + 1); 
let attempts = 10;
let guessedNumbers = [];

const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");

const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
let guessedNumbersDisplay = document.getElementById("gussedNumbers");
const restartButton = document.getElementById("restart");

// work on user input

submitGuess.addEventListener('click', handleGuess);
restartButton.addEventListener('click', resetGame);

function handleGuess(){
     const guess = parseInt(guessInput.value);
     console.log(guess);
     
     // checks entered number 1 to 100
     if(isNaN(guess) || guess < 1 || guess > 100 ){
        message.textContent = 'Please enter a number between 1 to 100';
        return;
     }

     // check number is already guessed by the user
     if(guessedNumbers.includes(guess)){
         message.textContent = 'You already guessed that number!';
         return;
     }

     // add number in the array and decrease attempts
     guessedNumbers.push(guess);
     console.log(guessedNumbers)
     attempts--;

     // condition to check guess and random number 

     if(guess === randomNumber){
        message.textContent = `Correct the number was ${randomNumber}`;
        endGame();
     }else if(attempts ===  0){
        message.textContent = `Game Over ! The number was ${randomNumber}`;
        endGame();
     }else{
        message.textContent = guess < randomNumber ? "Too Low !" : "Too High !";
     }

     updateDisplay();
     guessInput.value = '';

}

function updateDisplay(){
     attemptsDisplay.textContent = `Attempts Left ${attempts}`;
     guessedNumbersDisplay.textContent = `Guessed numbers: ${guessedNumbers.join(', ') || 'None'}`;
}

function endGame(){
     submitGuess.disabled = true;
     guessInput.disabled = true;
     restartButton.style.display = 'inline-block';
}

function resetGame(){
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 10;
        guessedNumbers = [];
        submitGuess.disabled = false;
        guessInput.disabled = false;
        restartButton.style.display = 'none';
        guessInput.value = '';
        message.textContent = '';
        updateDisplay(); 
}