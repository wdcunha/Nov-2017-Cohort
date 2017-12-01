const net = require('net');
const readline = require('readline');

const rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// var array = [3 , 6, 2, 56, 32, 5, 89, 32];

rlInterface.question('Input a sequence of numbers dilimited by comma: ', (input) => {
  // console.log(`User said: ${input}`);

  data = input;

  // console.log(`outside: ${result}`);
  const client = new net.Socket();
  // this will be called when we receive data back from server
  client.on('data', (data) => {
    console.log(`data received from server ${data}`);
    process.exit();
  });

  client.connect(5001, '127.0.0.1', () => {
    client.write(data);
  });
  // process.exit();
});
