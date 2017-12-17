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

player = {};
opponent = {};

var playerList = [ewok, jarjar, porg, reddit];

//this method needs work, will essentially set the player and opponent variables based on button
//clicks i will use the .appendto $('.divC').appendTo('.divB'); to do so 

function selectPlayer() {
    var pickedEwok = $('#chooseewok');
    var fightEwok = $('#fightewok');
    var pickedJarJar = $('#choosejarjar');
    var fightJarJar = $('#fightjarjar');
    var pickedChewyAndPorg = $('#chooseporg');
    var fightChewyAndPorg = $('#fightporg');
    var pickedReddit = $('#choosereddit');
    var fightReddit = $('#fightreddit');
}

var determineAttack = (maxPower) => {
    return Math.floor(Math.random() * maxPower);

}

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
    for (i = 0; i < playerList.length; i++) {

        //$(this).attr('data-name', '')
        if (playerList[i].name === $(this).attr('data-name')) {
            player = playerList[i];
            var movePlayer = $(`#${player.name}`);
            $('#chosen-opponent').append(movePlayer);
            $('#health').html(player.health);

        }
    }

}); 


//attack function, connected to attack button, hidden until players are selected
$(document).on("click", '#attackbtn', function(){

    var attackButton = $('#attackbtn');
    var gameMessage = $('#message');
    var restartButton = $('restart-button');


    opponent.health -= player.maxPower;
    console.log()

    attackButton.disabled = true;
    gameMessage = "opponents turn to strike"


    setTimeout(() => {
        var opponentAttack = determineAttack(opponent.power);
        player.health -= opponentAttack;
        attackButton.disabled = true;
    }, 1000);
});

//fuction determines what the attack will land for 


//determines if the game is over or not
function gameOver(health) {
    if (player.health === 0 && opponent.health >= 0) {
        $('#winorlose').html.show('YOU DIED!');
        attackButton.hidden = true;
        restartButton.hidden = false;
        return;
    } else {
        $('#winorlose').html.show('YOU WIN!');
        attackButton.hidden = true;
        restartButton.hidden = false;
        return;
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
    $('#chosen-opponent').append(movePlayer);
 
}