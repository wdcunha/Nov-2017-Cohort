function add(a,b) {
    return a+b; }

const add  = (a,b) => a+b;

// \\\\\\\\\\\\\\\\\\\\\

function notNull (obj) {
    return obj !== null; }

const notNull = obj => obj !== null;
// \\\\\\\\\\\\\\\\\\\\\\\\\\\

function flip (fn) {
    return function (a,b) {
        return fn(b,a);
    }
}

const flip = fn => (a,b) => fn(b,a);

// sample of use:

function minus (n1,n2){
    return n1 - n2;
}
minus(20,5);

const flippedMinus = flip(minus);

flippedMinus;

flippedMinus(20,5);


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// Arrow functions' this is scoped to the block it is declared in.
// Meaning that it is set when created and can never change.

const myObj = {
  a: () => this, // this is the Window
  b: function () { return (() => this)() } // this is myObj
}

// see:
myObj
{a: ƒ, b: ƒ}
myObj.a()
Window {frames: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
myObj.b()
{a: ƒ, b: ƒ}


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function loud (fn, ...args) {
  console.log(`Calling ${fn.name} with `, args);
  const returnedVal = fn(...args); // ð `fn` is called.
  console.log(`Called ${fn.name} & returned ${returnedVal}`);
  return returnedVal;
}

loud(Math.max,1,2,44,58,4,33);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// EXERCISE: Custom logger
function loud (logFn, fn, ...args) {
  logFn(`Calling ${fn.name} with `, args);
  const returnedVal = fn(...args); // ð `fn` is called.
  logFn(`Called ${fn.name} & returned ${returnedVal}`);
  return returnedVal;
}

loud(console.log, add,1,2);
loud(console.warn, add,1,2);
loud(console.error, add,1,2);


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Higher-Order: each

function each (fn, arr) {
  for (let val of arr) {
    fn(val);
  }
}

each(val => cosole.log(val), [1,2,3,4,5] ) //


function each (fn, arr) {
  for (let i = 0, max = arr.length; i < max; i += 1) {
    fn(arr[i], i, arr);
  }
}

each((val, index) => cosole.log(val, index), [1,2,3,4,5] ) //
each((val, index, arr) => cosole.log(val, index), [1,2,3,4,5] ) //optional
each((val, index, arr) => cosole.log(val, index,arr), [1,2,3,4,5] ) //optional


function map (fn, arr) {
  let newArr = [];
  for (let i = 0, max = arr.length; i < max; i += 1) {
    newArr.push(fn(arr[i], i, arr));
  }
  return newArr;
}

// usage:

map((val, index) => index, [1,23,3,4,4,5])
map((val, index) => index ** index, [1,23,3,4,4,5])
map((val, index) => index ** index, [1,23,3,4,4,5])
// returns [1, 1, 4, 27, 256, 3125]


// \\\\\\\\\\\\\\\\

setInterval(() => console.log('waited...'),1000)


let count = 0;
const intervalId = setInterval(() => {
    console.log(`This callback was called ${count += 1}`)
  },
  1000
);

setTimeout(() => {
    clearInterval(intervalId)
  },
  20000
);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const fooBar = foo("An arg");

function countsUpTo (num) {
  let count = 0;
  const intervalId = setInterval(
    () => {
      if (count > num) return clearInterval(intervalId);
      console.log(`At num ${count += 1}`);
    }, 500
  )
}

const fooBar = foo("An arg");

function countsUpTo (num) {
  let count = 0;

  const counter = () => {
    if (count > num) return clearInterval(intervalId);
    console.log(`At num ${count += 1}`);
  };

  console.dir(counter)

  const intervalId = setInterval(counter , 500);
}

// the result will be undefined because counter is not inside the function countsUpTo, but still keep on counting in the message error

const fooBar = foo("An arg");

const counter = () => {
  if (count > num) return clearInterval(intervalId);
  console.log(`At num ${count += 1}`);
};

function countsUpTo (num) {
  let count = 0;


  console.dir(counter)

  const intervalId = setInterval(counter , 500);
}






// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\****************
let scriptLocal = "I'm global";

function foo (fooArg) {
  let fooLocal = "I'm foo";
  return function bar (barArg) {
    console.log(
      fooLocal, fooArg, barArg
    );
  };
};

const fooBar = foo("An arg");
fooBar(8);
VM1393:6 I'm foo An arg 8
undefined
foo
ƒ foo(fooArg) {
  let fooLocal = "I'm foo";
  return function bar (barArg) {
    console.log(
      fooLocal, fooArg, barArg
    );
  };
}
fooBar
ƒ bar(barArg) {
    console.log(
      fooLocal, fooArg, barArg
    );
  }
console.dir(foo)
ƒ foo(fooArg)arguments: nullcaller: nulllength: 1name: "foo"prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM1393:3[[Scopes]]: Scopes[2]0: Script {type: "script", name: "", object: {…}}1: Global {type: "global", name: "", object: Window}
undefined


console.dir(fooBar)
VM1465:1 ƒ bar(barArg)arguments: nullcaller: nulllength: 1name: "bar"prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM1393:5[[Scopes]]: Scopes[3]0: Closure (foo)fooArg: "An arg"fooLocal: "I'm foo"1: Script {type: "script", name: "", object: {…}}2: Global {type: "global", name: "", object: Window}
undefined

fooBar()
VM1393:6 I'm foo An arg undefined
undefined
fooBar
ƒ bar(barArg) {
    console.log(
      fooLocal, fooArg, barArg
    );
  }

  const fooBaz = foo('whatever! >>> 888 <<<<')
undefined
console.dir(fooBaz)
