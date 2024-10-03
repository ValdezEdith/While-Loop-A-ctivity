let secretNumber = Math.floor(Math.random() * 10) + 1;
let guess =("9");

guess = (guess)
while (guess !== secretNumber) {
  if (guess > secretNumber) 
    {console.log("Too high!");} 
  else 
  {console.log("Too low!");}
  guess = ("1");
  guess = parseInt(guess);}

console.log("Correct!");
