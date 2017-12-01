function find(arr, fn){
  newArr = []
  for (let i = 0; i < arr.length; i += 1) {
    if(fn(arr[i]) === true){
      newArr.push(arr[i]);
    }
  }

  return newArr[0]
}
