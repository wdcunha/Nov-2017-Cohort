function greetings(func) {
  console.log('Hello');
  func();
  console.log('Goodbye!');
}

greetings(function(){
  console.log('>>>>>>>');
  console.log('>>>>>>>');
  console.log('>>>>>>>');
});
