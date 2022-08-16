// function to get player's selection //

let playerSelection = prompt('What do you choose? Rock, Paper, or Scissors?');

if (playerSelection === 'rock' || playerSelection === 'scissors' || playerSelection === 'paper') {
console.log("You chose " + playerSelection);
} else {
console.log('Invalid choice');
};

// function to get computer's choice //

let choice = ['rock', 'paper', 'scissors'];
let compSelection = choice[Math.floor(Math.random() * 3)];

console.log("Computer chooses " + compSelection);


// function to decide winner //
 
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
};

// function to play the game //
//function playTheGame() {
   // const playerSelection = getPlayerSelection();
    //const compSelection = getComputerChoice();
   // console.log('You chose ' + playerSelection);
  //  console.log('The computer chose: ' + compSelection);
  //  console.log(getWinner(playerSelection, compSelection));
//} 

