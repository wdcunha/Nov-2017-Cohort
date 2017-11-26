a = [5,7,1,3];

function sum(array) {
  if(array.length === 0){
    return 0;
  } else {
    return array[0] + sum(array.slice(1));
  }
}

console.log(sum([1,2,3]));
console.log(sum([10,22,43]));
console.log(sum([10,22,-43]));
console.log(sum([10]));
console.log(sum([]));

// function sum([firstItem, ...restOfArray]) {
//   if(array.length === 0) {
//     return 0;
//   } else {
//     return firstItem + sum(restOfArray);
//   }
// }
//
//
// console.log(sum([1,2,3]));
// console.log(sum([10,22,43]));
// console.log(sum([10,22,-43]));
// console.log(sum([10]));
// console.log(sum([]));
