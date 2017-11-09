const arr = [['hey','bye'], [1,2],['a','b']];

function areValuesArrays(array) {

  for(let x of array){
    if(!Array.isArray(x)){
       //console.log(true);
       return false;
    } 
  }
  return true;
}

console.log(areValuesArrays(arr));
