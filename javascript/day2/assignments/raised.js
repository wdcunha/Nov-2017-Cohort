const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let number = 1;
let firstInput = 0;//Math.floor(Math.random() * 100);
let secondInput = 0;//Math.floor(Math.random() * 100);
let power = 0;

interface.question('What is the number?  ', function(firstInput){
  interface.question('What is the power?  ', function(secondInput){

      power = firstInput;

      while(number < secondInput){

        power *= firstInput;
        number++;
      }

      console.log(`Result ${power}`);
      process.exit();
})});
/*let test = 4 ** 4;

console.log('Here is the proof: ' + test);*/
