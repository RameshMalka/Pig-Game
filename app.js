
const rollDice = function() {
    // Generate Random Number
    let playerScore = Math.floor(Math.random()*6+1);
    
    // update labels with current score
    document.querySelector("#score-" + currentPlayer).innerHTML = playerScore;
    
    // update total score

    // display image according to randomly generated number
    document.querySelector(".dice").src = "./images/dice-" + playerScore + ".png";

    // calculate total score 

    let totalScore = parseInt(document.querySelector("#total-" + currentPlayer).innerHTML);
    document.querySelector("#total-" + currentPlayer).innerHTML = totalScore + playerScore;

    // Reset, if they roll 1
    if(playerScore == 1) {
        totalScore = 0
        document.querySelector("#total-" + currentPlayer).innerHTML = 0;

        // Player change if dice is rolled to 1
        changePlayer();

    } else {

        document.querySelector("#total-" + currentPlayer).innerHTML = totalScore + playerScore;
    }

    // if they get 100, win
    if(totalScore > 99) {
        document.querySelector("#name-" + currentPlayer).innerText = "WINNER!"
        
        // disable buttons if won
        document.querySelector("button.btn-roll").disabled = true;
        document.querySelector("button.btn-hold").disabled = true;
    }
}


const changePlayer = function(){
    // player change
    
    if (currentPlayer == 0){
        currentPlayer = 1
        document.querySelector("div.player-0-panel").classList.remove("active");
        document.querySelector("div.player-1-panel").classList.add("active");
    }
    else if (currentPlayer == 1) {
        currentPlayer = 0
        document.querySelector("div.player-1-panel").classList.remove("active");
        document.querySelector("div.player-0-panel").classList.add("active");
    }
}


let currentPlayer = 0;

const newGame = function() {
    currentPlayer = 1;
    changePlayer();

    document.querySelector("#total-0").innerHTML = 0;
    document.querySelector("#total-1").innerHTML = 0;

    document.querySelector("#score-0").innerHTML = 0;
    document.querySelector("#score-1").innerHTML = 0;

    document.querySelector("button.btn-roll").disabled = false;
    document.querySelector("button.btn-hold").disabled = false;

    document.querySelector(".dice").style.display = "hidden";

}
newGame();

document.querySelector(".btn-roll").addEventListener("click",rollDice);
document.querySelector(".btn-hold").addEventListener("click", changePlayer);
document.querySelector(".btn-new").addEventListener("click", newGame);