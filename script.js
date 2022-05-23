var images =["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var img1 = document.querySelectorAll(".img1");
var img2 = document.querySelectorAll(".img2");

var winner = document.getElementById("status");



let random1= randomFunc(0,images.length);
let random2= randomFunc(0,images.length);



img1[0].src= images[random1];
img2[0].src= images[random2];




    if (random1>random2){
        winner.innerHTML = `winner is player1`
            }
    else if(random2>random1){
        winner.innerHTML = `winner is player2`
    }

    


function randomFunc(min,max){
   return Math.floor(Math.random()*(max-min)+min);
};
