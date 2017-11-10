const paragraph = `Food truck palo santo actually post-ironic prism, bushwick synth. Intelligentsia leggings food truck glossier, pabst prism pinterest kickstarter keffiyeh microdosing cray wolf salvia. Locavore food truck helvetica kickstarter. Pabst prism pinterest kickstarter keffiyeh microdosing cray wolf salvia. Locavore food.`;

function countWords(string) {
  const arr = string.split(' ');
  const result = {};
  for(let word of string){
    const loWord = word.toLowerCase();
    if (result[loWord] > 0) {
      result[loWord] +=1;
    } else {
      result[loWord] = 1;
    }
  }
  return result;
}

console.log(countWords(paragraph));


/*
function countChars(string) {
  const arr = string.split('');
  const result = {};
  for(let char of arr) {
    const loChar = char.toLowerCase();
    if(result[loChar] > 0) {
      result[loChar] += 1;
    } else {
      result[loChar] = 1;
    }
  }
  return result;
*/
