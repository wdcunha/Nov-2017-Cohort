const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question('How many faces?  ', function(facesInput){
  interface.question('How many dices?  ', function(dicesInput){

    let result = 0;

    for (let i = 0; i < dicesInput; i++) {
      let num = Math.floor(Math.random()*facesInput+1);
      console.log("You rolled: " + num);

      result = parseInt(result+num);
    }
      console.log("Total of your dices is: " + result);
      process.exit();
})});
