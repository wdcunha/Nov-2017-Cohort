// https://codecore.certified.in/learning_modules/lab-implement-filter-5/submissions
// given three functions:
// even returns true if its argument, n, is an even number (false otherwise)
const even = function (n) { return n % 2 === 0 };
// even returns true if its argument, n, is an odd number (false otherwise)
const odd = function (n) { return !even(n) };

// creates a function that returns true if its argument is above min
const above = function (min) {
  return function (n) {
    return n > min;
  }
}
// filter returns a new array that only contains elements of provided
// array where the callback function returns true.

function filter (arr, fn) {
  let newArr = [];
  for (let i = 0, max = arr.length; i < max; i += 1) {
    if (fn(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


  let arr = [1,2,3,4,5,6,15,35];

  // filter(arr, even) // returns 2,4,6
  // filter(arr, odd) // returns 1,3,5
  // filter(arr, above(3)) // returns 4,5,6
