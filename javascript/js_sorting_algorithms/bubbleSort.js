const {log} = console;
function bubbleSort (arr) {
  posSmall = null;
  posBigger = null;
  for (let i = arr.length-1; i >= 0; i--) {
    for (let j = arr.length-1; j >= 0; j--) {
      console.log(i, j);
      if (arr[i] < arr[j]) {
        // console.log(i, j);
        posBigger = arr[j];
        posSmall = arr[i];
        arr[j] = posSmall;
        arr[i] = posBigger;
      }
    }
  }
  // my iteration here
}

let unsortedArr = [4,7,8,5,2,1,10,9]
log('unsorted arr:', unsortedArr);
bubbleSort(unsortedArr);
log('sorted arr:', unsortedArr);
