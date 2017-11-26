function factorialRecursive(n) {
  if(n === 0) {
    return 1
  } else {
    return n * factorialRecursive(n - 1);
  }
}

function factorialLoop(n) {
  let result = 1;
  for(let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
}

console.time('Factorial Recursive');
for(let j = 0; j < 1e7; j++) {
  factorialRecursive(1);
  factorialRecursive(10);
  factorialRecursive(100);
}
console.timeEnd('Factorial Recursive');

console.time('Factorial Loop');
for(let j = 0; j < 1e7; j++) {
  factorialLoop(1);
  factorialLoop(10);
  factorialLoop(100);
}
console.timeEnd('Factorial Loop');
