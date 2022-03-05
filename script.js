
var blueCar=document.getElementById('bluecar')
var racecar=document.getElementById('racecar')
var result=document.getElementById('result')
const score=document.getElementById('score')
var game=document.getElementById('game')
var counter=0

//bluecar move
blueCar.addEventListener("animationiteration",function(){
    var random=((Math.floor(Math.random()*3))*130)
    blueCar.style.left=random+"px"
    counter++
})

//redcar move

window.addEventListener("keydown",function(e){
  if(e.keyCode=='39'){ var racecarLeft=parseInt(window.getComputedStyle(racecar).getPropertyValue('left'))

  if(racecarLeft<260){ racecar.style.left=(racecarLeft+130)+"px"}
};
if(e.keyCode=='37'){
    var racecarLeft=parseInt(window.getComputedStyle(racecar).getPropertyValue('left'))

    if(racecarLeft>0){
        racecar.style.left=(racecarLeft-130)+'px'}
    
}
})


//conditions for game over
//1. bluecarleft=racecarleft
//2.bluecartop>250px
//3.bluecartop<450px



setInterval(function Gameover(){
  var bluecartop=parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
  var bluecarleft=parseInt(window.getComputedStyle(blueCar).getPropertyValue('left'))
  var racecarLeft=parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))

if((bluecarleft===racecarLeft)&&(bluecartop>250)&&(bluecartop<450)){
      result.style.display="block";
      game.style.display='none';
      score.innerHTML=`score:${counter}`;
      counter=0;
}



},10)