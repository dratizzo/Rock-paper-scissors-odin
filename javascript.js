function getComputerChoice() {

    randInt = Math.floor(Math.random() * 3)

    if (randInt === 0) {
        let escolhaComputador = "rock";
        return escolhaComputador;
    }

    if (randInt === 1) {
        let escolhaComputador = "paper";
        return escolhaComputador;
    } else {
        let escolhaComputador = "scissors";
        return escolhaComputador;
    }

}

function getHumanChoice() {
    let escolhaHumano = prompt("Choose 'rock','paper' or 'scissors'!")
    return escolhaHumano;
}

function playGame() {
    
    // Inicialização das variáveis de pontuação
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        console.log("Escolha humano:", humanChoice);
        console.log("Escolha máquina:", computerChoice);
        console.log("-------------------------------")

        // Caso seja empate
        if (humanChoice === computerChoice) {
            console.log("Drawn!");
        }

        // Casos que a máquina vence
        if (humanChoice == "rock" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            console.log("E começa a era das máquinas!");
        }

        // Casos que o humano vence
        if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            console.log("Humanos superiores!");
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log("Pontuação humano:", humanScore);
    console.log("Pontuação máquina:", computerScore);

}
