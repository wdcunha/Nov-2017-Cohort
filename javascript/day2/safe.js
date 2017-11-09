const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question('What is the password?', function(userInput){

if (userInput === 'opensesame') {
  console.log(`714`);
} else {
  console.log("Sorry that's not it!");

}
process.exit();
});
