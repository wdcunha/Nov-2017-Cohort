function add(a, b) {
  const result = a + b;
  return result;
}

console.log(add(4,5));
console.log(add(40,15));
console.log(add('Hello',' World!'));

function increment(x) {
  const number = x + 1;
  return number;
}

console.log(increment(5));
console.log(increment(8));
console.log(increment());

function insult(name) {
  const x = Math.ceil(Math.random() * 3);
  if(x === 1) {
    return `${name}, you doofus`;
  } else if(x === 2) {
    return `${name}, you dummy`;
  } else if(x === 3) {
    return `${name}, you smell`;
  }
}

console.log(insult('Tim'));
console.log(insult('Abc'));

function repeat(string, i) {
  let newString = '';
  for(let x = 0; x < i; x++) {
    newString += string;
  }
  return newString;
}

console.log(repeat('abc', 10));
console.log(repeat('Hello ', 15));
