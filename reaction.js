
var start = new Date();
var end = new Date();

function showShape(){

start = new Date();

var left= getRandom();
var top = getRandom();
document.getElementById('shape1').style.display ="block";
document.getElementById('shape1').style.left = left+"px";
document.getElementById('shape1').style.top = top+"px";

}

function reactionTime(){
  end = new Date();
  var delta = end - start;
  document.getElementById('time').innerHTML = delta/1000+" seconds";
  showShape();
}


function getRandom(){
  return Math.random()*500;
}
