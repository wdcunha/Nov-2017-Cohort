let ram = parseInt(Math.floor((Math.random() * 100)+1));
let guess = 0;
let counter = 0;

  while (guess !== ram) {
    guess = parseInt(prompt("Try a number between 1 to 100: "));

    if (ram === guess) {
      counter++;
      alert(`Good work! you guessed ${counter}`);
    } else if (ram > guess){
      alert("Higher!");
      counter++;
    } else if (ram < guess){
      alert("Lower!");
      counter++;
    }
  }
