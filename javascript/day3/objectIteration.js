const myObj = {name: 'Wellington', age: 44, address: '6555 Carnegie'};

function clone(ojb) {
  let copyObj = {};
  for(let obj in myObj){
    copyObj[obj] = obj[key];
  }
  return copyObj;
}
