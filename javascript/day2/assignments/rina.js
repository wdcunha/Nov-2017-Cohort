const readline = require('readline');

const interface = readline.createInterface({
 input: process.stdin,
 output:process.stdout
});

let evenCap='';
interface.question('Enter any sentence: ', function(userInput){

 for(let i = 0; i < userInput.length; i++) {
   if(i % 2 !== 0) {
     evenCap += userInput.charAt(i).toUpperCase();
   } else {
     evenCap += userInput.charAt(i);
   }
 }

 console.log(evenCap);
 process.exit(); // this will exit the Noe.js program
});
