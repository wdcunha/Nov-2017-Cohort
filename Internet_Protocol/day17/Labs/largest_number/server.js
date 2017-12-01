// net module is bundled with Node.js so no need to install it manually
const net = require('net');


const server = net.createServer((socket) => {

  // the server will be running and listening until we stop it. While it's
  // listening, when data is received it will execute the function below
  socket.on('data', (dataReceived) => {

    const dataReceivedArr = `${dataReceived}`.split(",").map(x => parseInt(x)); // array now ~
        const max = Math.max(...dataReceivedArr);

    console.log(`data received from client: ${max}`);
    // this will send a response back to the client
    socket.write(`Thank you for sending the data for the server!`);
  });

});

// this will start the server running on localhost with port 5000
server.listen(5001, '127.0.0.1');
console.log('TCP Server for Largest Number is running on localhost on port 5001');
