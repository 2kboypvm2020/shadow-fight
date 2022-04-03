class Game {
constructor(){

}
getstate(){
  database.ref('gamestate').on("value",(data)=>{
    gamestate= data.val();
  });
}
update(count){
  database.ref('/').update({
    gamestate:count
  })
}
async start(){
  if (gamestate === 0) {
    player = new Player();
    console.log(player);
    var playercountRef = await database.ref('playercount').once("value");
    if (playercountRef.exists()) {
        playercount = playercountRef.val();
        player.getcount();
    }
    form = new Form()
    console.log(playercount);
    console.log(player.distance);
    form.display();
}
}
play(){
console.log("insideplaymethod")
}
}
