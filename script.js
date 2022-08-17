// function to get player's selection //
function getPlayerSelection() {
    let playerSelection = prompt('What do you choose? Rock, Paper, or Scissors?').toLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
    return playerSelection;
    };
}

// function to get computer's choice //
function getComputerChoice() {  
    let choice = ['rock', 'paper', 'scissors'];
    let computerSelection = choice[Math.floor(Math.random() * 3)];
    return computerSelection;
}

// function to play round //

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lost. Paper covers rock.';  
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lost. Scissors cut paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lost. Rock breaks scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Won! Paper covers rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Won! Scissors cut paper.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Won! Rock breaks scissors.';
    } else if (playerSelection === computerSelection) {
        return 'It is a draw.';
    } else {
        return 'Invalid Choice';
    };
}

// function to play a 5 round game //

let playerScore = parseInt(0);
let computerScore = parseInt(0);

function game(playerScore, computerScore) {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your score is " + playerScore);
        console.log("The computer's score is " + computerScore);
        if (playerScore < computerScore){
            return "You lose";
        }
        else if (playerScore > computerScore) {
            return "You win!";
        }
        else {
            return "It is a draw.";
        }
    }
}

const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
console.log(game(playerScore, computerScore));