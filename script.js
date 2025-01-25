function getComputerChoice() {
    let choiceNo=Math.floor(Math.random()*3);
    switch (choiceNo) {
        case 0: return "rock";
        case 1: return "paper";
        default: return "scissors";
    }
}

console.log("Hello world");
