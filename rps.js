

// create function called "GetComputerChoice" that randomly selects rock paper or scissors
// write a function that plays a single round or RPS
//     Function should should take playerSelection and computerSelection as parameters
//     Return stringg that delcares the winner / outcome
//     Make sure player selection is case-insensitive 


function getComputerChoice() {
    //random selection
    var rps = ['Rock', 'Paper', 'Scissors'];
    let i = Math.floor(Math.random()*3);
    let compSelection = rps[i];
    console.log(compSelection);
    return compSelection;
}

getComputerChoice();

//more elsewhere