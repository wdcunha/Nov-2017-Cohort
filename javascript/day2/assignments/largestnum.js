
let first = Math.floor(Math.random() * 100);
let second = Math.floor(Math.random() * 100);
let third = Math.floor(Math.random() * 100);

let largest = Math.max(first, second, third);

console.log(`first: ${first}\nsecond: ${second}\nthird: ${third}`);

console.log(`The largest number is ${largest}`);


/*let numArray = [parseInt(firstNum), parseInt(secondNum), parseInt(thirdNum)];
     //console.log(typeof(numArray[0]));
     let largest = 0;
     for(let i = 0; i < numArray.length; i++){
       if(numArray[i] > largest) {
         largest =numArray[i];
       }
     }*/
