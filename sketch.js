

var gamestate = 0;
var playercount = 0;
var allPlayers;

var database;

var form,player, game;

var player1,player2,players;

var bg,player1img,player2img;

function preload(){
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getstate();
  console.log(gamestate);
  game.start();
}


function draw(){
  if(playercount === 2){
    game.update(1);
  }
  if(gamestate === 1){
    clear();
    game.play();
  }
  if(gamestate === 2){
    game.end();
  }
}
