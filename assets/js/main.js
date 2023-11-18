console.log("hi just checking if it works");
/**the variables are being set here */
let playerChoice = document.getElementsByClassName("buttonChoice").button;

/**computer decides with this code */
let computerChoice = Math.random();
if (computerChoice < 0.2) {
    computerChoice = ("rock").img = "assets/images/rock.png";
} else if (computerChoice < 0.3) {
    computerChoice = ("paper").img = "assets/images/paper.png";
} else if (computerChoice < 0.5) {
    computerChoice = ("scissors").img = "assets/images/scissors.png";
} else if (computerChoice < 0.7) {
    computerChoice = ("lizard").img = "assets/images/lizard.png";
} else if (computerChoice < 0.9) {
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