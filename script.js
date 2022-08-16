
// function to get computer's choice //
function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    console.log('Computer Choice: ' + compChoice);
    var rps;
    // switch integer value to either rock, paper or scissors //
    switch (compChoice) {
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