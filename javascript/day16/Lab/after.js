
function after(n,fn) {
  let count = 0;
  return function (...args) {
    count++;
    if (count> n) {
      return fn(...args);
    }
  }
}


const add = function (a, b) { return a + b};
add(1,1) // returns 2
add(1,3) // returns 4
add(2,3) // returns 5

// after usage example
const addAfter3Tries = after(3, add);
addAfter3Tries(4,5) // returns undefined
addAfter3Tries(4,2) // returns undefined
addAfter3Tries(1,6) // returns undefined
addAfter3Tries(5,5) // returns 10 (add is only allowed to return now)
addAfter3Tries(1,5) // returns 6
