// Star Wars Attack game

/** -Build object for each character
   	-add all character objects to an array
   	-if the select character button is clicked, move the html to the selected character area
   	-if the select enemy button is clicked, move the html to the selected character area


   	-maybe add a setTimeOut on the characters falling health as a super move. 
   	-maybe add a bleed function on the characters that uses setInterval(function, time**/


var ewok = {
    name: 'ewok',
    health: 85,
    maxPower: 30,

};

var jarjar = {
    name: 'jarjar',
    health: 60,
    maxPower: 30,

};

var porg = {
    name: 'porg',
    health: 115,
    maxPower: 20,

};

var reddit = {
    name: 'reddit',
    health: 40,
    maxPower: 45,
};

playerObj = {};
opponentObj = {};

var playerList = [ewok, jarjar, porg, reddit];
var opponentList = [ewok, jarjar, porg, reddit];
//this method needs work, will essentially set the player and opponent variables based on button
//clicks i will use the .appendto $('.divC').appendTo('.divB'); to do so 




$(document).on("click", '.choosePlayer', function() {
    //$('.choosePlayer').on("click", function(){
    for (i = 0; i < playerList.length; i++) {

        //$(this).attr('data-name', '')
        if (playerList[i].name === $(this).attr('data-name')) {
            player = playerList[i];
            var movePlayer = $(`#${player.name}`);
            $('#chosen-player').append(movePlayer);
            $('#health').html(player.health);
        } 
    }
});

$(document).on("click", '.chooseOpponent', function() {
    //$('.choosePlayer').on("click", function(){
    for (i = 0; i < opponentList.length; i++) {

        //$(this).attr('data-name', '')
        if (opponentList[i].name === $(this).attr('data-name')) {
            opponent = opponentList[i];
            var moveOpponent = $(`#${opponent.name}`);
            $('#chosen-opponent').append(moveOpponent);
            $('#health').html(opponent.health);

        }
    }

}); 

	var determineAttack = (maxPower) => {
    let playerMaxPower = Math.floor(Math.random() * player.maxPower);
    console.log(playerMaxPower);
    return playerMaxPower;
    let opponentMaxPower = Math.floor(Math.random() * opponent.maxPower);
    console.log(opponentMaxPower);
    return opponentMaxPower;
}  

//attack function, connected to attack button, hidden until players are selected
$(document).on("click", '#attackbtn', function() {

	
    var attackButton = $('#attackbtn').html();
    var gameMessage = $('#message').text();
    var gameMessage2 = $('#message2');
    var gameMessage3 = $('#message3');
    var gameMessage4 = $('#message4');
    var restartButton = $('#restart-button');
    

    opponent.health -= determineAttack() //player.maxPower;
    var gameMessage = ('You hit the opponent for ' + player.maxPower + 'points');
    var gameMessage2 = ('Your opponent has '+ opponent.health +' Hit points remaining');
    var gameMessage3= ('Your Opponent hit you for ' + opponent.maxPower + 'points');
    var gameMessage4 = ('You have '+ player.health +' Hit points remaining');
    console.log(gameMessage);
    console.log(gameMessage2);
    console.log(gameMessage3);
    console.log(gameMessage4);


    setTimeout(() => {
        var opponentAttack = determineAttack(opponent.maxPower);
        player.health -= opponentAttack;
        
        console.log(opponent.maxPower);
      

    }, 1000);

});







//fuction determines what the attack will land for 


//determines if the game is over or not
function gameOver() {
    if (player.health === 0) {
        $('#winorlose').html.show('YOU DIED!');
        attackButton.hidden = true;
        restartButton.hidden = false;
        console.log("death");
	} 

	if (opponent.health === 0) {
        $('#winorlose').html.show('YOU WIN!');
        attackButton.hidden = true;
        restartButton.hidden = false;
        console.log("death");
	}
    restart();
}

//restart function for the game 
function restart() {
    var attackButton = $('#attack-button');

    ewok.health = 85;
    jarjar.health = 60;
    porg.health = 115;
    reddit.health = 40;
    attackButton.disabled = false;
    attackButton.hidden = false;
    $('#restart-button').hidden = true;
    $('#the-arena').empty();
}