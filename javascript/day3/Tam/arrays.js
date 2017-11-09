const arr = ['hello', 'bootcamp', 'students'];

for(let i = 0; i < arr.length; i++) {
  console.log(`length of ${arr[i]} is ${arr[i].length}`);
}

for(let word of arr) {
  console.log(word.toUpperCase());
}
