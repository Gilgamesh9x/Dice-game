
document.querySelector("button").addEventListener("click", diceGame);

var playerOneName = prompt('What is the name of the first player: ');
var playerTwoName = prompt('What is the name of the second player: ');

document.querySelectorAll('p')[0].innerHTML = playerOneName;
document.querySelectorAll('p')[1].innerHTML = playerTwoName;

function diceGame() {
  // Giving each player a dice

    var playerOne = Math.random();
    var playerOne = Math.floor(playerOne * 6 + 1);

    var playerTwo = Math.random();
    var playerTwo = Math.floor(playerTwo * 6 + 1);


    // Change the images depending on the random number

    document.querySelector('.img1').setAttribute("src", "./images/dice" + playerOne + ".png") // player 1
    document.querySelector('.img2').setAttribute("src", "./images/dice" + playerTwo + ".png") // player 2

    // Tell who won or if it is a draw

    if (playerOne > playerTwo) {
        document.querySelector('h1').innerHTML = playerOneName + ' Wins!'
    } else if (playerOne < playerTwo) {
        document.querySelector('h1').innerHTML = playerTwoName + ' Wins!'

    } else {
        document.querySelector('h1').innerHTML = 'It is a draw!'
    }
}




  
  
  
  
  
  
