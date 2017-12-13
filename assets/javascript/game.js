// Star Wars Attack game

/** -Build object for each character
   	-add all character objects to an array
   	-if the select character button is clicked, move the html to the selected character area
   	-if the select enemy button is clicked, move the html to the selected character area


   	-maybe add a setTimeOut on the characters falling health as a super move. 
   	-maybe add a bleed function on the characters that uses setInterval(function, time**/


var player = {
    health = 100,
    maxPower = 20,

};

var opponent = {
    health: 100,
    maxPower: 20,

};


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

var determineAttack = (maxPower) => {
    return Math.floor(Math.random() * maxPower);

}

function winGame(health)
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

function restart(){
	var attackButton = document.getelementbyid('attack-button');
	
	player.health = 100;
	opponent.health = 100;
	attackButton.diabled = false;
	attackButton. hidden = false;
	document.getelementbyid('restart-button').hidden = true;
	printToScreen
}

}



print objects in html