

function add (n1, n2 = 0) {
  return new Promise((resolve, reject) => {
    const addNums = n1 + n2;
    if(!isNaN(n1) || !isNaN(n2)){
      setTimeout(
        () => {
          resolve(addNums);
        }
      );
    } else {
      setTimeout(
        () => {
          reject(`${n1} and/or ${n2} doesn't seem to be a valid number!`)
        }
      );
    }
  });
}

function mult (n1, n2=1) {
  return new Promise((resolve, reject) => {
    const multNums = n1 * n2;
    if(!isNaN(n1) || !isNaN(n2)){
      setTimeout(
        () => {
          resolve(multNums);
        }
      );
    } else {
      () => {
        reject(`${n1} and/or ${n2} doesn't seem to be a valid number!`)
      }
    }
  });
}

function div (n1, n2=1) {
  return new Promise((resolve, reject) => {
    const divNums = n1 / n2;
    if(!isNaN(n1) || !isNaN(n2) || n2 != 0){
      setTimeout(
        () => {
          resolve(divNums);
        }
      );
    } else {
      () => {
        reject(`${n1} and/or ${n2} doesn't seem to be a valid number!`)
      }
    }
  });
}

function pow (n1, n2=0) {
  return new Promise((resolve, reject) => {
    const powNum = n1**n2;
    if (!isNaN(n1) || !isNaN(n2)) {
      setTimeout(
        () => {
          resolve(powNum);
        }
      )
    } else {
      setTimeout(
        () => {
          reject(`${n1} and/or ${n2} doesn't seem to be a valid number!`)
        }
      )
    }
  });
}

function sub (n1, n2=0) {
  return new Promise((resolve, reject) => {
    const powNum = n2-n1;
    if (!isNaN(n1) || !isNaN(n2)) {
      setTimeout(
        () => {
          resolve(powNum);
        }
      )
    } else {
      setTimeout(
        () => {
          reject(`${n1} and/or ${n2} doesn't seem to be a valid number!`)
        }
      )
    }
  });
}


add(9)
  .then(function (r) { return add(9, r) }) // r is 9
  .then(function (r) { return add(2, r) }) // r is 18
  .then(function (r) { return mult(5, r) }) // r is 20
  .then(function (r) { return div(r, 10) }) // r is 100
  .then(console.info) // logs 10
  .catch(console.error) // error logs 'fitty-two is not a valid number'

  pow(2)
    .then(function (r) { return pow(2, r) }) // r is 2
    .then(function (r) { return pow(2, r) }) // r is 4
    .then(function (r) { return mult('fitty-two', r) }) // r is 16, but the mult('fitty-two', ...)
    // should reject
    .then(console.info) // never makes it here
    .catch(console.error) // error logs 'fitty-two is not a valid number'
