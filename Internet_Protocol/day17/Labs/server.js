// net module is bundled with Node.js so no need to install it manually
const net = require('net');

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

// console.log(reverseString('hello'));

const server = net.createServer((socket) => {

  // the server will be running and listening until we stop it. While it's
  // listening, when data is received it will execute the function below
  socket.on('data', (dataReceived) => {
    let reverse = reverseString(dataReceived.toString());
    console.log(dataReceived);
    // console.log(`${dataReceived}`)
    console.log(`data received from client: ${reverse}`);
    // this will send a response back to the client
    socket.write(`Thank you for sending the data for the server!`);
  });

});

// this will start the server running on localhost with port 5000
server.listen(5001, '127.0.0.1');
console.log('TCP Server is running on localhost on port 5001');
