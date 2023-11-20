console.log("hi just checking if it works");
let playerChoice = document.getElementsByClassName("buttonChoice");
console.log(playerChoice);

/**global variables*/
let playerScore = 0;
let computerScore = 0;
let movesLeft = 10;
let playerScoreElement = document.getElementById("playerScore");
let computerScoreElement = document.getElementById("computerScore");
let movesLeftElement = document.getElementById("movesLeft");
/**end of global variables*/

/**function for game*/
let game = () => {
    let playGame = () => {
        let rock = document.querySelector('#rock');
        let paper = document.querySelector('#paper');
        let scissors = document.querySelector('#scissors');
        let lizard = document.querySelector('#lizard');
        let spock = document.querySelector('#spock');
        let playerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        let computerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

        playerOptions.forEach(option => {
            option.addEventListener('click', function () {
                let movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerHTML = 'Moves Left :${10-moves}';

                /**function to see who wins */
                winner(this.innerText.computerChoice);
                /**the game over count  */
                if (moves === 10) {
                    gameOver(playerOptions.movesLeft);
                }
            }
            );
        }
        );
    };
};

/**player choice switch statement
*/
function changeImageBackground(option) {
    if(movesLeft === 0)
    {
        return
    }

    let imgUrl = "assets/images/rock-paper-lizard-spock.png";
    switch (option) {
        case 'rock': imgUrl = 'assets/images/rock.png';
            playerChoice = "rock";
            break;
        case 'paper': imgUrl = 'assets/images/paper.png';
            playerChoice = "paper";
            break;
        case 'scissors': imgUrl = 'assets/images/scissors.png';
            playerChoice = "scissors";
            break;
        case 'lizard': imgUrl = 'assets/images/lizard.png';
            playerChoice = "lizard";
            break;
        case 'spock': imgUrl = 'assets/images/spock.png';
            playerChoice = "spock";
            break;
        default: alert(console.error("something is wrong "));
    };
    console.log(playerChoice);
    let imageElement = document.getElementById("picture1");
    imageElement.src = imgUrl;
    /**computer decides with this code */
    let computerChoice = Math.random() * 5;
    if (computerChoice < 1) {
        computerChoice = { name: "rock", img: "assets/images/rock.png" };
    } else if (computerChoice < 2) {
        computerChoice = { name: "paper", img: "assets/images/paper.png" };
    } else if (computerChoice < 3) {
        computerChoice = { name: "scissors", img: "assets/images/scissors.png" };
    } else if (computerChoice < 4) {
        computerChoice = { name: "lizard", img: "assets/images/lizard.png" };
    } else if (computerChoice < 5) {
        computerChoice = { name: "spock", img: "assets/images/spock.png" };
    } else {
        computerChoice = "Computer Is Thinking Try Again";
    }
    console.log(computerChoice.name);
    let comPuter = document.getElementById("comPuter");
    comPuter.setAttribute("src", computerChoice.img);


    /**Rules */
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
    movesLeft.innerHTML = 'Moves Left :${10-moves}';
    /**the inner Html element selectors*/
    playerScoreElement.innerHTML = playerScore;
    computerScoreElement.innerHTML = computerScore;
    movesLeftElement.innerHTML = movesLeft;
}
