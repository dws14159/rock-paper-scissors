function btnRock() {
    playRound("rock");
}

function btnPaper() {
    playRound("paper");
}

function btnScissors() {
    playRound("scissors");
}

function getComputerChoice() {
    let choiceNo=Math.floor(Math.random()*3);
    switch (choiceNo) {
        case 0: return "rock";
        case 1: return "paper";
        default: return "scissors";
    }
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    document.getElementById("compChoice").innerText = computerChoice;
    let msg="";
    let computerWin=false;
    let playerWin=false;

    if (humanChoice == computerChoice) {
        msg = "It's a tie! ";
    }
    else switch (humanChoice) {
        case "rock":
            if (computerChoice=="paper") {
                msg = "Paper covers rock";
                computerWin = true;
            } else if (computerChoice=="scissors") {
                msg = "Rock blunts scissors";
                playerWin=true;
            }
            break;

        case "paper":
            if (computerChoice=="rock") {
                msg = "Paper wraps rock";
                playerWin=true;
            }
            else if (computerChoice=="scissors") {
                msg = "Scissors cut paper";
                computerWin = true;
            }
            break;

        case "scissors":
            if (computerChoice=="rock") {
                msg = "Rock blunts scissors";
                computerWin = true;
            }
            else if (computerChoice=="paper") {
                msg = "Scissors cut paper";
                playerWin=true;
            }
            break;
    }
    if (playerWin) {
        document.getElementById("gameMessage").innerText = msg + ".  Player wins!"
        humanScore++;
    }
    if (computerWin) {
        document.getElementById("gameMessage").innerText = msg + ".  Computer wins!"
        computerScore++;
    }
    if (!computerWin && !playerWin) {
        document.getElementById("gameMessage").innerText = msg;
    }
    document.getElementById("playerScore").innerText = humanScore;
    document.getElementById("compScore").innerText = computerScore;
}

console.log("Hello world");

let humanScore = 0;
let computerScore = 0;
let quit = 0;
