 console.log('hello world!')

        //returns R,P, or S at random
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

        //let playerSelection = 'rOck';

        //play a single round
        function rpsRound() {
            //pulling the random choice from the computer
            const computerSelection = computerPlay();
            //using a window prompt to get a choice from the user - making it lowercase
            let playerSelection = prompt('Rock, Paper or Scissors?');
            playerSelection=playerSelection.toLowerCase();
            
            
            if (playerSelection === 'scissors' && computerSelection === 'paper' ||
                playerSelection === 'rock' && computerSelection === 'scissors' ||
                playerSelection === 'paper' && computerSelection === 'rock') {
                alert(`You win! ${playerSelection} beats ${computerSelection}!`);
                return 'win';
            } else if (computerSelection === playerSelection) {
                alert(`Try again! You both picked ${playerSelection}!`);
                return 'draw';
            } else {
                alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
                return 'loss';
            }
        }

        //FIVE ROUND GAME
        function game() {
            let playerScore = 0;
            let computerScore = 0;
            
            //loop to play five rounds
            for (i = 0; i<5; i++){
    
            //what happens in each round 
            let gameOne = rpsRound();
            
            switch (gameOne) {
                case 'loss':
                    alert(`The score is now player:${playerScore} computer:${computerScore=computerScore+1}`)
                    break;
                case 'win':
                    alert(`The score is now player:${playerScore = playerScore+1} to computer:${computerScore}.`);
                    break;
                case 'draw':
                    alert(`The score stays player:${playerScore} to computer:${computerScore}.`)
                    break;
                default:
                    alert(`Sorry, something went wrong.`);
            }
            }
            
            
            //after the five rounds, who is the winner?
            if (playerScore > computerScore){
                alert ('Congratulations! Human player wins!')
            }else if (computerScore > playerScore){
                return ('Bummer! You lost to the computer.')
            }else {
              let tieBreak =  rpsRound();
                switch (tieBreak) {
                case 'loss':
                    alert(`The computer won the tiebreaker!`)
                    break;
                case 'win':
                    alert(`You won the tiebreaker!`);
                    break;
                case 'draw':
                    alert(`the game is STILL tied! Play five more rounds.`)
                    break;
                default:
                    alert(`Sorry, something went wrong.`);
            }
                
            }



        }
