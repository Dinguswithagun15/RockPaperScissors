const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");
rockbtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
paperbtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
scissorsbtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanScore == 5 || computerScore == 5) {
        humanScore = 0;
        computerScore = 0;
    }
    const results = document.querySelector("#results");
    const humanScoreDisplay = document.querySelector("#humanScore");
    const computerScoreDisplay = document.querySelector("#computerScore");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        results.textContent = "It's a tie! Both players played " + humanChoice;
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {results.textContent = "You lose! Paper beats Rock"; computerScore++;} else {results.textContent = "You win! Rock beats Scissors"; humanScore++;}
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {results.textContent = "You lose! Scissors beats Paper"; computerScore++;} else {results.textContent = "You win! Paper beats Rock"; humanScore++;}
    } else {
        if (computerChoice == "rock") {results.textContent = "You lose! Rock beats Scissors"; computerScore++;} else {results.textContent = "You win! Scissors beats Paper"; humanScore++;}
    }
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    if (humanScore == 5) {results.textContent += " Human player wins!";} else if (computerScore == 5) {results.textContent += " Computer wins!";}
}