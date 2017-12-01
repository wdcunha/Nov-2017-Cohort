const net = require('net');
const readline = require('readline');

const rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// let data = '';

rlInterface.question('Type you score please:   ', (score) => {
  // console.log(`User said: ${input}`);
  let data = score;
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
