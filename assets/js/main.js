console.log("hi just checking if it works");
let playerChoice = document.getElementsByTagName("input");
let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");
let paper = document.getElementById("paper");
console.log(rock, paper, scissors, lizard, spock,);
/**computer decides with this code */

    let computerChoice= Math.random();
    if (computerChoice < 0.2) {
        computerChoice = ("rock").src = "assets/images/rock.png"
    }else if(computerChoice < 0.3){
        computerChoice = ("paper").src = "assets/images/paper.png"
    }else if(computerChoice < 0.5){
        computerChoice = ("scissors").src = "assets/images/scissors.png"
    }else if(computerChoice < 0.7){
        computerChoice = ("lizard").src = "assets/images/lizard.png"
    } else if(computerChoice < 0.9){
        computerChoice = ("spock").src = "assets/images/spock.png"
    }
console.log(computerChoice);
/**player choice */
playerChoice.addEventListener("click", function(){
    console.log(button.value);
})
/**this will compare the rules */