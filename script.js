function getComputerChoice() {
    let choiceNo=Math.floor(Math.random()*3);
    switch (choiceNo) {
        case 0: return "rock";
        case 1: return "paper";
        default: return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Enter rock, paper or scissors");
    if (!userInput) {
        quit=1;
        return;
    }
    while (true) {

        userInput = (userInput ?? "").toLowerCase();

        switch (userInput) {
            case "rock":
            case "paper":
            case "scissors":
                return userInput;

            default:
                userInput = prompt(`Invalid choice: ${userInput}. Please enter rock, paper or scissors`);
                if (!userInput) {
                    quit=1;
                    return;
                }
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie!")
    }
    else switch (humanChoice) {
        case "rock":
            if (computerChoice=="paper") {
                console.log("Paper covers rock");
                computerScore++;
            } else if (computerChoice=="scissors") {
                console.log("Rock blunts scissors");
                humanScore++;
            }
            break;

        case "paper":
            if (computerChoice=="rock") {
                console.log("Paper wraps rock");
                humanScore++;
            }
            else if (computerChoice=="scissors") {
                console.log("Scissors cut paper");
                computerScore++;
            }
            break;

        case "scissors":
            if (computerChoice=="rock") {
                console.log("Rock blunts scissors");
                computerScore++;
            }
            else if (computerChoice=="paper") {
                console.log("Scissors cut paper");
                humanScore++;
            }
            break;
    }
}

function playGame() {
    for (let round=1; round<=5; round++) {
        if (quit)
            break;

        console.log(`Round ${round}. Human: ${humanScore}. Computer: ${computerScore}`);

        let humanChoice=getHumanChoice();
        let computerChoice=getComputerChoice();
        console.log(`Computer picks ${computerChoice}`);
        playRound(humanChoice, computerChoice);
    }
    console.log(`Game over! Human: ${humanScore}. Computer: ${computerScore}`);
}

console.log("Hello world");

let humanScore = 0;
let computerScore = 0;
let quit = 0;
playGame();
