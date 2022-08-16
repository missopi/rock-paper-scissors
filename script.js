// function to get player's selection//
const getPlayerSelction = userInput => {
    userInput = userInput.toLowerCase();
    // to make sure input is valid
    if (userInput === 'rock' || 'scissors' || 'paper') {
      return userInput;
    } else {
      console.log('Invalid');
    } 
};

// function to get computer's choice //
function getComputerChoice() {
    let compSelection = Math.floor(Math.random() * 3);
    console.log('Computer Selection: ' + compSelection);
    var rps;
    // switch integer value to either rock, paper or scissors //
    switch (compSelection) {
      case 0:
        rps = 'Rock';
        break;
      case 1:
        rps = 'Paper';
        break;
      case 2:
        rps = 'Scissors';
        break;
      default:
        console.log('Invalid');
        break;
    } 
    return rps;
};

// function to decide winner //
const getWinner = (playerSelection, compSelection) => {
    if (playerSelection === compSelection) {
        return 'This game is a draw';
    }
    if (playerSelection === 'Rock') {
        if (compSelection === 'Paper') {
          return 'You Lost! Paper beats Rock';
        } else {
          return "You Won!"
        }
    }
    if (playerSelection === 'Paper') {
        if (compSelection === 'Scissors') {
          return 'You Lost! Scissors beat Paper';
        } else {
          return 'You won!';
        }
    } 
    if (playerSelection === 'Scissors') {
        if (compSelection === 'Rock') {
          return 'You Lost! Rock beats Scissors';
        } else {
          return 'You won!';
        }
    } 
};
