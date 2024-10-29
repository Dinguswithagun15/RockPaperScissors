function getComputerChoice() {
    const val = Math.floor(Math.random() * 3);
    switch (val) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function getHumanChoice() {
    return prompt("Please enter either \"rock\", \"paper\" or \"scissors\".");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == computerChoice) {
            console.log("It's a tie! Both players played " + humanChoice);
        } else if (humanChoice == "rock") {
            if (computerChoice == "paper") {console.log("You lose! Paper beats Rock"); computerScore++;} else {console.log("You win! Rock beats Scissors"); humanScore++;}
        } else if (humanChoice == "paper") {
            if (computerChoice == "scissors") {console.log("You lose! Scissors beats Paper"); computerScore++;} else {console.log("You win! Paper beats Rock"); humanScore++;}
        } else {
            if (computerChoice == "rock") {console.log("You lose! Rock beats Scissors"); computerScore++;} else {console.log("You win! Scissors beats Paper"); humanScore++;}
        }
    }
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore == computerScore) {
        console.log("It's an overall tie!");
    } else if (humanScore > computerScore) {
        console.log("The human wins!");
    } else {
        console.log("The computer wins!");
    }
}

playGame();