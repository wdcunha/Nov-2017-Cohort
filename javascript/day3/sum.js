//const arr = [1, 2, 3, 4, 5];
const arr = '1, 2, 3, 4, 5';

//function sum(){
function sum(array){
  let result = 0;
  for(let word of arr){
    if (word !== NaN) {  //if(typeof(word) === 'number' && !isNaN(word))
        result += word;
    }
  }
  return result;
}

//console.log(`${arr} = ${sum()}`);
console.log(sum(arr.split(',')));
