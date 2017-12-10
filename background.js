var getDiv      = document.querySelector(".shape");
var newDiv      = [];
// var newDiv      = document.createElement('div');
var newContent  = [],
    xFinal      = 0,
    yFinal      = 0;
// var newContent  = document.createTextNode("*");

// Draw points representing stars


// position the points all around the body


// make them move randomnly


// when a key is pressed make the stars move on the same direction that the shape is being moved
document.body.onload = addElement;

function addElement(){
  for(var i = 0; i<= 20; i++){
    newDiv[i] = document.createElement('span');
    newContent[i] = document.createTextNode("*");
    newDiv[i].appendChild(newContent[i]);
    newDiv[i].style.position = "relative";
    newDiv[i].style.left = "0px";
    newDiv[i].style.top = "0px";
    document.body.insertBefore(newDiv[i], getDiv);
  }
  particlesStart();
}
// function addElement(){
//   newDiv.appendChild(newContent);
//   document.body.insertBefore(newDiv, getDiv);
// }

document.addEventListener('mousemove', (event) =>{
  xFinal = event.pageX - 40;
  yFinal = event.pageY - 40;
  getDiv.style.left = xFinal+"px";
  getDiv.style.top = yFinal+"px";
  // particles();
});

function particlesStart(){
  // var a = 5;
  // for(var i=0; i<=newDiv.length; i++){
  //   newDiv[i].style.left = a+20+"px"
  //   newDiv[i].style.top = a+10+"px"
  //   a+=5;
  // }
  var timer = setInterval(intervalF, 50);
  var topStat = false;
  var leftStat = false;

  function intervalF(){
    var a = Math.floor(Math.random()*newDiv.length);


    newDiv[a].style.left = xFinal+Math.floor(Math.random()*10-40)+"px";
    // newDiv[a].style.top = yFinal+Math.floor(Math.random()*20+40)+"px";
    // var b = Math.floor(Math.random()*(newDiv.length/2));
    // newDiv[b].style.left = xFinal-Math.floor(Math.random()*20+80)+"px";
    // newDiv[b].style.top = yFinal-Math.floor(Math.random()*20-80)+"px";
    // var c = Math.floor(Math.random()*(newDiv.length/2));
    // newDiv[c].style.left = xFinal-Math.floor(Math.random()*20+80)+"px";
    // newDiv[c].style.top = yFinal-Math.floor(Math.random()*20-60)+"px";
    // var d = Math.floor(Math.random()*(newDiv.length/2));
    // newDiv[d].style.left = xFinal-Math.floor(Math.random()*20+80)+"px";
    // newDiv[d].style.top = yFinal-Math.floor(Math.random()*20-20)+"px";
    if(topStat){
      newDiv[a].style.top = yFinal+Math.floor(Math.random()*20+60)+"px";
      // newDiv[a].style.left = xFinal+Math.floor(Math.random()*20+40)+"px";
      topStat = false;
    } else {
      newDiv[a].style.top = yFinal-Math.floor(Math.random()*20+20)+"px";
      // newDiv[a].style.left = xFinal-Math.floor(Math.random()*60+100)+"px";
      topStat = true;
    }
    // if(leftStat){
    //   newDiv[a].style.left = xFinal+Math.floor(Math.random()*20+40)+"px";
    //   leftStat = false;
    // } else {
    //   newDiv[a].style.left = xFinal-Math.floor(Math.random()*60+100)+"px";
    //   leftStat = true;
    // }

  }

}
function particles(){
  // console.log(newDiv[1])
  // for(var i=0; i<=5; i++){
  //   newDiv[i].style.color = "yellow"
  //   newDiv[i].style.left = xFinal+Math.floor(Math.random()*20+80)+"px"
  //   newDiv[i].style.top = yFinal-Math.floor(Math.random()*50)+"px"
  // }
  // for(var i=5; i<=10; i++){
  //   newDiv[i].style.color = "orange"
  //   newDiv[i].style.left = xFinal-Math.floor(Math.random()*20+40)+"px"
  //   newDiv[i].style.top = yFinal-Math.floor(Math.random()*20+40)+"px"
  // }
  // for(var i=10; i<=15; i++){
  //   newDiv[i].style.color = "magenta"
  //   newDiv[i].style.left = xFinal+Math.floor(Math.random()*20)+"px"
  //   newDiv[i].style.top = yFinal+Math.floor(Math.random()*20)+"px"
  // }
  // for(var i=15; i<=20; i++){
  //   newDiv[i].style.left = xFinal-Math.floor(Math.random()*20+40)+"px"
  //   newDiv[i].style.top = yFinal-Math.floor(Math.random()*20+40)+"px"
  // }
  for(var i=0; i<=newDiv.length; i++){
    newDiv[i].style.left = Math.floor(Math.random()*500)+"px"
    newDiv[i].style.top = Math.floor(Math.random()*800)+"px"
  }
  // newDiv[1].style.left = "20px"
  // newDiv[1].style.top = "20px"
}


// document.addEventListener('click', (event) =>{
//   var objTwoD = getDiv.getBoundingClientRect()
//   yStart = objTwoD.top;
//   xStart = objTwoD.left;
//   console.log("X: "+xStart)
//   console.log("Y: "+yStart)
//   console.log("mouseX: "+event.clientX)
//   console.log("mouseY: "+event.clientY)
//   xFinal = event.clientX - 40;
//   yFinal = event.clientY - 40;
//   getDiv.style.left = xFinal+"px";
//   getDiv.style.top = yFinal+"px";
// });
