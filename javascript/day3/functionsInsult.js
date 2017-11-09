function insult(a) {
  const ins = [', you idiot', ', you stupid', ', you fool'];
  const ram = Math.ceil(Math.random * 3);
  const result = `${a} ${ins[ram]}`;
  return result;
}

console.log(insult('John'));
/*
function insult(name) {
  const x = Math.ceil(Math.random() * 3);
  if(x === 1) {
    return `${name}, you doofus`;
  } else if(x === 2) {
    return `${name}, you dummy`;
  } else if(x === 3) {
    return `${name}, you smell`;
  }
}

console.log(insult('Tim'));
console.log(insult('Abc'));
}*/
