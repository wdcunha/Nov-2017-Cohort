let csvData = `id,first name,last name,email
1,jane,doe,wildmirror@yahoo.com
2,john,doe,tamepool@hotmail.com
3,sherlock,holmes,mag@glass.com
4,natalia,romanov,8legged@ninja.com
5,peter,quill,starlord@gmail.com`;

function parse(string){
 //store string into array
 const sentences = string.split('\n');
 //separte into 2-D
 const multiArr = [];
 let temp = [];
 for(let i = 0; i < sentences.length; i++) {
   temp = sentences[i].split(',');
   multiArr.push(temp);
 }

 let resultArr = [];


 for(let i = 1; i < multiArr.length; i++) {
   //let tempArr = [];
   let tempObj = {};
   //console.log("multiArr");
   for(let j = 0; j < multiArr[0].length; j++) {
     //console.log(multiArr[i][j]);
     tempObj[multiArr[0][j]] = multiArr[i][j];
   }
   resultArr.push(tempObj);
 }
 return resultArr;
}
console.log(parse(csvData));
