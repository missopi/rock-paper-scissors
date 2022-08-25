
// button click actions getPlayerSelection function
document.getElementById('rock').onclick = getPlayerSelection;
document.getElementById('paper').onclick = getPlayerSelection;
document.getElementById('scissors').onclick = getPlayerSelection;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        ;
    });
});


// function to get player's  and computer's selection
function getPlayerSelection() {
    let playerSelection = this.id;
    console.log(playerSelection);
    let choice = ['rock', 'paper', 'scissors'];
    let computerSelection = choice[Math.floor(Math.random() * 3)];
    console.log(computerSelection);
    document.getElementById('computerSelection').textContent = 
    'The computer chose: ' + computerSelection;  // display computer's choice on page
}

let playerScore = 0;
let computerScore = 0;

// function to play round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        return "You Lost. Paper covers rock. Your score = " + playerScore + ". The computer's score = " + computerScore;  
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        return "You Lost. Scissors cut paper. Your score = " + playerScore + ". The computer's score = " + computerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        return "You Lost. Rock breaks scissors. Your score = " + playerScore + ". The computer's score = " + computerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return "You Won! Paper covers rock. Your score = " + playerScore + ". The computer's score = " + computerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return "You Won! Scissors cut paper. Your score = " + playerScore + ". The computer's score = " + computerScore;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return "You Won! Rock breaks scissors. Your score = " + playerScore + ". The computer's score = " + computerScore;
    } else if (playerSelection === computerSelection) {
        return "It is a draw. Your score = " + playerScore + ". The computer's score = " + computerScore;
    } else {
        return "Invalid Choice";
    };
}

// function to play a 5 round game 
//function game() {
//    for (let i = 0; i < 5; i++) {
//        let playerScore = 0;
//        let computerScore = 0;
//        let playerSelection = getPlayerSelection();
//        console.log(playerSelection);
//        let computerSelection = getComputerChoice();
//        console.log(computerSelection);
//        let result = playRound(playerSelection, computerSelection);
//        console.log(result);
        
//        if (result === "You Lost. Paper covers rock. Your score = " + playerScore + ". The computer's score = " + computerScore || 
//        result === "You Lost. Scissors cut paper. Your score = " + playerScore + ". The computer's score = " + computerScore || 
//        result === "You Lost. Rock breaks scissors. Your score = " + playerScore + ". The computer's score = " + computerScore) {
//            computerScore + 1;
//        }
//        else if (result === "You Won! Paper covers rock. Your score = " + playerScore + ". The computer's score = " + computerScore || 
//        result === "You Won! Scissors cut paper. Your score = " + playerScore + ". The computer's score = " + computerScore || 
//        result === "You Won! Rock breaks scissors. Your score = " + playerScore + ". The computer's score = " + computerScore) {
//            playerScore + 1;
//        }
//    }
//    if (playerScore < computerScore){
//        return "You lose. Your score = " + playerScore + ". The computer's score = " + computerScore;
//    }
//    else if (playerScore > computerScore) {
//        return "You win! Your score = " + playerScore + ". The computer's score = " + computerScore;
//    }
//    else {
//        return "It is a draw. Your score = " + playerScore + ". The computer's score = " + computerScore;
//    }
//}

//console.log(game());