
function before(checkNum, fn) {
  let i = 0;
  return function (...args) {
    if (i !== checkNum) {
      i++;
      return fn(...args);
    }
  }
}
