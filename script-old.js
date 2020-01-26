let possibleChoices = ["rock", "paper", "scissors"];

game();

function game() {

    let playerWins = 0;
    let computerWins = 0;

    let count = 0
    while (count < 5) {

        //player chooses
        let playerSelection = prompt("Rock, Paper or Scissors?");

        //computer chooses (random)
        let computerSelection = computerPlay();

        if (playRound(playerSelection, computerSelection) == 0 ) {
            console.log("Tie");            
        } else if (playRound(playerSelection, computerSelection) == 1 ) {
            console.log("You win! " + playerSelection + " beats " + computerSelection);
            playerWins++;
            count++;
        } else {
            console.log("You lose! " + computerSelection + " beats " + playerSelection);
            computerWins++;
            count++;
        }        
        
    }
    console.log("You scored " + playerWins);
    console.log("Computer scored " + computerWins);
}

function computerPlay() {
    let choice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    return choice;
}

//play 1 round, returns 0 for tie, 1 for player win, 2 for computer win
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return 0;
    }
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "paper"){
            return 2;
        } else {
            return 1;
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "scissors"){
            return 2;
        } else {
            return 1;
        }
    } else {
        if (computerSelection.toLowerCase() == "rock"){
            return 2;
        } else {
            return 1;
        }
    }
}

