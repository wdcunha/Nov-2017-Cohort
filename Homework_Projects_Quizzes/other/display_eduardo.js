const hello = {
    'Tester Board': {
      'To Do': ['Laundry', 'Buy Apples', 'Pay Phone Bill'],
      'Doing': ['x', 'Studying Javascript', 'Studying HTML', 'Studying Ruby'],
      'Done': ['y']
    },
    'Dreams': {
      'Wish List': ['Conquer the Seven Kingdoms', 'Get my baby back', 'My hand needs to chill'],
    },
    'Cuisine': {
      'Region':['African', 'European', 'Brazilian', 'Asian'] }
};

//Display Board

function displayBoard (boardName) {
let boardsArr = [];
let output = '';

for (let p in hello[boardName]) {
        if (hello[boardName].hasOwnProperty(p)) {
            output += '|------------------\n| '+ p + '\n|------------------\n|> ' + hello[boardName][p].join(`\n|> `) + '\n';
        }
    }
    return output
  }

console.log(displayBoard('CodeCore'))
