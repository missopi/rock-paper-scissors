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
        let playerSelection = getPlayerSelection();
        console.log(playerSelection);
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (playerScore === 1) {
            playerScore += 1;
            computerScore += 0;
        } 
        else if (computerScore === 1) {
            computerScore += 1;
            playerScore += 0;
        }
        else {
            computerScore && playerScore === 0;
        }
        console.log("Player's score = " + playerScore);
        console.log("Computer's score = " + computerScore);
    
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