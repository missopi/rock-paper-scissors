
// function for effects on rock button
function playSound(e){
    const audio = document.querySelector(`audio[id="audioRock"]`);
    if (!audio) return; // stops function
    audio.currentTime = 0; // rewind to the start
    audio.play();
};
// function for effect on paper button
function playSound2(e){
    const audio = document.querySelector(`audio[id="audioPaper"]`);
    if (!audio) return; // stops function
    audio.currentTime = 0; // rewind to the start
    audio.play();
};
// function for effect on scissors button
function playSound3(e){
    const audio = document.querySelector(`audio[id="audioScissors"]`);
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
    if (playerScore === 0 && computerScore === 0) {
        document.getElementById('winnerPlay').textContent = "";
        document.getElementById('winnerComp').textContent = "";
    };

    let result = "";
    let playerSelection = this.id;
    console.log(playerSelection);
    let choice = ['rock', 'paper', 'scissors'];
    let computerSelection = choice[Math.floor(Math.random() * 3)];
    console.log(computerSelection);
    document.getElementById('computerSelection').textContent = 
    'The computer chose: ' + computerSelection;  // display computer's choice on page
    
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        result = finish[0];
        const button = document.querySelector(`.button[id="rock"]`);
        button.classList.add('buttonPressRed');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        result = finish[0];
        const button = document.querySelector(`.button[id="paper"]`);
        button.classList.add('buttonPressRed');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        result = finish[0];
        const button = document.querySelector(`.button[id="scissors"]`);
        button.classList.add('buttonPressRed');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        result = finish[1];
        const button = document.querySelector(`.button[id="paper"]`);
        button.classList.add('buttonPress');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        result = finish[1];
        const button = document.querySelector(`.button[id="scissors"]`);
        button.classList.add('buttonPress');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        result = finish[1];
        const button = document.querySelector(`.button[id="rock"]`);
        button.classList.add('buttonPress');
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        result = finish[2];
        const button = document.querySelector(`.button[id="rock"]`);
        button.classList.add('buttonPressYellow');
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        result = finish[2];
        const button = document.querySelector(`.button[id="paper"]`);
        button.classList.add('buttonPressYellow');
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        result = finish[2];
        const button = document.querySelector(`.button[id="scissors"]`);
        button.classList.add('buttonPressYellow');
    } else {
        result = finish[3];
    };
};

// function to play a 5 round game 
function game() {
    console.log(result);
    document.getElementById('playerScore').textContent = "Your score = " + playerScore + " The computer's score = " + computerScore;
    
    if (playerScore === 5) {
        document.getElementById('winnerPlay').textContent = "YOU WIN!";
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5){
        document.getElementById('winnerComp').textContent = "THE COMPUTER WINS";
        playerScore = 0;
        computerScore = 0;
    }
    
};

document.getElementById('rock').addEventListener ('click', game);
document.getElementById('paper').addEventListener ('click', game);
document.getElementById('scissors').addEventListener ('click', game);