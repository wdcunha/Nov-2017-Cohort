//  Create List
// Write a function named createList that takes two arguments, boardName and listName. The function should create a list with name
// listName within board boardName with no cards to start. If the boardName doesn't exist, it should return Board doesn't exist
// and, if a list with the same name exists already, it should return List name already exists.

const hello = {
    'Tester Board': {
      'To Do': ['Laundry', 'Buy Apples', 'Pay Phone Bill'],
      'Doing': ['Laundry', 'Studying Javascript', 'Studying HTML', 'Studying Ruby'],
      'Done': ['Laundry']
    },
    'Dreams': {
      'Wish List': ['Conquer the Seven Kingdoms', 'Get my baby back', 'My hand needs to chill'],
    },
    'Cuisine': {
      'Region':['African', 'European', 'Brazilian', 'Asian'] }
};

board = "Cuisine";
list = "Region";

function createList(boardName, listName) {
  let arr = Object.keys(boardName);
  arr.forEach(function(key) {
    if (key !== boardName) {
      message = `Board '${boardName}' doesn't exist, so your List cannot be added!`;
      return message;
    } else if (boardName[key] != listName) {
      message = `The list '${boardName[key]}' already exists, so your List cannot be added!`;
      return message;
    } else {
      boardName[] = [];
      message = `Board '${boardName}' was created!`;
    }
  });
  return message;
}

console.log(listBoards(hello[board],list));
console.log(listBoards(hello));
