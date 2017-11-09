let csvData = `
id,first name,last name,email
1,jane,doe,wildmirror@yahoo.com
2,john,doe,tamepool@hotmail.com
3,sherlock,holmes,mag@glass.com
4,natalia,romanov,8legged@ninja.com
5,peter,quill,starlord@gmail.com
`;

function parseCSV(csv) {
  let myArray = csv.split('\n');
  myArray.pop();
  myArray.shift();
  console.log(myArray);
  let keys = myArray[0].split(',');
  console.log(keys);
  const newObj = {};
  for (let i = 0; i < keys.length; i++) {
    newObj[keys[i]] = keys[i];
    console.log(newObj);
  }
  // for(let x of csv.split(',')){
  //   if(typeof(x) != 'number'){
  //     console.log(x);
  //   } else {
  //     console.log(false);
  //   }
  // }
}

parseCSV(csvData);
