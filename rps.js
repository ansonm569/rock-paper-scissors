

// create function called "GetComputerChoice" that randomly selects rock paper or scissors
// write a function that plays a single round or RPS
//     Function should should take playerSelection and computerSelection as parameters
//     Return stringg that delcares the winner / outcome
//     Make sure player selection is case-insensitive 


function getComputerChoice() {
    // computer random selection and return
    var rps = ['rock', 'paper', 'scissors'];
    let i = Math.floor(Math.random()*3);
    console.log(rps[i]);
    return rps[i];
}

function playRound(playerSelection, computerSelection) {
    // take two inputs and determine victor or tie
    let pClean = (playerSelection.toLowerCase());
    if (pClean == computerSelection) {
        return ("Tie game!");
    }
    else if ((pClean == "rock" && computerSelection == "scissors") || 
    (pClean == "paper" && computerSelection == "rock") || (pClean == "scissors" && computerSelection == "paper"))  {
        return (`You win! ${pClean.charAt(0).toUpperCase() + pClean.slice(1)} beats ${computerSelection}.`);
    }
    else {
        return (`You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${pClean}.`)
    }
    }

const computerSelection = getComputerChoice();
const playerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));


//more elsewhere