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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection, playerScore, computerScore){
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        return 'You Lost. Paper covers rock. The computer scores one point';  
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        return 'You Lost. Scissors cut paper. The computer scores one point';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        return 'You Lost. Rock breaks scissors. The computer scores one point';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return 'You Won! Paper covers rock. You score one point';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return 'You Won! Scissors cut paper. You score one point';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return 'You Won! Rock breaks scissors. You score one point';
    } else if (playerSelection === computerSelection) {
        return 'It is a draw.';
    } else {
        return 'Invalid Choice';
    };
}

// function to play a 5 round game //

function game(playerScore, computerScore) {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerSelection();
        console.log(playerSelection);
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        let result = playRound(playerSelection, computerSelection, playerScore, computerScore);
        console.log(result);
        if (playerScore >= 1) {
            playerScore += 1;
        } 
        else if (computerScore >= 1) {
            computerScore += 1;
        }
        else {
            computerScore += 0;
            playerScore += 0;
        }
        console.log(playerScore);
        console.log(computerScore);
    
    }
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


console.log(game(playerScore, computerScore));