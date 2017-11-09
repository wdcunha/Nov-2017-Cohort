function add(a) {
    return a + 1;
}

console.log(add(1));
console.log(add(5));

function repeat(string, i) {
  let newString = '';
  for (let x = 0; x < i; x++) {
    newString += string;
  }
    return newString;
}

console.log(repeat('abc ', 10));
