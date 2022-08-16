// function to get player's selection //
function getPlayerSelection() {
    let playerSelection = prompt('What do you choose? Rock, Paper, or Scissors?').toLocaleLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'scissors' || playerSelection === 'paper') {
    return playerSelection;
    } else {
    return "Invalid choice";
    }
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
    console.log('You Lost. Paper covers Rock.');  
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lost. Scissors cut Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lost. Rock breaks Scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Won! Paper covers Rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Won! Scissors cut Paper.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Won! Rock breaks Scissors.';
    } else if (playerSelection === computerSelection) {
        return 'It is a draw';
    } else {
        return 'no match';
    }; 
}

const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));