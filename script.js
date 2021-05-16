//creating variables that refer to each button/scoreboard
const btnR = document.querySelector('.btn-roc');
const btnP = document.querySelector('.btn-pap');
const btnS = document.querySelector('.btn-scis');
const scoreBoard = document.querySelector('#scoreboard');
const roundUpdate = document.querySelector('#round-update');

//create a restart button to be appended to the scoreboard at the end the game
const btnRes = document.createElement('button');
btnRes.textContent ='Restart';

//click the button and rpsRound runs with the selected argument 
btnR.addEventListener('click', function () {
    rpsRound('rock')
})
btnP.addEventListener('click', function () {
    rpsRound('paper')
})
btnS.addEventListener('click', function () {
    rpsRound('scissors')
})

btnRes.addEventListener('click', restartGame)

//starting scores
let playerScore = 0;
let computerScore = 0;

//disableButtons when there is a winner
function disableButtons() {
    btnR.disabled = true;
    btnP.disabled = true;
    btnS.disabled = true;
    
}

//Restart game function for restart button
function restartGame() {
    location.reload()
}


//returns rock, paper, or scissors at random for computer input
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return 'rock';
    } else if (randomNum === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//play a single round - this isn't working - player isn't losing
function rpsRound(playerSelect) {
    //pulling the random choice from the computer
    const computerSelection = computerPlay();
    //using a window prompt to get a choice from the user - making it lowercase
    let playerSelection = playerSelect;


    if (playerSelection === 'scissors' &&
        computerSelection === 'paper' ||
        playerSelection === 'rock' &&
        computerSelection === 'scissors' ||
        playerSelection === 'paper' &&
        computerSelection === 'rock') {
        
        roundUpdate.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
        playerScore += 1;

    } else if (computerSelection === playerSelection) {
        roundUpdate.textContent = `Try again! You both picked ${playerSelection}!`;

    } else {
        roundUpdate.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
        computerScore += 1;
    }
    
    
    
    document.getElementById('player-score-update').textContent = `Your score: ${playerScore}`;
    document.getElementById('computer-score-update').textContent = `Computer score: ${computerScore}`
    
     if (playerScore === 5){
         roundUpdate.textContent ="You beat the computer!";
         disableButtons();
         scoreBoard.appendChild(btnRes);
         
    } else if(computerScore === 5){
        roundUpdate.textContent ="You lost to the computer!";
        disableButtons();
        scoreBoard.appendChild(btnRes);

    }
}

