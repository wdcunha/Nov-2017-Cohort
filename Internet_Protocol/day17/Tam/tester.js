// // When you require a module, the variable you set (in this case `greeter`) will
// // equal what the module exports which is the sayHi function in our case
//
// const greeter = require('./greeting.js');
//
// console.log(greeter('Well'));


// When you require a module, the variable you set (in this case `greeter`) will
// equal what the module exports which is the sayHi function in our case
// const greeter = require('./greetings.js');

const greeter = require('./greeting.js');

console.log(greeter.sayHi('Tam'));
console.log(greeter.sayBye('Tam'));
