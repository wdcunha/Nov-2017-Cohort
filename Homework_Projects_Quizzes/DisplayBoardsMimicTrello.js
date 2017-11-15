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

// Object.keys(hello).forEach(function(key) {
//   //console.log(`${key}`);
//     for (var subkey in hello[key]) {
//         console.log(subkey);
//     }
//   });

console.log(hello['Tester Board']['To Do']);
  // for (let key in hello) {
  //   console.log(`The key is ${key}, the value is ${hello[key]}`);
  // }

function listBoards(obj) {
  let result = [];
  //console.log(obj.length);
  for(let boards in obj) {
    //result += obj[boards].split(',');
    //  if (object.hasOwnProperty(boards)) {
      //}
    }

    return result;
}
//   let pipe = '|'
//   let dash = "\n|------------------\n";
//   let result = `${dash}`;
//   for(let boards in obj) {
// //    if (obj !== '') {
//         result += `\n${obj[boards]}\n${dash}`;
// //    } else {
// //        result = "There's no data to print!";
// //        return result;
//     }
//     return result;
//   }
//}

console.log(listBoards(hello));
