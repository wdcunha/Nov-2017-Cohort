const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question('How many rows in your pyramid would you like?  ', function(facesInput){

    let result = '';

    for (var i = 0; i < facesInput; i++) {
      result += '# ';
      console.log(" ".repeat(facesInput - i) + result);
    }

      process.exit();
});
