console.log("hi just checking if it works");
/**the variables are being set here */
let playerChoice = document.getElementsByClassName("buttonChoice").button;

/**player choice */
function output() {
    document.addEventListener("click", playerChoice);
    let x = document.getElementById("comPuter");
    x.querySelector("comPuter").innerHTML = "computerChoice";
    console.log(output);
}

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


/**Rules */