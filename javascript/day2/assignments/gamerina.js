let secret = parseInt(Math.random() * 100 +1);
let high = 100;
let low = 0;
while(guessed = prompt("Guess Num")) {
 if(parseInt(guessed) === secret) {
   console.log(`your number ${guessed} is correct!`);
   break;
 } else if (parseInt(guessed) > secret){
   console.log (`Too high, try between ${low} and ${guessed}`);
   high = guessed;
 } else if (parseInt(guessed) < secret){
   console.log (`Too low, try between ${guessed} and ${high}`);
   low = guessed;
 }
}
console.log("Done");
