// JS -> dynamic, weakly types
// static typing -> TypeScript

// Primitive data types
// stack

// string
const name = 'string';
// number
let age = 5;
age = 5.5;
// boolean
const hasKids = true;
// null
const car = null; // typeof null is object (wrong!)
// undefined
let sex = undefined; // no value assigned
// symbol (ES6)
let id = Symbol('symbol'); // unique

// Reference data types
// heap

// arrays
let numbers = [1, 2, 3];
// object literals
let person = {
  name: 'John',
  age: 30,
};
// functions
const myFunction = () => {
  console.log('function');
};
// dates
let birthDate = new Date();
// anything else

console.log(typeof name);
console.log(typeof age);
console.log(typeof hasKids);
console.log(typeof car);
console.log(typeof sex);
console.log(typeof id);
console.log(typeof numbers);
console.log(typeof person);
console.log(typeof myFunction);
console.log(typeof birthDate);

// Type Conversion
