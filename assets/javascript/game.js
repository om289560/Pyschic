{/* <script type="text/javasript"> */
var computerChoices = [ "a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","s","t","u","v","w","x","y","z"] +1 ;


var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = 0;
var allowedGuesses = 10;



var questionText =document.getElementById("text");
var displayWins =document.getElementById("display-wins");
var displayLosses =document.getElementById("display-losses");
var displayGuesses =document.getElementById("display-guesses");
var displayGuessesSoFar =document.getElementById("dusplay-soFar");

document.onkeyup = function(event) {
    userGuess = event.key;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
     if ((guessesLeft < allowedGuesses) && (userGuess === computerGuess)) {
         wins++
     } else {
         losses++; 
     }
     else {}
       //need to set limit for allowed guesses                
   
     displayWins.textContent = "You chose: " + userGuess;
     displayLosses.textContent = "The computer chose: " + userGuess;
 
    
}
}

// </script