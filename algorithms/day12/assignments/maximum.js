// Maximum Next Module
// Write a method that returns the maximum number in an array in two ways without using Math.max or Array#sort:
//
// Using iteration.
// Using recursion.
// Benchmark your two solutions with console.time and console.timeEnd. Make sure to benchmark with really large arrays.
//
// Examples:
//
// maximum([ 213, 12, 66, 999 ]); # should return 999
// maximum([ 1, 2, 3, 11, 3, 6, 5 ]); # should return 11


function maximumLoop(arr) {
  let larg = 0;

  for(let i=0; i < arr.length; i++){
      if(arr[i] > larg){
        larg = arr[i];
      }
    }
  return larg;
}
// //////////////////////////////////////////////////////

function maxRec(arr, largeNum=0) {
  if (arr.length === 0) {
    return largeNum;
  }

  if (arr[0] > largeNum) {
    largeNum = arr[0];
  }
  return maxRec(arr.slice(1),largeNum)
}

console.log(maximumLoop([1110,1000, 22, 549, 43, 1220, 1001]));
console.log(maximumLoop([213, 12, 66, 999]));
console.log(maximumLoop([1, 2, 3, 11, 3, 6, 5]));

console.log(maxRec([1110,1000, 22, 549, 43, 1220, 1001]));
console.log(maxRec([213, 12, 66, 999]));
console.log(maxRec([1, 2, 3, 11, 3, 6, 5]));

console.time('Maximum Number by Recursive');
for(let j = 0; j < 1e7; j++) {
  maxRec([43, 1220, 1001]);
  maxRec([549, 43, 1220, 1001]);
  maxRec([1110,1000, 22, 549, 43, 1220, 1001]);
}
console.timeEnd('Maximum Number by Recursive');

console.time('Maximum Number by Loop');
for(let j = 0; j < 1e7; j++) {
  maximumLoop([43, 1220, 1001]);
  maximumLoop([549, 43, 1220, 1001]);
  maximumLoop([1110,1000, 22, 549, 43, 1220, 1001]);
}
console.timeEnd('Maximum Number by Loop');
