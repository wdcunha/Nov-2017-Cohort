const plus = function (a, b) { return a + b };
const mult = function (a, b) { return a*b };
const multAndPlus = function (a, b, c) { return plus(mult(a,b), c) };

function reduce(array, fn) {
  let acc = array[0]
  for (let i = 1, max = array.length; i < max; i += 1) {
    acc = fn(acc, array[i], i)
  }
  return acc
}


let arr = [1,2,3,4,5];


console.log(reduce(arr, plus)); // returns 15
console.log(reduce(arr, mult)); // returns 120
console.log(reduce(arr, multAndPlus)); // returns 239
