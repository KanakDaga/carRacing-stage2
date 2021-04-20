class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",(data)=>{
            gameState = data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state,
        })
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize (30);
        text ("Game Start",120,100);
        Player.getPlayerInfo();
        if(allPlayers!=undefined){
            var yPosition = 130;
            for (var player in allPlayers){
                if(player === "player"+player.index){
                    fill ("red");
                }
                else{
                    fill ("black");
                }
                yPosition+=20;
                textSize(15);
                text (allPlayers[player].name+":"+allPlayers[player].distance,120,yPosition);
            }
        }
    }
}