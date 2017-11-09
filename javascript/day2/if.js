const number = Math.random();

if(number >= 0.8){
  console.log('Today is your lucky day!');
} else if(number >= 0.5) {
  console.log('Today MAYBE is your lucky day!');
} else if(number >= 0.3) {
  console.log('Today ALMOST is your Unlucky day!');
} else {
  console.log('Today is NOT your lucky day!');
}
