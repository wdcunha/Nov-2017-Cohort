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

function listBoards(string) {

  for (let boards in string) {
    let list = {};
    if (string !== '') {
      
      return string;
    } else {
      console.log("There's no data to print");
    }
  }
}

console.log(listBoards(hello))
