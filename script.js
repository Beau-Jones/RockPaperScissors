let playerWins = 0;
let computerWins = 0;


function getComputerChoice() {
    let numChoice = 0;
    numChoice = Math.round(Math.random() * (2 - 0) + 0);
    if (numChoice == 0) {
        return 'rock';
    }
    if (numChoice == 1) {
        return 'paper';
    }
    if (numChoice == 2) {
        return 'scissors';
    }
}

function singleRound(computerSelection) {
    wonRound = false;
    lostRound = false;

    let playerSelection = prompt('Choose your weapon:').toLowerCase();
    
    if (computerSelection == 'rock' && playerSelection == 'paper') {
        console.log('You win! Paper covers rock');
        wonRound = true;
        return wonRound;
    }
    if (computerSelection == 'rock' && playerSelection == 'rock') {
        console.log('You tied');
    }
    if (computerSelection == 'rock' && playerSelection == 'scissors') {
        console.log('You lose! Rock smashes scissors');
        lostRound = true;
        return lostRound;
    }
    if (computerSelection == 'paper' && playerSelection == 'paper') {
        console.log('You tied');
    }
    if (computerSelection == 'paper' && playerSelection == 'rock') {
        console.log('You lose! Paper covers rock');
        lostRound = true;
        return lostRound;
    }
    if (computerSelection == 'paper' && playerSelection == 'scissors') {
        console.log('You win! Scissors cuts paper');
        wonRound = true;
        return wonRound;
    }
    if (computerSelection == 'scissors' && playerSelection == 'paper') {
        console.log('You lose! Scissors cuts paper');
        lostRound = true;
        return lostRound;
    }
    if (computerSelection == 'scissors' && playerSelection == 'rock') {
        console.log('You win! Rock smashes scissors');
        wonRound = true;
        return wonRound;
    }
    if (computerSelection == 'scissors' && playerSelection == 'scissors') {
        console.log('You tied');
    }
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        console.log('Try again');
    }

}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    singleRound(computerSelection);
    if (wonRound == true) {
        playerWins++;
    } else if (lostRound = true) {
        computerWins++;
    }
    singleRound(computerSelection);
    if (wonRound == true) {
        playerWins++;
    } else if (lostRound = true) {
        computerWins++;
    }
    singleRound(computerSelection);
    if (wonRound == true) {
        playerWins++;
    } else if (lostRound = true) {
        computerWins++;
    }
    singleRound(computerSelection);
    if (wonRound == true) {
        playerWins++;
    } else if (lostRound = true) {
        computerWins++;
    }
    singleRound(computerSelection);
    if (wonRound == true) {
        playerWins++;
    } else if (lostRound = true) {
        computerWins++;
    }
    if (playerWins > computerWins) {
        console.log('You\'re the BIG winner!');
    } else if (playerWins < computerWins) {
        console.log('The computer is the BIG winner!')
    } else if (playerWins == computerWins) {
        console.log('You and the computer have tied.')
    }
}

const computerSelection = getComputerChoice();
game();
