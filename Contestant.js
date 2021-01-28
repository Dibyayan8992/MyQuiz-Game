var allPlayers;

class Contestant {
    constructor(){
      this.index = null;
      this.name = null;
      this.answer = null;
    }
    getCount(){
      var playerCountRef = database.ref('contestantCount');
      playerCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
  

  }
  function getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }