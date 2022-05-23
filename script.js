// the array of images

var images =["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

// the 2 image tags to use for the pics 

var img1 = document.querySelectorAll(".img1");
var img2 = document.querySelectorAll(".img2");

// the status of the game 

var winner = document.getElementById("status");


// the random numbers to compare the winner 

let random1= randomFunc(0,images.length);
let random2= randomFunc(0,images.length);


// changing the source of the immages 

img1[0].src= images[random1];
img2[0].src= images[random2];


// the if statements that change the html 

    if (random1>random2){
        winner.innerHTML = ` &#128681 Winner is Player1`
            }
    else if(random2>random1){
        winner.innerHTML = `&#128681 Winner is Player2`
    }
    else {
        winner.innerHTML = `&#11093 Draw`

    }

    
// the function that randomises everything 

function randomFunc(min,max){
   return Math.floor(Math.random()*(max-min)+min);
};
