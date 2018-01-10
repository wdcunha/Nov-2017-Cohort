const fs = require('fs');

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) reject(error);
      resolve(data.toString());
    })
  })
}

// readFile("readFile.txt")
// .then(function (data) { console.log(data) })
// .catch(function (error) { console.error(error) })


readFile("readFile.txt")
  // .then(data => data.toString())
  // .then(text => console.log(text));
  .then(data => console.log(data.toString()));
