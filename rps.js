

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
    console.log(playerSelection.toLowerCase());
}

playRound("RoCK",getComputerChoice);

getComputerChoice();

//more elsewhere