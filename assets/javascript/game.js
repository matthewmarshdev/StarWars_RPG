// Star Wars Attack game

/** -Build object for each character
   	-add all character objects to an array
   	-if the select character button is clicked, move the html to the selected character area
   	-if the select enemy button is clicked, move the html to the selected character area


   	-maybe add a setTimeOut on the characters falling health as a super move. 
   	-maybe add a bleed function on the characters that uses setInterval(function, time**/


var ewok = {
    health = 85,
    maxPower = 30,

};

var jarjar = {
    health = 60,
    maxPower = 30,

};

var chewyandporg = {
    health = 115,
    maxPower = 20,

};

var reddit = {
    health = 40,
    maxPower = 45,

};

//array of player objects  
var playerList = [ewok, jarjar, chewyandporg, reddit];

//this method needs work, will essentially set the player and opponent variables based on button
//clicks

function selectPlayer(){
	var selectedPlayer = playerList.indexof[$('choose me')]
	var selectedOpponent =
}

//attack function, connected to attack button, hidden until players are selected
function attack() {

    var attackButton = getelementid(attack button);
    var gameMessage = getelementbyid(game message html);
    var restartButton = getelementbyid(restart button);
    var playerattack = determineAttack(player.power);

    opponent.health -= player.maxPower;
    console.log()

    attackButton.disabled = true;
    gameMessage = "opponents turn to strike"


    setTimeout(() => {
        var opponentAttack = determineAttack(opponent.power);
        playerHealth -= opponentAttack;
        attackButton.disabled = true;
    }, 1000);
}

//fuction determines what the attack will land for 
var determineAttack = (maxPower) => {
    return Math.floor(Math.random() * maxPower);

}

//determines if the game is over or not
function gameOver(health)
if (player.health === 0 && opponent.health >= 0) {
    get elementbyid innerhtml.show YOU DIED!;
    attackButton.hidden = true;
    restartButton.hidden = false;
    return;
} else {
    get elementbyid innerhtml.show YOU WIN!;
    attackButton.hidden = true;
    restartButton.hidden = false;
    return;
}

//restart function for the game 
function restart(){
	var attackButton = document.getelementbyid('attack-button');

	ewok.health = 85;
	jarjar.health = 60;
	chewyandporg.health = 115;
	reddit.health = 40;
	attackButton.diabled = false;
	attackButton.hidden = false;
	document.getelementbyid('restart-button').hidden = true;
	printToScreen
}

}



print objects in html