function clone(obj) {
  const result = {};
  for(let key in obj) {
    result[key] = obj[key];
  }
  return result;
}

const myObj = {a: 1, b: 2};
const clonedObj = clone(myObj);

console.log(myObj);
console.log(clonedObj);
