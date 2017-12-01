// readline is a library built-it with Node.js so we don't need to download it
// or install it separately
const readline = require('readline');

const rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rlInterface.question('What is your name?', (name) => {
  console.log(`Hello ${name}`);
  process.exit();
});
