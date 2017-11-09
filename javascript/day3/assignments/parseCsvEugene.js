let csvData=`
id,first name,last name,email
1,jane,doe,wildmirror@yahoo.com
2,john,doe,tamepool@hotmail.com
3,sherlock,holmes,mag@glass.com
4,natalia,romanov,8legged@ninja.com
5,peter,quill,starlord@gmail.com
`;

function parseCSV(csv){
 const arr=csv.split("\n");
 arr.pop();
 arr.shift();
 console.log(arr);
 let result=new Array;
 //console.log(`Result: ${result}`);
 console.log(result);
 const keys = arr[0].split(',');
 //console.log('key: ' + keys);
 console.log(keys);
 arr.unshift();
console.log('Result');
 for (let i=0; i< arr.length; i++){
   console.log(i);
   result[i]={};
   info=arr[i].split(',');
   result[i][keys[i]]=info[i];
   //console.log('Result[i]: ' + result[i]);

   console.log(result[i]);
 }
 return result;
}
//console.log('parseCSV: ' + parseCSV(csvData));
console.log(parseCSV(csvData));
