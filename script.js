// function to get player's selection //
const getPlayerSelection = userInput => {
    userInput = userInput.toLowerCase();
    // to make sure input is valid //
    if (userInput === 'rock' || 'scissors' || 'paper') {
      return userInput;
    } else {
      console.log('Invalid');
    } 
};

// function to get computer's choice //
const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let compSelection = choice[Math.floor(Math.random() * 3)];
    console.log('Computer Selection: ' + compSelection);
};

// function to decide winner //
const winner = getWinner(playerSelection, compSelection);
 
function getWinner(playerSelection, compSelection) {
    if (playerSelection === 'rock' && compSelection === 'paper') {
        console.log('You Lost. Paper covers Rock.');  
    } else if (playerSelection === 'paper' && compSelection === 'scissors') {
        console.log('You Lost. Scissors cut Paper.');
    } else if (playerSelection === 'scissors' && compSelection === 'rock') {
        console.log('You Lost. Rock breaks Scissors.');
    } else if (playerSelection === 'paper' && compSelection === 'rock') {
        console.log('You Won! Paper covers Rock.');
    } else if (playerSelection === 'scissors' && compSelection === 'paper') {
        console.log('You Won! Scissors cut Paper.');
    } else if (playerSelection === 'rock' && compSelection === 'scissors') {
        console.log('You Won! Rock breaks Scissors.');
    } else {
        console.log('It is a draw');
    }
};

// function to play the game //
function playTheGame(rps) {
    const playerSelection = getPlayerSelection(rps);
    const compSelection = getComputerChoice();
    console.log('You chose ' + playerSelection);
    console.log('The computer chose: ' + compSelection);
    console.log(winner(playerSelection, compSelection));
} 

