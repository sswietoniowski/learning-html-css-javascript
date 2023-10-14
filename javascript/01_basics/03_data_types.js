// JS -> dynamic, weakly types
// static typing -> TypeScript

// JS uses Garbage Collector to free memory automatically (that is the memory allocated on the heap)

// Primitive data types
// stored on stack
// passed by value

// string
const name = 'string';
// number -> 64 bit floating point, IEEE 754 standard, like double in Java/C#
let age = 5;
age = 5.5;
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
// bigInt (ES2020)
const bigInt = 1_234_567_890_123_456_789_012_345_678_901_234_567_890n; // n at the end, we can use _ for better readability
console.log(bigInt + 1n);
// boolean
const hasKids = true; // or false
// null
const car = null; // typeof null is object (wrong!): https://2ality.com/2013/10/typeof-null.html
// undefined
let sex = undefined; // no value assigned
/*

In JavaScript undefined and null both represent something without
a value but for different use cases. If you define a variable but don't
assign a value, the value is undefined. If you want something to not
have a value, you can assign it to null.

*/
// symbol (ES6)
let id = Symbol('symbol'); // unique

/*

All primitive types except null and undefined have object wrappers:

String
Number
BigInt
Boolean

These wrappers provide additional functionality to primitive types.

Example (methods):

let s = 'test';
console.log(s.length); // 4
let s = new String('test');
console.log(s.length); // 4

*/

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
// alternative syntax
person['name'] = 'Bob';
// add property
person.address = 'Warsaw';
// delete property
delete person.name;
console.log(person);
// we can create an object differently
let person2 = new Object();
person2.name = 'John';
console.log(person2);
// functions
const myFunction = () => {
  console.log('function');
};
// dates
let birthDate = new Date(); // current date and time in UTC (Universal Time Coordinated)
console.log(birthDate.getFullYear());
// normally dates are created with a specific timezones, to create a date in UTC:
let utcDate = new Date(Date.UTC(2020, 0, 1, 0, 0, 0));
console.log(utcDate);
// to convert local date to UTC:
console.log(birthDate.toUTCString());
// to convert UTC date to local:
console.log(utcDate.toLocaleString());
// class instances
class Person {
  // constructor
  constructor(name) {
    this.name = name;
  }

  // public method
  sayHello() {
    console.log(`Hello ${this.name}`);
  }

  // static initialization block
  static {
    console.log('static init');
  }

  // static method
  static sayHelloStatic() {
    console.log('Hello static');
  }

  // private field
  #privateField = 'private field'; // by convention starts with #

  // private method
  #privateMethod() {
    console.log(this.#privateField);
  }
}
let person1 = new Person('John');
person1.sayHello();
// inheritance
class Employee extends Person {
  constructor(name, salary) {
    super(name);
    this.salary = salary;
  }

  // this method overrides the parent method (is "virtual" in C#)
  sayHello() {
    console.log(`Hello ${this.name} with salary ${this.salary}`);
  }
}
/*

Even though current class syntax looks like classical inheritance, it is not. It is still prototypal inheritance.
Which means that classes are just syntactic sugar over prototypes.

Prototype is an object that is associated with every functions and objects by default in JavaScript, where function's
prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.

*/
let employee = new Employee('Bob', 1000);
employee.sayHello();
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
// await myAsyncFunction();
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
// Locale
// working with locales and i18n
val = parseFloat('100.30');
console.log(Intl.NumberFormat('pl-PL').format(val));
console.log(
  Intl.NumberFormat('en-US', { style: 'currency', currency: 'PLN' }).format(val)
);

// Type Coersion
const val1 = 5;
const val2 = '6';
const sum = val1 + val2; // string + number => string, number + string => string
console.log(sum);
console.log(typeof sum);

/*
JSON (JavaScript Object Notation)
Data format used for asynchronous browser/server communication
Lightweight text-based format
Easy to read
Used for serialization and transmission of data between the network the network connection
Independent programming language and platform
Is a subset of JavaScript object literal notation
Is language independent
Is "self-describing" and easy to understand
Uses JavaScript syntax, but the JSON format is text only
*/

let p = {
  name: 'John',
  age: 30,
  favoriteColors: ['red', 'blue', 'green'],
};

let pAsJSON =
  '{"name": "John", "age": 30, "favoriteColors": ["red", "blue", "green"]}';

// convert to JSON
let personJSON = JSON.stringify(p);
console.log(personJSON);

// convert back to object
let personObject = JSON.parse(p);
console.log(personObject);
