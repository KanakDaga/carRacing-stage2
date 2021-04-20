var ball;
var database;
var position;
var gameState = 0;
var playerCount;
var player, game, form;
var allPlayers;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background("white");
    if(playerCount === 4){
        gameState = 1;
        game.update(gameState);
    }
    if(gameState === 1){
        clear ();
        game.play();
    }
    
}
