
var getDiv      = document.querySelector(".container"),
    xStart      = 0,
    xFinal      = 0,
    yStart      = 0,
    yFinal      = 0,
    xEnd        = 0,
    yEnd        = 0,
    xDistance   = 0,
    yDistance   = 0,
    velocity    = 0;

getDiv.addEventListener('mouseenter', animationCalc);

function animationCalc(){
  var objTwoD = getDiv.getBoundingClientRect()
  yStart = objTwoD.top;
  xStart = objTwoD.left;
  getDiv.style.background = ranColor();
  getDiv.style.borderRadius = Math.floor(Math.random()*500)+"px";
  // getDiv.style.height = Math.floor(Math.random()*600+20)+"px";
  // getDiv.style.width = Math.floor(Math.random()*600+20)+"px";

  // var objTwoD = getDiv.getBoundingClientRect();
  // xStart = objTwoD.left;
  // yStart = objTwoD.top;
  // getDiv.style.top = Math.floor(Math.random()*300+10)+"px";
  // getDiv.style.left = Math.floor(Math.random()*300+10)+"px";
  // objTwoD = getDiv.getBoundingClientRect()
  // yEnd = objTwoD.top;
  // xEnd = objTwoD.top;
  yEnd = Math.floor(Math.random()*300+10);
  xEnd = Math.floor(Math.random()*500+10);
  motionCalc();
}
function ranColor(){
  var r = Math.floor(Math.random()*256)
  var g = Math.floor(Math.random()*256)
  var b = Math.floor(Math.random()*256)
  return "rgb("+r+", "+g+", "+b+")";
}
function motionCalc(){
  var timex    = 0,
      timey     =0;

  if(xStart <= xEnd){
    xDistance = xEnd - xStart;

    // console.log("xStart is <: "+xDistance)
  } else {
    xDistance = xStart - xEnd;
    // console.log("xStart is >: "+xDistance)
  }

  if(yStart <= yEnd){
    yDistance = yEnd - yStart;
    // console.log("yStart is <: "+yDistance)
  } else {
    yDistance = yStart - yEnd;
    // console.log("yStart is >: "+yDistance)
  }
  var speedx = xDistance / 1000,
      speedy = yDistance / 1000;
  // var speedx = speedy =  ( xDistance + yDistance) / 1000;
  // var speedx = 100,
  //     speedy = 100;

  var timerx  = setInterval(intervalx, speedx);
  var timery  = setInterval(intervaly, speedy);

  function intervalx(){
    if(timex == xDistance){
      clearInterval(timerx);
      console.log("Speed X: "+speedx+" Speed Y: "+speedy)
      console.log("Distance X: "+xDistance+" Distance Y: "+yDistance)
    } else if (timex <= xDistance){
      if(xStart >= xEnd){
        xFinal = xStart - timex;
      } else {
        xFinal = xStart + timex;
      }
      // accelerateCalc(xDistance, yDistance);
      timex++;
      getDiv.style.left = xFinal+"px";
      // speedx+=timey/1000;
      console.log("TravelX: "+timex)
    }
  }
  function intervaly(){
    if(timey == yDistance){
      clearInterval(timery);
      console.log("Speed X: "+speedx+" Speed Y: "+speedy)
      console.log("Distance X: "+xDistance+" Distance Y: "+yDistance)
    } else {
      if(yStart >= yEnd){
        yFinal = yStart - timey;
      } else {
        yFinal = yStart + timey;
      }
      // accelerateCalc(xDistance, yDistance);
      timey++;
      getDiv.style.top = yFinal+"px";
      // speedy+=timex/1000;
      console.log("TravelY: "+timey)
    }
  }

  // function accelerateCalc(dx, dy){
  //   if(dx >= dy && !(speedx <= 0)){
  //     speedx = speedx + (dx - dy)/100000;
  //     clearInterval(timerx);
  //     var timerx  = setInterval(intervalx, speedx);
  //   } else if(dx <= dy && !(speedy <= 0)){
  //     speedy = speedy + (dy - dx)/100000;
  //     clearInterval(timery);
  //     var timery  = setInterval(intervaly, speedy);
  //   } else {
  //     clearInterval(timery);
  //     clearInterval(timerx);
  //   }
  // }

}
