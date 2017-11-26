const counter = {
  count: 0,
  step: 1,
  set (num) {
    this.count = num;
    return this;
  },
  setStep (num) {
    this.count = num;
    return this;
  },
  inc () {
    // this.count += 2;
    // return this.count;
    this.count += this.step;
  },
  dec () {
    this.count -= this.step;
  },
  now () {
    return this.count;
  },
  reset () {
    this.step = 1;
    this.count = 0;
    return this;
  }
}

// const myCounter = {
//   count: 0,
//   step: 1,
//   set (num) {
//     this.count = num;
//     return this;
//   },
//   setStep (num) {
//     this.step = num;
//     return this;
//   },
//   inc () {
//     return this.count += this.step;
//   },
//   dec () {
//     return this.count -= this.step;
//   },
//   now () {
//     return this.count;
//   },
//   reset () {
//     this.step = 1;
//     this.count = 0;
//     return this;
//   }
// }
