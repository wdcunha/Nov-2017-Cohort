//const arrA = ['firstName', 'lastName'];
//const arrB = ['John', 'Snow'];

const arrA = [1, 2, 3];
const arrB = [4, 5, 6];

function zip(array1, array2) {

  let result = [];

  if (array1.length == array2.length) {

    for (let i = 0; i < array1.length; i++) {
      result[i] = [array1[i] , array2[i]]
    }
  } else {
    return result;
  }

  return result;
}

console.log(zip(arrA, arrB));
