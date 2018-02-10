const {log} = console;
function bubbleSort (arr) {
  let hasSwapped = true;
  const max = arr.length

  while (hasSwapped) {
    hasSwapped = false

    for (let i = 1; i < max; i += 1) {
      if (arr[i - 1] > arr[i]) {
        let tmp = arr[i];
        arr[i] = arr[i - 1]
        arr[i - 1] = tmp;

        hasSwapped = true
      }
    }
  }
}

function bubbleSortImp (arr) {
  let hasSwapped = true;
  const max = arr.length

  for (let j = max; j > 1 && hasSwapped; j -= 1) {
  // while (hasSwapped) {
    hasSwapped = false

    for (let i = 1; i < j; i += 1) {
      if (arr[i - 1] > arr[i]) {
        let tmp = arr[i];
        arr[i] = arr[i - 1]
        arr[i - 1] = tmp;

        hasSwapped = true
      }
    }
  }
}

function insertionSort (arr) {
  let held;
  const max = arr.length;
  for (let i = 1; i < max; i += 1) {
    held = arr[i];

    let j;
    for (j = i - 1; held < arr[j] && j >= 0; j -= 1) {
      arr[j + 1] = arr[j]
    }

    arr[j + 1] = held
  }
}


let unsortedArr = Array
  .from({length: 10})
  .map(() => Math.round(Math.random() * 30))

let unsortedArr1 = Array.from(unsortedArr)
let unsortedArr2 = Array.from(unsortedArr)

log('Before Bubble Sort:', unsortedArr1);
bubbleSort(unsortedArr1);
log('After Bubble Sort:', unsortedArr1);

log('Before Insertion Sort:', unsortedArr2);
insertionSort(unsortedArr2);
log('After Insertion Sort:', unsortedArr2);

log('Benchmarks!')
// Use Array.from to generate arrays from different
// kinds values including strings, objects and other
// arrays.
// With object containing a property length, you
// can use to create an array of a chosen size as
// shown below:
let bigRandomArr = Array
  .from({length: 10000})
  .map(() => Math.random() * 10000);

// Also, use it to clone arrays.
let bigRandomArr1 = Array.from(bigRandomArr);
let bigRandomArr2 = Array.from(bigRandomArr);
let bigRandomArr3 = Array.from(bigRandomArr);

console.time('bubbleSort');
bubbleSort(bigRandomArr1);
console.timeEnd('bubbleSort');

console.time('bubbleSortImp');
bubbleSortImp(bigRandomArr2);
console.timeEnd('bubbleSortImp');

console.time('insertionSort');
insertionSort(bigRandomArr3);
console.timeEnd('insertionSort');
