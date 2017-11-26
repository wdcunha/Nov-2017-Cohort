// Are brackets balanced? Next Module
// Create a function areBalanced that takes a string containing opening and closing parenthesis return if true all
// open parenthesis are properly closed otherwise return false. Use a stack data structure to solve this problem.
//
// Example usage:
//
// areBalanced("(1 + (2 * 8) ** (3 + 4))") // returns true
// areBalanced("(4 + 4 + (6 * 9)") // returns false
// areBalanced("function rob (arg) { return (arg }") // returns false
// areBalanced("hello )") // returns false

function areBalanced(str) {
  message = "";

  // arr = str.split('');
  // console.log(arr);
  // caracter = str.split('').pop();
  // console.log(caracter);
  // return caracter;
  return str.split('').pop();
  // while (counter <= arr.length) {

  // } (i = 0; i < arr.length; i++) {
    // console.log(arr.length);
    // console.log(arr[i]);

  }

  // if (true) {
  //   message = "All open parenthesis are properly closed!"
  //   return message;
  // } else {
  //
  //   message = "All open parenthesis are properly closed!"
  // }

console.log(areBalanced("(1 + (2 * 8) ** (3 + 4))"));
