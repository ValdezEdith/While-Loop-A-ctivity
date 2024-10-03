// random number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

// user to guess the number
let guess =("9");

// Convert the guess to a number
guess = (guess)

// Use a while loop to keep asking until the user guesses correctly
while (guess !== secretNumber) {
  // Check if the guess is too high or too low
  if (guess > secretNumber) 
    {console.log("Too high!");} 
  else 
  {console.log("Too low!");}

  // Prompt the user to guess again
  guess = ("1");
  guess = parseInt(guess);}

// If the user guessed correctly, log a success message
console.log("Correct!");
