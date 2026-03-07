//Q-1
console.log(a);
var a = 10;

//output
//undefined

//Q-2
sayHello();

function sayHello() {
  console.log("Hello");
}
//ouptut
//Hello
//Hoisting is a JavaScript behaviour where variable and function declarations are
// moved to the top of their scope during the execution context creation phase.

//Q-3

var a = 5;

function test() {
  console.log(a);
  var a = 10;
}

test();

//output
//undefined

//Q-4

var a = 10;

function test() {
  console.log(a);
}

function test2() {
  var a = 20;
  test();
}

test2();

//output
//10

//Q-5

var a = 1;

function foo() {
  console.log(a);
  var a = 2;
  console.log(a);
}

foo();

//output
//undefined 2
