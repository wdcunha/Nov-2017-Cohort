const hello = {
    'Tester Board': {
      'To Do': ['Laundry', 'Buy Apples', 'Pay Phone Bill'],
      'Doing': ['Laundry', 'Studying Javascript', 'Studying HTML', 'Studying Ruby'],
      'Done': ['Laundry']
    },
    'Dreams': {
      'Wish List': ['Conquer the Seven Kingdoms', 'Get my baby back', 'My hand needs to chill'],
    }
};

newBoard = "Cuisini";
//console.log(Object.keys(hello));

function createBoard(obj, boardName) {
  let arr = Object.keys(obj);
  console.log('Array with keys: ' + arr);
  //for (let key of arr) {
    //console.log(Object.keys(obj));
  arr.forEach(function(key) {
    console.log(key);
    //if (Object.keys(obj[key]) === boardName) {
    if (key === boardName) {
      message = `Board '${boardName}' already exists!`;
      return message;
    } else {
      obj[boardName] = [];
      message = `Board '${boardName}' was created!`;
    }
  });

  return message;
  }

console.log(createBoard(hello, newBoard));
console.log(Object.keys(hello));
//
// function checkBoardName(obj, boardName) {
//   for (let name in obj) {
//     if (boardName == name) {
//       return true;
//     }
//   }
//   return false;
// }

//console.log(checkBoardName(hello, newBoard));
// ('Cuisine') // returns "Board 'Cuisine' was created"
// // Adds the board `Cuisine` to `hello`
// createBoard('Tester Board') // returns "Board already exists"
//
