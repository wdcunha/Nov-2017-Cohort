const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question('Give ma sentence: ', function(sentence){
  console.log(countChars(sentence));
  process.exit();
});

function countChars(string) {
  const arr = string.split('');
  const result = {};
  for(let char of arr) {
    const loChar = char.toLowerCase();
    if(result[loChar] > 0) {
      result[loChar] += 1;
    } else {
      result[loChar] = 1;
    }
  }
  return result;
}
