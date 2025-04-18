//declare variables in global scope
let computerScore = 0;
let humanScore = 0;

//get computer to return 'rock' 'paper' or 'scissors'
function getComputerChoice() {
    //use math.random and multiply by 3 to get a random integer that is either 0, 1, or 2
    let computerVar = Math.floor(Math.random() * 3);
    //assign 0 to rock
    if (computerVar === 0) {
        return 'rock';
    //assign 1 to paper
    } else if (computerVar === 1) {
        return 'paper';
    //assign 2 to scissors
    } else if (computerVar === 2) {
        return ('scissors')
    }
}

//create function getHumanChoice
function getHumanChoice() {
    //prompt user requesting what their choice is and store it in humanChoice
    let humanVar = prompt('rock, paper, scissors!');
    //convert humanVar to lowercase
    humanVar = humanVar.toLowerCase();
    return humanVar;
}

//create functions for incrementing score
function incrementHumanScore() {
    humanScore++;
}
function incrementComputerScore() {
    computerScore++;
}

//create function to play round
function playRound(computerChoice, humanChoice) {
    //compare computerChoice with humanChoice to see if human wins
    if ((computerChoice === 'rock' && humanChoice === 'paper') ||
    (computerChoice === 'paper' && humanChoice === 'scissors') ||
    (computerChoice === 'scissors' && humanChoice === 'rock')) {
        //if human wins, display victory message
        console.log(`You win: ${humanChoice} beats ${computerChoice}!`);
        //increment humanScore
        incrementHumanScore();
    //compare computerChoice with humanChoice to see if computer wins
    } else if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'paper' && humanChoice === 'rock') ||
    (computerChoice === 'scissors' && humanChoice === 'paper')) {
        //if computer wins, display defeat message
        console.log(`You lose: ${computerChoice} beats ${humanChoice}.`);
        //increment computerScore
        incrementComputerScore();
        //compare computerChoice with humanChoice to see if they are the same
    } else if (computerChoice === humanChoice) {
        //if it's tie, no one's score gets incremented; display tie message
        console.log(`It's a tie! You both chose ${computerChoice}.`);
        //if none of the above were true, then something went wrong - display error message
    } else {
        console.log('Something went wrong.')
    }
}

//create function playGame that will run playRound 5 times then compare score and declare a winner
function playGame() {
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    //if human score is higher, log a message saying the user won
    if (humanScore > computerScore) {
        console.log(`You win! You beat the computer ${humanScore} to ${computerScore}.`);
    //else if computer score is higher, log a message saying the user lost
    } else if (humanScore < computerScore) {
        console.log(`You lose! The computer scored ${computerScore} points, and you only scored ${humanScore}.`);
    //else log a message saying its a tie
    } else if (humanScore === computerScore) {
        console.log(`It's a tie! You both scored ${humanScore} points.`);
    } else {
        console.log('Something went wrong.');
    }
}

//run playGame!
playGame();