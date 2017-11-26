// Given what you've learned of prototype and this, can you think of a way to add all StringExtras methods to Javascript String's prototype?
//
// Modify StringExtras to act as an extension to String. You may have to do a bit of research to figure this one out.
//
// After your modifications, you should be able to do the following:
//
// Object.assign(String.prototype, StringExtras);
//
// let a = 'you';
//
// a.repeat(3); // returns 'youyouyou'
// a.leftPad(3); // returns '   you'
// a.rightPad(5) + 'me'; // returns 'you     me'
// a.pad(3); // returns '   you   '
// a.capitalize(); // returns 'You'
// Yes, this is very cool! But, it's regarded as bad practice. :(


const StringExtras = {
  repeat(n) {
    let counter = 1;
    let word = '';
    while (counter <= n) {
      word += this;
      counter++;
    }
    return word;
  },
  leftPad(n) {
    return `${" ".repeat(n)}${this}`;
  },
  rightPad(n) {
    return `${this}${" ".repeat(n)}`;
  },
  pad(n) {
    return `${" ".repeat(n)}${this}${" ".repeat(n)}`;
  },
  cap() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
}

Object.assign(String.prototype, StringExtras);
