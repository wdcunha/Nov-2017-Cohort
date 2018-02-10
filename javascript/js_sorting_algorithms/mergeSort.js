function mergeSortedArr(arr1, arr2) {
  const newArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i += 1;
    } else {
      newArr.push(arr2[j]);
      j += 1;
    }
  }

  return newArr
    .concat(arr1.slice(i))
    .concat(arr2.slice(j));
}

function mergeSort (arr) {
  if (arr.length <= 1) return arr;

  let middleIndex = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, middleIndex);
  let rightArr = arr.slice(middleIndex);

  return mergeSortedArr(
    mergeSort(leftArr),
    mergeSort(rightArr)
  );
}

const arrA = [1,4,6,7,8,9]
const arrB = [3,5,7,13,19]

console.log('arrA:', arrA);
console.log('arrB:', arrB);
console.log('merged array:', mergeSortedArr(arrA, arrB));
