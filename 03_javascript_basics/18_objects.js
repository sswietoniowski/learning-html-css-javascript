// Constructor & the "this" keyword
const brad = {
  name: 'Brad',
  age: 36,
  job: 'programmer',
  presentation: function () {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  },
};

console.log(brad);
brad.presentation();

// Person constructor
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  //   this.presentation = function () {
  //     console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  //   };
}

console.log(this);

const person = new Person('John', 32, 'teacher');
console.log(person);
// person.presentation();

// Built-in constructors (they exists but we're using them very seldomly)
const name1 = 'Jeff';
const name2 = new String('Jeff'); // not recommended
name2.foo = 'bar';
console.log(name1);
console.log(name2);

console.log(typeof name1); // string
console.log(typeof name2); // object, so name2 === 'some string' won't work

const num1 = 5;
const num2 = new Number(5); // not recommended

const bool1 = true;
const bool2 = new Boolean(true); // not recommended

const getSum1 = function (x, y) {
  return x + y;
};

console.log(getSum1(5, 10));

// Possible, but it would look weird
const getSum2 = new Function('x', 'y', 'return x + y');

console.log(getSum2(5, 10));

const john1 = { name: 'John', age: 32 };
const john2 = new Object({ name: 'John', age: 32 });

console.log(john1);
console.log(john2);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);

console.log(arr1);
console.log(arr2);

const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1);
console.log(re2);

// Prototypes explained
// Object.prototype
// Person.prototype

Person.prototype.presentation = function () {
  console.log(
    `Hi (from Person.prototype), my name is ${this.name} and I am ${this.age} years old.`
  );
};

const john = new Person('John Doe', 30, 'teacher');
const marry = new Person('Marry Smith', 28, 'designer');

console.log(john);
console.log(marry);
john.presentation();
marry.presentation();

// Prototypal inheritance
