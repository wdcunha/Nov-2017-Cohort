const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question('How are you today?', function(answer){
  console.log(`you answered: ${answer}`);
  process.exit(); //this will exit node.js program
});
