const myArray = [[2,3,4,5], ["Hello CodeCore", 1, true, false]];

function printMulti(array) {
  for(let arr of array){
    console.log(arr);
    for(let x of arr){
      console.log(x);
    }
  }
}

printMulti(myArray);
