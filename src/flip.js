//Toss Coin
function flip (msg){
  let chute= Math.round(Math.random())
  if (chute=== 1){
      msg.channel.send("Cara")
      return
    } 
        msg.channel.send("Coroa")
    }

    module.exports= flip