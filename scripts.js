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

//set variables for html elements
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const buttons = document.querySelector('#buttons');
const output = document.querySelector('#output');
const scoreboard = document.querySelector('#scoreboard');
const clearLog = document.querySelector('#clearLog');

//function to use event listener
function getHumanChoice(event) {
    let humanVar = '';
    
    switch(event.target.id) {
        case 'rock':
            humanVar = 'rock';
            break;
        case 'paper':
            humanVar = 'paper';
            break;
        case 'scissors':
            humanVar = 'scissors';
            break;
    }
    playRound(getComputerChoice(), humanVar);
}

//event listener for buttons
buttons.addEventListener('click', (getHumanChoice));

scoreboard.textContent = `Score: ${humanScore} - ${computerScore}`;

//create functions for incrementing score
function incrementHumanScore() {
    humanScore++;
    scoreboard.textContent = `Score: ${humanScore} - ${computerScore}`;
}
function incrementComputerScore() {
    computerScore++;
    scoreboard.textContent = `Score: ${humanScore} - ${computerScore}`;
};

//function for adding result to log

//create function to play round
function playRound(computerChoice, humanChoice) {
    //compare computerChoice with humanChoice to see if human wins
    if ((computerChoice === 'rock' && humanChoice === 'paper') ||
    (computerChoice === 'paper' && humanChoice === 'scissors') ||
    (computerChoice === 'scissors' && humanChoice === 'rock')) {
        //if human wins, display victory message
        logResult(`You win: ${humanChoice} beats ${computerChoice}!`);
        //increment humanScore
        incrementHumanScore();
    //compare computerChoice with humanChoice to see if computer wins
    } else if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'paper' && humanChoice === 'rock') ||
    (computerChoice === 'scissors' && humanChoice === 'paper')) {
        //if computer wins, display defeat message
        logResult(`You lose: ${computerChoice} beats ${humanChoice}.`);
        //increment computerScore
        incrementComputerScore();
        //compare computerChoice with humanChoice to see if they are the same
    } else if (computerChoice === humanChoice) {
        //if it's tie, no one's score gets incremented; display tie message
        logResult(`It's a tie! You both chose ${computerChoice}.`);
        //if none of the above were true, then something went wrong - display error message
    } else {logResult('Something went wrong.');}
    if (humanScore === 5) {
        logResult(`Game Over: You win! The final score was ${humanScore} - ${computerScore}.`)
        humanScore = 0;
        computerScore = 0;
        scoreboard.textContent = `Score: ${humanScore} - ${computerScore}`;
    }
    if (computerScore === 5) {
        logResult(`Game Over: You lose! The final score was ${humanScore} - ${computerScore}.`)
        humanScore = 0;
        computerScore = 0;
        scoreboard.textContent = `Score: ${humanScore} - ${computerScore}`;
    }
}

function logResult(result) {
    const li = document.createElement('li');
    li.textContent = result;
    output.appendChild(li);
}

clearLog.addEventListener("click", () => {
    output.replaceChildren();
    humanScore = 0;
    computerScore = 0;
    scoreboard.textContent = `Score: ${humanScore} - ${computerScore}`;
});