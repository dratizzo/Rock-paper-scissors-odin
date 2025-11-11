function getComputerChoice() {

    randInt = Math.floor(Math.random() * 3)

    if (randInt === 0) {
        return 'rock';
    } else if (randInt === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playGame() {
    
    // Inicialização das variáveis de pontuação
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        console.log("Escolha humano:", humanChoice);
        console.log("Escolha máquina:", computerChoice);
        console.log("-------------------------------")

        pRoundWinner = document.createElement("p");

        if (humanChoice == "rock" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            pRoundWinner.textContent = "E começa a era das máquinas!";
        } else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            pRoundWinner.textContent = "Humanos superiores!";
        } else {
            console.log("Drawn!");
            pRoundWinner.textContent = "Empate!";
        }

        if (humanScore >= 5) {
            pRoundWinner.textContent = "Vencedor final: humano!";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore >= 5) {
            pRoundWinner.textContent = "Vencedor final: máquina!";
            humanScore = 0;
            computerScore = 0;
        }

        const displayDiv = document.querySelector("div");
        displayDiv.appendChild(pRoundWinner);

        console.log("Pontuação humano:", humanScore);
        console.log("Pontuação máquina:", computerScore);
    }

    let btnRock = document.querySelector("#rock")
    const btnPaper = document.querySelector(".paper")
    const btnScissors = document.querySelector(".scissors")

    btnRock.addEventListener('click', () => {
        console.log('chega aqui');
        playRound('rock', getComputerChoice());
    });

    btnPaper.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
    });

    btnScissors.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
    });

}
