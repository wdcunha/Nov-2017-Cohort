// Create an object named, StringExtras, that contain several utility methods for strings to supplant Javascript's own meager string library.
//
// It should have a:
//
// repeat method that duplicates a string n of times.
// leftPad method that adds n number of spaces to the left of a string.
// rightPad method like leftPad, but adds spaces to the right of string.
// pad method which adds n number of spaces on either side of a string.
// capitalize method which uppercases the first letter of a string.
// Example usage:
// let a = 'you';
// StringExtras.repeat(a, 3); // returns 'youyouyou'
// StringExtras.repeat(' ', 6); // returns '      '
// StringExtras.leftPad(a, 3); // returns '   you'
// StringExtras.rightPad(a, 5) + 'me'; // returns 'you     me'
// StringExtras.pad(a, 3); // returns '   you   '
// StringExtras.capitalize(a); // returns 'You'

const stringExtras = {
  repeat(str,n) {
    let word = '';
    let counter = 1;
    while (counter <= n) {
      word += str;
      counter++;
    }
    return word;
  },
  leftPad(str,n) {
    return this.repeat(" ",n) + str;
  },
  rightPad(str,n) {
    return str + this.repeat(" ",n);
  },
  pad(str,n) {
    return this.repeat(" ",n) + str + this.repeat(" ",n);
  },
  cap(str) {

    return str.charAt(0).toUpperCase() + str.slice(1  );
  }
}
