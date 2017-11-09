
const arr = ['hey','bye', 'a','b', 1, 2, 'a', 'hey'];

function findDuplicates(array) {

  let dup = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        dup.push(array[j]);
      }
    }
  }
  return dup;
}

console.log(findDuplicates(arr));
