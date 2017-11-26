const {log} = console;

function a() {
  console.log("I'm in function a");
}

function b() {
  a();
  console.log("I'm in function b");
}

function c() {
  b();
  console.log("I'm in function c");
}

function d() {
  c();
  console.log("I'm in function d");
}

d();
