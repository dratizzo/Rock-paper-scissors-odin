console.log("Hello, World")

function getComputerChoice() {

    randInt = Math.floor(Math.random() * 3)

    if (randInt === 0) {
        return "rock";
    }

    if (randInt === 1) {
        return "paper";
    } else {
        return "scissors";
    }

}

console.log(getComputerChoice())

//function getHumanChoice() {

//}