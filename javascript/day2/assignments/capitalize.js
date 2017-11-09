const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let newWord = '';
//let counter = 0;

interface.question('Type something:', function(userInput){
  for(let i = 0; i < userInput.length; i++){
        //counter = i++;
       //if(counter % 2 === 0) {
       if(i % 2 !== 0) {
         newWord += userInput.charAt(i).toUpperCase();
       } else {
         newWord += userInput.charAt(i);
       }
     }
     console.log(newWord);
     process.exit();
});
