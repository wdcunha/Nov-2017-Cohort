

function maxRec(arr, largeNum=0) {
  if (arr.length === 0) {
    console.log('entered', largeNum);
    return largeNum;
  }

  if (arr[0] > largeNum) {
    largeNum = arr[0];
  }
  console.log(largeNum, arr, arr.length);
  return maxRec(arr.slice(1),largeNum)
}

console.log(maxRec([213, 12, 66, 999]));
