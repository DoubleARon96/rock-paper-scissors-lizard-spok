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
function output(image) {
    // This function displays the image source on the result div
    document.getElementById("result").style.background = `url(${image}) no-repeat center`;
    document.getElementById("result").style.backgroundSize = "cover";}


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