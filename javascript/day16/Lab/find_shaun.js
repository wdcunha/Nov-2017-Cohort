function find (arr, fn) {
  // Iterate through arr
  for (let i = 0, max = arr.length; i < max; i++) {
    // If the callback function run with arr[i] evaluates to true arr[i] is returned
    if (fn(arr[i],i,arr)) return arr[i]
  }
}
