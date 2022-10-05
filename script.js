function getComputerChoice () {
    return "Paper" || "Scissor" || "Rock";
}

function rockPaperScissor (playerSelection, computerSelection) {
    playerSelection = prompt ('Rock, Paper, Scissor, your choice :');
    computerSelection = getComputerChoice();
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return alert ("You Lose! Paper beats Rock");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return alert ("You Win! Paper beats Rock");
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "paper") {
        return alert ("You Win! Scissor beats Paper");
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "scissor") {
        return alert ("Tie Game!");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        return alert ("Tie Game!");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        return alert ("Tie Game!");
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "rock") {
        return alert ("You Lose! Scissor beats Rock");
    } else {
        return 0;
    }
}

rockPaperScissor();

function game () {
    for (let game = 0; game < 5; game++) {
        rockPaperScissor();
        game++ ;
    }
}

game(); 