//const arr = ['hey','bye', [1,2],['a','b']];
const arr = ['hey','bye', 'a','b', [1,2]];

function isHomogenous(array) {

  for(let x of array){

    if(typeof x !== typeof array[0]){
       //console.log(true);
       return false;
    }
  }
  return true;
}

console.log(isHomogenous(arr));
