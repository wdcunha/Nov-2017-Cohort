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

function find (arr, fn) {
  let newArr = [];
  for (let i = 0, max = arr.length; i < max; i += 1) {
    if (fn(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr[0];
}


  let arr = [1,2,3,4,5,6,15,35];

// find(arr, even) // returns 2
// find(arr, odd) // returns 1
// find(arr, above(3)) // returns 4
//
find(
  arr,
  function (bla, blu, arr) { return bla % 5 === 0 }
) // returns 5 (or, the first multiple of 5)
