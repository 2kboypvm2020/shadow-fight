class Player{
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.score=0
  }
  getcount(){
    database.ref('playercount').on("value",(data)=>{
      playercount= data.val();
    })
  }
  updatecount(count){
database.ref('/').update({
  playercount:count
})
}
update() {
  var playerIndex = "players/player" + this.index;
  database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance,
      score:this.score
  });
}

static getPlayerInfo() {
  var playerInfoRef = database.ref('players');
  playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
  })
}
}