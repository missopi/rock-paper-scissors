
// function for effects on rock button
function playSound(e){
    const audio = document.querySelector(`audio[data-button="${e.currentTarget.id}"]`);
    if (!audio) return; // stops function
    audio.currentTime = 0; // rewind to the start
    audio.play();
};

// function to end effect on buttons
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if not a transform
    this.classList.remove('buttonPress');
    this.classList.remove('buttonPressRed');
    this.classList.remove('buttonPressYellow');
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
window.addEventListener('click', playSound)

let playerScore = 0;
let computerScore = 0;

function playRound(e) {
    // checks score is 0 each then remove winner announcement on page
    if (playerScore === 0 && computerScore === 0) {
        document.getElementById('winnerPlay').textContent = "";
        document.getElementById('winnerComp').textContent = "";
    };

    let result = "";
    let playerSelection = this.id;
    let choice = ['rock', 'paper', 'scissors'];
    let computerSelection = choice[Math.floor(Math.random() * 3)];
    document.getElementById('computerSelection').textContent = 
    'The computer chose: ' + computerSelection;  // display computer's choice on page
    const button = document.querySelector(`.button[data-button="${e.currentTarget.id}"]`);
    
    if (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        button.classList.add('buttonPressRed');
    } else if (playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        button.classList.add('buttonPress');
    } else if (playerSelection === computerSelection) {
        button.classList.add('buttonPressYellow');
    } else {
        result = finish[3];
    };
};

// function to play a 5 round game 
function game() {
    document.getElementById('playerScore').textContent = "Your score = " + playerScore + " The computer's score = " + computerScore;
    
    if (playerScore === 5) {
        document.getElementById('winnerPlay').textContent = "YOU WIN!";
        // tells the game to revert back to 0 score at beginning
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5){
        document.getElementById('winnerComp').textContent = "THE COMPUTER WINS";
        playerScore = 0;
        computerScore = 0;
    } 
};

document.getElementById('rock').addEventListener ('click', playSound);
document.getElementById('paper').addEventListener ('click', playSound);
document.getElementById('scissors').addEventListener ('click', playSound);

document.getElementById('rock').addEventListener ('click', playRound);
document.getElementById('paper').addEventListener ('click', playRound);
document.getElementById('scissors').addEventListener ('click', playRound);

document.getElementById('rock').addEventListener ('click', game);
document.getElementById('paper').addEventListener ('click', game);
document.getElementById('scissors').addEventListener ('click', game);