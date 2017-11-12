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

newBoard = 'Dreams';
console.log(Object.keys(hello));

function createBoard(obj, boardName) {

  if (Object.keys(obj) !== boardName) {
    obj[boardName] = [];
    message = `Board ${boardName} was created!`;
  } else {
    message = `Board ${boardName} already exists!`;

  }
  return message;
}
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
console.log(createBoard(hello, newBoard));
console.log(Object.keys(hello));
// ('Cuisine') // returns "Board 'Cuisine' was created"
// // Adds the board `Cuisine` to `hello`
// createBoard('Tester Board') // returns "Board already exists"
//
