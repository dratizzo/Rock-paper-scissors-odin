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

function clearChildren(element) {
    element.innerHTML = '';
}

function playGame() {
    
    // Inicialização das variáveis de pontuação
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        const displayDiv = document.querySelector("div");

        let pEscolhas = document.createElement("p");

        pEscolhas.textContent = `Human choice: ${humanChoice}, Computer choice: ${computerChoice}`

        displayDiv.appendChild(pEscolhas);
        
        pRoundWinner = document.createElement("p");
        showPoints = document.createElement("p");

        if (humanChoice == "rock" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            pRoundWinner.textContent = `Vencedor do round: máquina!, ${computerScore} ponto(s)`;
        } else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            pRoundWinner.textContent = `Vencedor do round: humano!, ${humanScore} ponto(s)`;
        } else {
            pRoundWinner.textContent = "Empate!";
        }

        if (humanScore >= 5) {
            clearChildren(displayDiv);
            pRoundWinner.textContent = "Humanos superiores vencem!";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore >= 5) {
            clearChildren(displayDiv);
            pRoundWinner.textContent = "E começa a era das máquinas!";
            humanScore = 0;
            computerScore = 0;
        }

        displayDiv.appendChild(pRoundWinner);

    }

    let btnRock = document.querySelector("#rock");
    const btnPaper = document.querySelector(".paper");
    const btnScissors = document.querySelector(".scissors");

    btnRock.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
    });

    btnPaper.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
    });

    btnScissors.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
    });

}
