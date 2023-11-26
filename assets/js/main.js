//global variables
let computerChoice = {};
let playerScore = 0;
let computerScore = 0;
let movesLeft = 10;
let playerScoreElement = document.getElementById("playerScore");
let computerScoreElement = document.getElementById("computerScore");
let movesLeftElement = document.getElementById("movesLeft");
//end of global variables

//function for game
function game(option) {
    if (movesLeft === 0) {
        return;
    }
    this.playerClick(option);
    this.comPuter(option);
    this.rules(option);
}
//player choice switch statement
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
    let imageElement = document.getElementById("picture1");
    imageElement.src = imgUrl;
}
/**computer decides with this code
 * the variable set is the random number generator 
 * and then 1 to 5 are set with rock, paper, scissors, lizard, spock 
 */
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
    let comPuter = document.getElementById("comPuter");
    comPuter.setAttribute("src", computerChoice.img);
}

/**Rules
 * the switch statement compares the results
 *  second part is the count down and scoring count
 */
function rules(option) {
    switch (`${playerChoice}:${computerChoice.name}`) {
        case "rock:rock":
        case "paper:paper":
        case "scissors:scissors":
        case "lizard:lizard":
        case "spock:spock":
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
function resetEvent() {
    computerChoice = {};
    playerScore = 0;
    computerScore = 0;
    movesLeft = 10;
    let playerImage = "assets/images/rock-paper-lizard-spock.png";
    let comPuterImageUrl = "assets/images/rock-paper-lizard-spock.png";
    document.getElementById("picture1").src = playerImage;
    document.getElementById("comPuter").src = comPuterImageUrl;
    document.getElementById("movesLeft").innerHTML = movesLeft;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("playerScore").innerHTML = playerScore;
}
