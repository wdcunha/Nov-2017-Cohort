const http = require('http');
const url  = require('url');

const server = http.createServer((request, response) => {

const params = url.parse(request.url, true).query;


function gradeCalc(grade){

  if(grade >= 90){
    return "A";
  }
  else if(grade>= 80){
    return "B";
  }
  else if (grade>= 70){
    return "C";
  }
  else if (grade>= 60){
    return "D";
  }
  else {
    return "Fail";
  }

}


  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(`<!DOCTYPE html>
                  <html>
                    <head>
                      <title>My first HTTP server</title>
                    </head>
                    <body>
                      <h1>Hi, your Score is: ${gradeCalc(parseInt(params.score))}!!!</h1>
                    </body>
                  </html>
                  `);
  response.end(); // this will send response back to the client
});



server.listen(5001);
console.log('HTTP server running on localhost on port 5001');

// need to type the address below to see the result:
// http://localhost:5001/?name=Well
