function computerPlay() {
    let choice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    return choice;
}

//play 1 round, returns 0 for tie, 1 for player win, 2 for computer win
function playRound(playerSelection, computerSelection) {

    computerChoice.textContent = "Computer chooses: " + computerSelection;

    if (playerSelection == computerSelection) {
        console.log("Tie");        
    } else {
        if (playerSelection == "rock") {
            if (computerSelection == "paper"){
                console.log("2");
                computerScore++;
            } else {
                console.log("1");
                playerScore++;
            }
        } else if (playerSelection == "paper") {
            if (computerSelection == "scissors"){
                console.log("2");
                computerScore++;
            } else {
                console.log("1");
                playerScore++;
            }
        } else {
            if (computerSelection == "rock"){
                console.log("2");
                computerScore++;
            } else {
                console.log("1");
                playerScore++;
            }
        }
    }
    playerScoreField.textContent = playerScore;
    computerScoreField.textContent = computerScore;    

    if (playerScore == 5) {
        finalResult.textContent = "You win!"
        buttonRock.removeEventListener('click');
        buttonPaper.removeEventListener('click');
        buttonScissors.removeEventListener('click');
    }
    if (computerScore == 5) {
        finalResult.textContent = "You lose!"
        buttonRock.removeEventListener('click');
        buttonPaper.removeEventListener('click');
        buttonScissors.removeEventListener('click');
    }
}

const possibleChoices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');

buttonRock.addEventListener('click', function () {
    playRound("rock", computerPlay());
});

buttonPaper.addEventListener('click', function () {
    playRound("paper", computerPlay());
});

buttonScissors.addEventListener('click', function () {
    playRound("scissors", computerPlay());
});

const playerScoreField = document.querySelector('#playerScore');
const computerScoreField = document.querySelector('#computerScore');
const finalResult = document.querySelector('#finalResult');
const computerChoice = document.querySelector('#computerChoice');





