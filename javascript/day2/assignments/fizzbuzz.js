let number = 1;
let first = Math.floor(Math.random() * 100);
let second = Math.floor(Math.random() * 100);

console.log(`first: ${first}\nsecond: ${second}`);

while(number <=100){
  if (number%first === 0 && number%second === 0) {
    console.log('fizzbuzz');
  } else if (number%first === 0){
    console.log('fizz');
  } else if(number%second === 0) {
    console.log('buzz');
  } else {
    console.log(number);
  }

  number++;
}
