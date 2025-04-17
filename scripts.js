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

//run both choice functions to acquire selection paramaters
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

//create function to play round
function playRound(computerChoice, humanChoice) {
    //pass computerSelection to computerChoice for setting parameter
    computerChoice = computerSelection;
    //pass humanSelection to humanChoice for setting parameter
    humanChoice = humanSelection;
    //compare computerChoice with humanChoice to see if human wins
    if ((computerChoice === 'rock' && humanChoice === 'paper') ||
    (computerChoice === 'paper' && humanChoice === 'scissors') ||
    (computerChoice === 'scissors' && humanChoice === 'rock')) {
        //if human wins, increment humanScore
        humanScore = humanScore++;
        //display victory message
        console.log(`You win: ${humanChoice} beats ${computerChoice}!`);
    //compare computerChoice with humanChoice to see if computer wins
    } else if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'paper' && humanChoice === 'rock') ||
    (computerChoice === 'scissors' && humanChoice === 'paper')) {
        //if computer wins, increment computerScore
        computerScore = computerScore++;
        //display defeat message
        console.log(`You lose: ${computerChoice} beats ${humanChoice}.`);
        //compare computerChoice with humanChoice to see if they are the same
    } else if (computerChoice === humanChoice) {
        //if it's tie, no one's score gets incremented; display tie message
        console.log(`It's a tie! You both chose ${computerChoice}.`);
        //if none of the above were true, then something went wrong - display error message
    } else {
        console.log('Something went wrong.')
    }
}

//run playRound function with acquired parameters
playRound(computerSelection, humanSelection);

//create function playGame that will run playRound 5 times then compare score and declare a winner
    //declare variable roundNumber that keeps track of how many rounds have been played
    //if roundNumber is less than 5, run playRound and increment roundNumber
    //else, compare score
        //if human score is higher, log a message saying the user won
        //else if computer score is higher, log a message saying the user lost
        //else log a message saying its a tie