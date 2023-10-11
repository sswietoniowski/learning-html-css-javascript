// var, let, const
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

/*

Main difference between variables declared with var and the ones declared with let is that variables declared with var are function scoped, while the ones declared with let are block scoped.

Example:

if (true) {
  var a = 1;
  let b = 2;
}

console.log(a); // 1

console.log(b); // ReferenceError: b is not defined

Global var are attached to the window object, while global let are not.

In modern JS we should use let and const instead of var.

More on that here:

https://bulldogjob.pl/readme/var-let-i-const-hoisting-i-zasieg-w-javascript?gad=1

*/

// Initialize a variable
var greeting;
console.log(greeting); // undefined
greeting = 'Hello';
console.log(greeting); // Hello

// Variable naming rules:
// letters, numbers, _, $
// Can not start with a number
//var 1name = 'test'; // SyntaxError
//var name-one = 'test'; // SyntaxError
// Names are case sensitive
// Camel Case
var firstName = 'John';
// Pascal Case used for class names

// Let
let newName = 'Alice Fox';
console.log(newName);
newName = 'Bob Smith';
console.log(newName);

// Const
const name2 = 'John';
console.log(name2);
// name2 = 'Steve'; // TypeError
// const name3; // SyntaxError
const person = {
  name: 'John Doe',
  age: 30,
};
console.log(person);
person.name = 'Bob Smith';
console.log(person);
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(11);
console.log(numbers);
// Const is preferred this days

// Block scope with let & const

// Global Scope
var a = 1;
let b = 2;
const c = 3;

console.log('Global scope: ', a, b, c);

function test() {
  var a = 4;
  let b = 5;
  const c = 6;

  console.log('Local scope: ', a, b, c);
}

test();

if (true) {
  // Block scope
  var a = 7; // a would be redefined in the global scope (var is "weird" and not block scope, so these days it is not recommended)
  let b = 8;
  const c = 9;

  console.log('If block scope: ', a, b, c);
}

console.log('Global scope: ', a, b, c);

// var has function scope
// let and const have block scope (as it should be in most cases)
