

function numberSeq() {
  let num = -1;
  return function () {
    return num+=1;
  }
}

// Example Usage:
//
// const numbers = numberSeq();
// numbers() // returns 0
// numbers() // returns 1
// numbers() // returns 2
// numbers() // returns 3
// numbers() // returns 4

// ************** MAX SOLUTION ***************

let l = console.log;

function numberSeq (a = 0, b = 1) {
  let count = a - b;
  console.log(`a: ${a} -  b: ${b}`);
  return function () {
    console.log(`inside -- a: ${a} -  b: ${b}`);
    return count += b;
  }
}

const numbers = numberSeq();
l(numbers()); // returns 0
l(numbers()); // returns 1
l(numbers()); // returns 2
l(numbers()); // returns 3
l(numbers()); // returns 4
