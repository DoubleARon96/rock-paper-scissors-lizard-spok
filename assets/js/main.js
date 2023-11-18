console.log("hi just checking if it works");
/**the variables are being set here */
let playerChoice = document.getElementsByClassName("buttonChoice").button;
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
            }
        )}
    )}
}
/**computer decides with this code */
let computerChoice = Math.random()*5;
if (computerChoice < 1) {
    computerChoice = ("rock").img = "assets/images/rock.png";
} else if (computerChoice < 2) {
    computerChoice = ("paper").img = "assets/images/paper.png";
} else if (computerChoice < 3) {
    computerChoice = ("scissors").img = "assets/images/scissors.png";
} else if (computerChoice < 4) {
    computerChoice = ("lizard").img = "assets/images/lizard.png";
} else if (computerChoice < 5) {
    computerChoice = ("spock").img = "assets/images/spock.png";
} else {
    computerChoice = "Computer Is Thinking";
}
console.log(computerChoice);
let comPuter = document.getElementById("comPuter")
comPuter.setAttribute("src", computerChoice);

/**player choice */
function changeImageBackground(option) {
    let imgUrl = "assets/images/rock-paper-lizard-spock.png";
    switch(option){
        case 'rock': imgUrl = 'assets/images/rock.png';
        break;
        case 'paper': imgUrl = 'assets/images/paper.png'
        break;
        case 'scissors': imgUrl = 'assets/images/scissors.png'
        break;
        case 'lizard': imgUrl = 'assets/images/scissors.png';
            break;
        case 'spock': imgUrl = 'assets/images/scissors.png';
            break;
            default: alert(console.error("somthing is wrong "))
        };
        let imageElement = document.getElementById("picture1");
        imageElement.src= imgUrl;

    }
   


/**Rules */
let comPare ={
    "rock":{
        "rock" : "draw",
        "paper" : "lose",
        "scissors" : "win",
        "lizard" : "win",
        "spock" : "lose"
    },
    "scissors" : {
        "rock" : "lose",
        "paper" : "win",
        "scissors" : "draw",
        "lizard": "win",
        "spock": "lose"
    },
    "paper" : {
        "rock": "win",
        "paper": "draw",
        "scissors": "lose",
        "lizard": "lose",
        "spock": "win"
    },
    "lizard": {
        "rock": "lose",
        "paper": "win",
        "scissors": "lose",
        "lizard": "draw",
        "spock": "win"
    },
    "spock": {
        "rock": "win",
        "paper": "lose",
        "scissors": "win",
        "lizard": "lose",
        "spock": "draw"
    },
}
/**win loose */
