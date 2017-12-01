


function reduce (arr, fn) {
  let newArr = [0];
  for (let i = 0, max = arr.length; i < max; i += 1) {
    newArr = fn(newArr, arr[i], i);
  }
  return newArr;
}


const plus = function (a, b) { return a + b };
const mult = function (a, b) { return a * b };
const multAndPlus = function (a, b, c) { return plus(mult(a,b), c) };

let arr = [1,2,3,4,5];

console.log(reduce(arr, plus)); // returns 15
reduce(arr, mult); // returns 120
reduce(arr, multAndPlus); // returns 239
