// let numArray = [parseInt(firstNum), parseInt(secondNum), parseInt(thirdNum)];

var str = '3 , 6, 2, 56, 32, 5, 89, 32';

var arr = str.split(',');

console.log(arr);
// var array = [3 , 6, 2, 56, 32, 5, 89, 32];

     //console.log(typeof(numArray[0]));
     let largest = 0;
     for(let i = 0; i < arr.length; i++){
       if(arr[i] > largest) {
         largest = arr[i];
       }
     }

  console.log(largest);
