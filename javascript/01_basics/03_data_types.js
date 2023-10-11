// JS -> dynamic, weakly types
// static typing -> TypeScript

// Primitive data types
// stored on stack
// passed by value

// string
const name = 'string';
// number
let age = 5;
age = 5.5;
// bigInt (ES2020)
const bigInt = 1234567890123456789012345678901234567890n; // n at the end
// boolean
const hasKids = true;
// null
const car = null; // typeof null is object (wrong!)
// undefined
let sex = undefined; // no value assigned
// symbol (ES6)
let id = Symbol('symbol'); // unique

// Reference data types
// stored on heap
// passed by reference

// object literals (plain objects)
let person = {
  name: 'John',
  age: 30,
  favoriteColors: ['red', 'blue', 'green'],
};
console.log(person);
person.name = 'Bob';
// functions
const myFunction = () => {
  console.log('function');
};
// dates
let birthDate = new Date();
// class instances
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}
let person1 = new Person('John');
person1.sayHello();
// collection types: arrays, maps, sets, weakMaps, weakSets
let numbers = [1, 2, 3];
let array = new Array();
array.push('value');
let map = new Map();
map.set('key', 'value');
let set = new Set();
set.add('value');
let weakMap = new WeakMap();
weakMap.set(person, 'test');
// errors
let error = new Error('Error message');
// promises
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 1000);
});
promise
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
// newer syntax with async/await
async function myAsyncFunction() {
  const result = await promise;
  console.log(result);
}
await myAsyncFunction();
// Print different types
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
let val;

// Number to string
val = 5;
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(val);
console.log(val);
console.log(typeof val);
console.log(val.length);

// Boolean to string
val = String(true);
// val = val.toString();
console.log(val);
console.log(typeof val);
console.log(val.length);

// Same for other data types
// Date to string
// Array to string
// Object to string

// String to number
val = Number('5');
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log((3.141592654).toFixed(2)); // works only with numbers
// some other examples
val = Number(true); // 1 (true), 0 (false), null (0), 'hello' (NaN), [1, 2, 3] (NaN), {name: 'John'} (NaN)
val = parseInt('100'); // parseFloat()
console.log(val);

// Type Coersion
const val1 = 5;
const val2 = '6';
const sum = val1 + val2; // string + number => string, number + string => string
console.log(sum);
console.log(typeof sum);
