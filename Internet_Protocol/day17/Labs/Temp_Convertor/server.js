const http = require('http');
const url  = require('url');

const server = http.createServer((request, response) => {

const params = url.parse(request.url, true).query;


function toCelsius(f) {
    return (5/9) * (f-32);
}


  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(`<!DOCTYPE html>
                  <html>
                    <head>
                      <title>My first HTTP server</title>
                    </head>
                    <body>
                      <h1>The temperature is: ${toCelsius(parseInt(params.temp))}</h1>
                    </body>
                  </html>
                  `);
  response.end(); // this will send response back to the client
});



server.listen(5001);
console.log('HTTP server for Temp Convertor is running on localhost on port 5001');
