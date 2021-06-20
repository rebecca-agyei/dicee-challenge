var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")
var h1 = document.querySelector("h1")

var randomNumber1 = Math.floor((Math.random()*6)+1); //generates random numbers between 1 to 6.
img1.setAttribute("src","images/dice"+ randomNumber1 +".png");

var randomNumber2 = Math.floor((Math.random()*6)+1);
img2.setAttribute("src","images/dice"+ randomNumber2 +".png");

if(randomNumber1 > randomNumber2){
    h1.innerHTML = "Player 1 has won";
}
else if(randomNumber2 > randomNumber1){
    h1.innerHTML = "Player 2 has won";
}
else{
    h1.innerHTML = "It's a tie"
}