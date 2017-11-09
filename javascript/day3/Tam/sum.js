// const arr = '';
//
// for(let x = 0; x < 4; x++) {
//   let y =
// }

const arr = '12,4,6,7,8,abc';

function sum(array) {
  let result = 0;
  for(let numberString of array) {
    const number = parseFloat(numberString);
    if(typeof(number) === 'number' && !isNaN(number)) {
      result += number;
    }
  }
  return result;
}

console.log(sum(arr.split(',')));
