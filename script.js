
// function for effects on rock button
function playSound(e){
    const audio = document.querySelector(`audio[id="audioRock"]`);
    const button = document.querySelector(`.button[id="rock"]`);
    if (!audio) return; // stops function
    audio.currentTime = 0; // rewind to the start
    audio.play();
    button.classList.add('buttonPress');
};
// function for effect on paper button
function playSound2(e){
    const audio = document.querySelector(`audio[id="audioPaper"]`);
    const button = document.querySelector(`.button[id="paper"]`);
    if (!audio) return; // stops function
    audio.currentTime = 0; // rewind to the start
    audio.play();
    button.classList.add('buttonPress');
};
// function for effect on scissors button
function playSound3(e){
    const audio = document.querySelector(`audio[id="audioScissors"]`);
    const button = document.querySelector(`.button[id="scissors"]`);
    if (!audio) return; // stops function
    audio.currentTime = 0; // rewind to the start
    audio.play();
    button.classList.add('buttonPress');
};
// function to end effect on buttons
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if not a transform
    this.classList.remove('buttonPress');
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));


document.getElementById('rock').addEventListener ('click', playSound);
document.getElementById('rock').addEventListener ('click', playRound);

document.getElementById('paper').addEventListener ('click', playSound2);
document.getElementById('paper').addEventListener ('click', playRound);

document.getElementById('scissors').addEventListener ('click', playSound3);
document.getElementById('scissors').addEventListener ('click', playRound);

let playerScore = 0;
let computerScore = 0;
let finish = ["You Lost", "You Won!", "It's a draw.","Invalid Choice"];

// function to play round
function playRound() {
    let result = "";
    let playerSelection = this.id;
    console.log(playerSelection);
    let choice = ['rock', 'paper', 'scissors'];
    let computerSelection = choice[Math.floor(Math.random() * 3)];
    console.log(computerSelection);
    document.getElementById('computerSelection').textContent = 
    'The computer chose: ' + computerSelection;  // display computer's choice on page
    
    if (playerSelection === 'rock' && computerSelection === 'paper' || 
    playerSelection === 'paper' && computerSelection === 'scissors' || 
    playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        result = finish[0];
    } else if (playerSelection === 'paper' && computerSelection === 'rock' || 
    playerSelection === 'scissors' && computerSelection === 'paper' || 
    playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        result = finish[1];
    } else if (playerSelection === computerSelection) {
        result = finish[2];
    } else {
        result = finish[3];
    };
};

// function to play a 5 round game 
function game() {
    console.log(result);
    for (let i = 0; i < 5; i++) {
        let playerScore = 0;
        let computerScore = 0;
        
        if (result === finish[0]) {
            computerScore + 1;
        }
        else if (result === finish[1]) {
            playerScore + 1;
        }
    }
    if (playerScore < computerScore){
        document.getElementById('playerScore').textContent = "Your score = " + playerScore + " The computer's score = " + computerScore;
    }
    else if (playerScore > computerScore) {
        document.getElementById('playerScore').textContent = "Your score = " + playerScore + " The computer's score = " + computerScore;
    }
    else {
        document.getElementById('playerScore').textContent = "Your score = " + playerScore + " The computer's score = " + computerScore;
    }
    if (playerScore === 5) {
        document.getElementById('winnerPlay').textContent = "YOU WIN!";
    }
    else if (computerScore === 5){
        document.getElementById('winnerComp').textContent = "THE COMPUTER WINS";
    }
    
};

document.getElementById('rock').addEventListener ('click', game);
document.getElementById('paper').addEventListener ('click', game);
document.getElementById('scissors').addEventListener ('click', game);