class Quiz{
    constructor() {
    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        });
      }
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      async start() {
          if(gameState==0) {
              contestant = new Contestant();
              var contestantCountRef = await database.ref('contestantCount').once("value");
              if(contestantCountRef.exists()){
                  contestantCount = contestantCountRef.val();
                  contestant.getCount();
              }
              question= new Question();
              question.display();
          }
      }
      play() {

          getPlayerInfo();
          if(allPlayers != undefined) {
            fill("black");
            textSize(30);
            text("Quiz Results", 330, 70);
            background("yellow");
            var y = 370;
              for(var plr in allPlayers) {
                  y = y-30;
                  var correcAns = "2";
                  if(correcAns === allPlayers[plr].answer)
                  fill("green");
                  else{
                      fill("red");
                  }                   
              textSize(20);
              text(allPlayers[plr].name + ": " + allPlayers[plr].answer, 50,y)
              }
              
          }
      }
}