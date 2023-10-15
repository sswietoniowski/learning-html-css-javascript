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
  const result = a + b; // function scoped variable
  return result;
}

// Function expressions <- can be passed as arguments
const mul = function (a = 0, b = 0) {
  return a * b;
};

// Arrow functions (ES6) single line example <- can be passed as arguments too & is more succinct
/*

In JS there is a difference between function expressions and arrow functions:

arrow functions don't get their own 'this' keyword, instead they use the 'this' keyword of the parent scope (variable closure).

*/
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

// Recursion
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

/*

Higher order functions

Functions that operate on/with other functions

They can:
- Accept other functions as arguments
- Return a function

*/

// Accept other functions as arguments
function callTwice(func) {
  func();
  func();
}

// Return a function
function returnFunc() {
  return function () {
    console.log('Returned function called');
  };
}

// Passing functions as arguments, especially common while working with arrays, examples:

const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(function (number) {
  console.log(number);
});

// map
const doubled = numbers.map(function (number) {
  return number * 2;
});

// filter
const even = numbers.filter(function (number) {
  return number % 2 === 0;
});

// find
const firstEven = numbers.find(function (number) {
  return number % 2 === 0;
});

// reduce
let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});

// we can simplify the above code by using arrow functions, examples:
sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

// Not strictly related but useful, if you like functional programming (map, filter, reduce, etc) and you need to perform something like (for k in obj) in JS
// you can use Object.keys, Object.values, Object.entries, examples:

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

// Object.entries
Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});
