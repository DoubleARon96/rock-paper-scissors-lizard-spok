console.log("hi just checking if it works");
let playerChoice = document.getElementsByClassName("buttonChoice");
console.log(playerChoice);

/**global variables*/
let computerChoice = {};
let playerScore = 0;
let computerScore = 0;
let movesLeft = 10;
let playerScoreElement = document.getElementById("playerScore");
let computerScoreElement = document.getElementById("computerScore");
let movesLeftElement = document.getElementById("movesLeft");
/**end of global variables*/

/**function for game*/
function game(option) {
    if (movesLeft === 0) {
        return;
    }
    console.log("player playerChoice");
    this.playerClick(option);
    console.log("computer Choice");
    this.comPuter(option);
    console.log("rules Choice");
    this.rules(option);
}
/**player choice switch statement
 */
function playerClick(option) {


    let imgUrl = "assets/images/rock-paper-lizard-spock.png";
    switch (option) {
        case "rock":
            imgUrl = "assets/images/rock.png";
            playerChoice = "rock";
            break;
        case "paper":
            imgUrl = "assets/images/paper.png";
            playerChoice = "paper";
            break;
        case "scissors":
            imgUrl = "assets/images/scissors.png";
            playerChoice = "scissors";
            break;
        case "lizard":
            imgUrl = "assets/images/lizard.png";
            playerChoice = "lizard";
            break;
        case "spock":
            imgUrl = "assets/images/spock.png";
            playerChoice = "spock";
            break;
        default:
            alert(console.error("something is wrong "));
    }
    console.log(playerChoice);
    let imageElement = document.getElementById("picture1");
    imageElement.src = imgUrl;
}
/**computer decides with this code */
function comPuter(option) {
    let randomNumber = Math.random() * 5;
    if (randomNumber < 1) {
        computerChoice = { name: "rock", img: "assets/images/rock.png" };
    } else if (randomNumber < 2) {
        computerChoice = { name: "paper", img: "assets/images/paper.png" };
    } else if (randomNumber < 3) {
        computerChoice = { name: "scissors", img: "assets/images/scissors.png" };
    } else if (randomNumber < 4) {
        computerChoice = { name: "lizard", img: "assets/images/lizard.png" };
    } else if (randomNumber < 5) {
        computerChoice = { name: "spock", img: "assets/images/spock.png" };
    } else {
        computerChoice = "Computer Is Thinking Try Again";
    }
    console.log(computerChoice.name);
    let comPuter = document.getElementById("comPuter");
    comPuter.setAttribute("src", computerChoice.img);
}

/**Rules */
function rules(option) {
    switch (`${playerChoice}:${computerChoice.name}`) {
        case "rock:rock":
        case "paper:paper":
        case "scissors:scissors":
        case "lizard:lizard":
        case "spock:spock":
            console.log("It's a tie!");
            alert("You Tie!");
            break;
        case "scissors:rock":
        case "lizard:rock":
        case "spock:paper":
        case "rock:paper":
        case "paper:scissors":
        case "lizard:scissors":
        case "spock:lizard":
        case "paper:lizard":
        case "scissors:spock":
        case "rock:spock":
            computerScore++;
            console.log("You lose!");
            alert("You Lose!");
            break;
        case "rock:scissors":
        case "rock:lizard":
        case "paper:spock":
        case "paper:rock":
        case "scissors:paper":
        case "scissors:lizard":
        case "lizard:spock":
        case "lizard:paper":
        case "spock:scissors":
        case "spock:rock":
            playerScore++;
            console.log("You win!");
            alert("You Win!");
            break;
    }

    /**moves lefter count down */
    movesLeft--;
    movesLeft.innerHTML = "Moves Left :${10-moves}";
    /**the inner Html element selectors*/
    playerScoreElement.innerHTML = playerScore;
    computerScoreElement.innerHTML = computerScore;
    movesLeftElement.innerHTML = movesLeft;
}
