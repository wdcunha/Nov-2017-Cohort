
function before(n,fn) {
  let count = 0;
  return function (...args) {
    count++;
    if (count <= n) {
      return fn(...args);
    }
  }
}

const add = function (a, b) { return a + b};
add(1,1) // returns 2
add(1,3) // returns 4
add(2,3) // returns 5


// before usage example
const only3Times = before(3, add);
only3Times(4,5) // returns 9
only3Times(4,2) // returns 6
only3Times(1,6) // returns 7
only3Times(5,5) // returns undefined (no more calls to add allowed)
only3Times(9,9) // returns undefined
