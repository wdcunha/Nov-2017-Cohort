const StringExtras = {
  repeat (a, n) {
    /*
      the code below totally works... but is a kind of a cheap way to do this
      problem for the purposes of the lab

        return a.repeat(n)
    */
    return Array(n+1).join(a);
  },
  leftPad (a, n) {
    return `${this.repeat(" ", n)}${a}`;
  },
  rightPad (a, n) {
    return `${a}${this.repeat(" ", n)}`;
  },
  pad (a, n) {
    return this.leftPad(this.rightPad(a, n), n);
  },
  capitalize (a) {
    return `${a.charAt(0).toUpperCase()}${a.slice(1)}`;
  }
}

// STRETCH
const StringExtrasStretch = {
  repeat (n) {
    return Array(n+1).join(this);
  },
  leftPad (n) {
    return `${" ".repeat(n)}${this}`;
  },
  rightPad (n) {
    return `${this}${" ".repeat(n)}`;
  },
  pad (n) {
    /*
      The two lines of code below (within this comment) are equivalent to the
      one line of code below (outside of this comment)

        let rightPaddedString = this.rightPad(n);
        return rightPaddedString.leftPad(n);

    */
    return this.rightPad(n).leftPad(n);
  },
  capitalize () {
    return `${this.charAt(0).toUpperCase()}${this.slice(1)}`;
  }
}

Object.assign(String.prototype, StringExtrasStretch);
