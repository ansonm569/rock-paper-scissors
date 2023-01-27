

// create function called "GetComputerChoice" that randomly selects rock paper or scissors
// write a function that plays a single round or RPS
//     Function should should take playerSelection and computerSelection as parameters
//     Return stringg that delcares the winner / outcome
//     Make sure player selection is case-insensitive 

const win = "You win!";
const lose = "You lose!";
const tie = "Tie game!";

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

const computerSelection = getComputerChoice();

for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, paper, or scissors?");
    let computerScoreTracker = 0;
    let playerScoreTracker = 0;
    if (playRound(playerSelection, computerSelection) == win) {
        computerScoreTracker++;
    }
    else if (playRound(playerSelection, computerSelection) == lose) {
        playerScoreTracker--
    }

}


//more elsewhere