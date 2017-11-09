const info = {firstName: 'Tam', lastName: 'Kbeili', programmingLanguages: ['Javascript', 'Ruby']};

for(let key in info) {
  console.log(`The key is ${key}, the value is ${info[key]}`);
}
