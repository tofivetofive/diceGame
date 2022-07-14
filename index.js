



var player1 = prompt("Enter Player Name:");
var player2 = prompt("Enter Player Name:");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1-6
console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png"; // String of dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage;  // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = (player1) + " Wins ✨✨! ! ";
    document.querySelectorAll("p")[0].innerHTML = player1
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = (player2) + " Wins ✨✨! ! ";
    document.querySelectorAll("p")[1].innerHTML = player2;
}

else {
    document.querySelector("h1").innerHTML = "✏ Draw ! ! ! ✏";
    document.querySelectorAll("p")[0].innerHTML = player1;
    document.querySelectorAll("p")[1].innerHTML = player2;
}
