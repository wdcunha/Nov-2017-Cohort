function reverseString(string) {
  if(string.length === 0) {
    return '';
  } else {
    return string[string.length - 1] + reverseString(string.substring(0, string.length - 1));
  }
}

console.log(reverseString('Hi'));
console.log(reverseString('Hello'));
console.log(reverseString('H'));
console.log(reverseString(''));

function reverseString(string) {
  if(string.length === 0) {
    return '';
  } else {
    return reverseString(string.slice(1)) + string[0];
  }
}

console.log(reverseString('Hi'));
console.log(reverseString('Hello'));
console.log(reverseString('H'));
console.log(reverseString(''));
