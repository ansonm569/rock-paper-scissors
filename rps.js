const win = "You win!";
const lose = "You lose!";
const tie = "Tie!";
var computerScoreTracker = 0;
var playerScoreTracker = 0;
let rounds = prompt("How many rounds would you like to play? (Between 1 and 5)");

while (rounds < 0 || rounds > 5) {
    rounds = prompt("Error: Please enter a number of rounds between 1 and 5.");
}

for (let i = 0; i < rounds; i++) {
    let computerSelection = getComputerChoice();
    playerSelection = prompt("Rock, paper, or scissors?");
    var outcome = playRound(playerSelection, computerSelection);
    console.log(outcome);
    scoreTracker(outcome);
    var scoreSummary = (`Score: Player (${playerScoreTracker}) | Computer (${computerScoreTracker})`);
    console.log(scoreSummary);
}

console.log(scoreSummary);
finalScoreCheck(playerScoreTracker, computerScoreTracker);
gameReset(confirm("Would you like to try again?"));

// Functions - Break


function getComputerChoice() {
    // computer random selection and return
    var rps = ['rock', 'paper', 'scissors'];
    let i = Math.floor(Math.random()*3);
    // console.log(rps[i]);
    return rps[i];
}

function playRound(playerSelection, computerSelection) {
    // Cleans players selection
    let pClean = (playerSelection.toLowerCase());
    if (pClean == computerSelection) {
        return (tie);
        // If it's a tie, declare tie game
    }
    else if ((pClean == "rock" && computerSelection == "scissors") || 
    (pClean == "paper" && computerSelection == "rock") || (pClean == "scissors" && computerSelection == "paper"))  {
        return (win);
        // return ('${pClean.charAt(0).toUpperCase() + pClean.slice(1)} beats ${computerSelection}.`);
        // If there is a scenario where the player wins, return a statement declaring victory and explain why
    }
    else {
        return (lose); 
        // return (`${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${pClean}.`)
        // If there is a scenario with computer wins, return a statement declaring a loss and explain why
    }
    }

function finalScoreCheck(playerScoreTracker, computerScoreTracker) {
    if (playerScoreTracker > computerScoreTracker) {
    console.log(`You win the game of ${rounds} round(s)!`);
    }
    else if (computerScoreTracker > playerScoreTracker) {
        console.log(`You lose the game of ${rounds} round(s).`);
    }
    else {
        console.log(`You and the computer tied in a game of ${rounds} round(s).`);
    }
}

function scoreTracker (outcome) {
    if (outcome == win) {
        playerScoreTracker++;
        return
    }
    else if (outcome == lose) {
        computerScoreTracker++
        return lose;
    }
    else if (outcome == tie) {
        return tie
    }
    else {
        return
    }
}

function gameReset(reset) {
    (reset == true) ? location.reload() : null;
}