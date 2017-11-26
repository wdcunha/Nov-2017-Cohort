a = [2,4,5,8];

function double(arr) {
  if (arr.length === 0) {
    return [];
  } else {
    return ([arr[0] * arr[0]]).concat(double(arr.slice(1)));
  }
}

console.log(double(a));
