// net module is bundled with Node.js so no need to install it manually
const net = require('net');

const server = net.createServer((socket) => {

  // the server will be running and listening until we stop it. While it's
  // listening, when data is received it will execute the function below
  socket.on('data', (dataReceived) => {
    console.log(`data received from client: ${dataReceived}`);
    // this will send a response back to the client
    socket.write(`Thank you for sending the data!`);
  });

});

// this will start the server running on localhost with port 5000
server.listen(5000, '127.0.0.1');
console.log('Server is running on localhost on port 5000');
