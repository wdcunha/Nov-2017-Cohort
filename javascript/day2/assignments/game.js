let ram = parseInt(Math.floor((Math.random() * 100)+1));//sum 1 to limit interval from 1 and multiply per 100 to set until it
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
