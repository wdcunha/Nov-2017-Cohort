const {log} = console;

function a() {
  b();
  console.log("I'm in function a");
}

function b() {
  c();
  console.log("I'm in function b");
}

function c() {
  console.log("I'm in function c");
}

a();
