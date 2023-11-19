console.log("hi just checking if it works"); 
let playerChoice= document.getElementsByClassName ("buttonChoice")
console.log(playerChoice)
/**function for game  */
let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    let playGame = () => {
        let rock = document.querySelector('#rock');
        let paper = document.querySelector('#paper');
        let scissors = document.querySelector('#scissors');
        let lizard = document.querySelector('#lizard');
        let spock = document.querySelector('#spock');
        let playerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        let computerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

        playerOptions.forEach(option => {
            option.addEventListener('click' ,function(){
                let movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerHTML = 'Moves Left :${10-moves}';

                /**function to see who wins */
                winner(this.innerText.computerChoice)
                /**the game over count  */
                if(moves === 10){
                    gameOver(playerOptions.movesLeft)
                }
            }
        )}
    )}
}
/**computer decides with this code */
function buttonStart (){
    buttonStart.addEventListener("click", button)
    
}
let computerChoice = Math.random()*5;
if (computerChoice < 1) {
    computerChoice ={ name :"rock", img: "assets/images/rock.png"};
} else if (computerChoice < 2) {
    computerChoice = {name :"paper", img: "assets/images/paper.png"};
} else if (computerChoice < 3) {
    computerChoice = {name :"scissors", img: "assets/images/scissors.png"};
} else if (computerChoice < 4) {
    computerChoice = {name : "lizard", img: "assets/images/lizard.png"};
} else if (computerChoice < 5) {
    computerChoice = {name: "spock", img: "assets/images/spock.png"};
} else {
    computerChoice = "Computer Is Thinking";
}
console.log(computerChoice.name);
let comPuter = document.getElementById("comPuter")
comPuter.setAttribute("src", computerChoice.img);

/**player choice */
function changeImageBackground(option) {
    let imgUrl = "assets/images/rock-paper-lizard-spock.png";
    switch(option){
        case 'rock': imgUrl = 'assets/images/rock.png';
        playerChoice= "rock"
        break;
        case 'paper': imgUrl = 'assets/images/paper.png'
        playerChoice = "paper"
        break;
        case 'scissors': imgUrl = 'assets/images/scissors.png'
        playerChoice = "scissors"
        break;
        case 'lizard': imgUrl = 'assets/images/lizard.png';
        playerChoice = "lizard"
            break;
        case 'spock': imgUrl = 'assets/images/spock.png';
        playerChoice = "spock"
            break;
            default: alert(console.error("somthing is wrong "))
        };
        console.log(playerChoice)
        let imageElement = document.getElementById("picture1");
        imageElement.src= imgUrl;

    } 
 
/**Rules */
switch (`${playerChoice}${computerChoice.name}`) {
    case "rockrock":
    case "paperscissors":
    case "scissorsscissors":
    case "lizardlizard":
    case "spockspock":
        console.log("It's a tie!");
    case "rockpaper":
    case "paperspock":
    case "scissorsrock":
    case "lizardscissors":
    case "spocklizard":
        computerScore ++
        console.log("You lose!");
        break;
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
    case "lizardpaper":
    case "spockrock":
        playerScore ++
        console.log("You win!");
}
/**win loose */
