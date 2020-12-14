var DiceSound = new Audio ("sounds/dice.mp3");
// ENTER NAMES:
var p1Name = prompt("Please enter 1st player's name");
var p2Name = prompt ("Please enter 2nd player's named");

document.querySelector(".player1").innerHTML = p1Name;
document.querySelector(".player2").innerHTML = p2Name;

/*   function getP1 () {
     var h4 = document.querySelector(."textField").innerHTML;
     var changeText =
} */
//==============================================================
document.querySelector(".dodo").addEventListener("click", play);

function play() {
DiceSound.play();
// FOR DICE ONE:
var randomNumber1 = (Math.floor(Math.random() * 6 ) + 1);

var randomImageName1 = "dice" + randomNumber1 + ".png";

var randomSource1 = "images/" + randomImageName1;

document.querySelector(".img1").setAttribute("src", randomSource1);


// FOR DICE TWO:

var randomNumber2 = ( Math.ceil(Math.random() * 6)  );

var randomImageName2 = "dice" + randomNumber2 + ".png";

var randomSource2 = "images/" + randomImageName2;

document.querySelector(".img2").setAttribute("src", randomSource2);


// MESSAGE TO PLAYERS:

if (randomNumber1 > randomNumber2) {
  document.querySelector(".mainHeading").innerHTML = p1Name + " wins 🏆";
  document.querySelector(".player1").innerHTML = p1Name + "😃👍  🏆";
  document.querySelector(".player2").innerHTML = p2Name + "😫👎🏽";

} else if (randomNumber1 < randomNumber2) {
  document.querySelector(".mainHeading").innerHTML = p2Name + " wins 🏆"
  document.querySelector(".player2").innerHTML = p2Name + "😃👍  🏆";
  document.querySelector(".player1").innerHTML = p1Name + "😫👎🏽";

} else {
  document.querySelector(".mainHeading").innerHTML = "Scheiße! 💩! It is a draw 🙊";
  document.querySelector(".player1").innerHTML = p1Name;
  document.querySelector(".player2").innerHTML = p2Name;
}

} // Play-FUNCTION BRACKET
