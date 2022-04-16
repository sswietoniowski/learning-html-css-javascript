// Using functions

// Function declarations
function greet(message) {
  // Old way of checking if parameter is undefined,
  // these days (ES6) we use the default parameter
  if (typeof message === 'undefined') {
    console.log('Hello Stranger!');
  } else {
    console.log(`Hello ${message}!`);
  }
}

function add(a = 0, b = 0) {
  return a + b;
}

// Function expressions
const mul = function (a = 0, b = 0) {
  return a * b;
};

const sub = (a, b) => a - b;

// IIFEs -> Immediately Invoked Function Expressions
(function (value) {
  console.log(`IIFE called with value: ${value}`);
})('Hello');

// We could use a function inside an object (in this case,
// it would be called a method)

// Property methods
const todo = {
  add: function (a, b) {
    return a + b;
  },
};

// Calling functions
greet();
greet('John');
console.log(add(5, 2));
console.log(sub(5, 2));
console.log(add());
console.log(sub());
console.log(todo.add(2, 3));
