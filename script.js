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

    while (true) {

        userInput = (userInput ?? "").toLowerCase();

        switch (userInput) {
            case "rock":
            case "paper":
            case "scissors":
                return userInput;

            default:
                userInput = prompt(`Invalid choice: ${userInput}. Please enter rock, paper or scissors`);
        }
    }
}

console.log("Hello world");
