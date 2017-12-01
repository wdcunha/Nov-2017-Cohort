function after(checkNum, fn) {
  let i = 0;
  return function (...args) {
    if (i < checkNum) {
      i++;
    } else {
      return fn(...args);
    }
  }
}


//Alt Way
// function after(checkNum, fn) {
//   let i = 0;
//   return function (...args) {
//     if (i === checkNum) {
//       return fn(...args);
//     }
//     i++;
//   }
// }
