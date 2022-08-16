// get player selection//

const getPlayerSelction = userInput => {
    userInput = userInput.toLowerCase();
    // to make sure input is valid
    if (userInput === 'rock' || 'scissors' || 'paper') {
      return userInput;
    } else {
      console.log('Invalid');
    } //end else
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
    } //end switch 
    return rps;
  }