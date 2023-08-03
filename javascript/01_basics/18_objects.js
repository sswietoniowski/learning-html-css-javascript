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
// deepcode ignore BooleanObjectCreation: this is just a demo code
const bool2 = new Boolean(true); // not recommended

const getSum1 = function (x, y) {
  return x + y;
};

console.log(getSum1(5, 10));

// Possible, but it would look weird
const getSum2 = new Function('x', 'y', 'return x + y');

console.log(getSum2(5, 10));

const john1 = { name: 'John', age: 32 };
// deepcode ignore ObjectConstructor: this is just a demo code
const john2 = new Object({ name: 'John', age: 32 });

console.log(john1);
console.log(john2);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);

console.log(arr1);
console.log(arr2);

const re1 = /\w+/;
const re2 = new RegExp('\\w+'); // not recommended

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
function Student(name, age, job) {
  Person.call(this, name, age, job);
  this.school = 'Udacity';
} // Student inherits from Person

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.getGoal = function () {
  console.log('My goal is: Be a junior software developer.');
};

const student = new Student('John Doe', 30, 'teacher');
console.log(student);
student.presentation();
student.getGoal();

// Object.create
const personPrototypes = {
  greeting: function () {
    console.log(`Hi, my name is ${this.name}`);
  },

  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const mary = Object.create(personPrototypes);
mary.name = 'Mary';
mary.age = 30;
mary.job = 'designer';
mary.getsMarried('Smith');
mary.greeting();

const brad3 = Object.create(personPrototypes, {
  name: { value: 'Brad' },
  age: { value: 36 },
  job: { value: 'programmer' },
});

// ES6 Classes (syntax)
class PersonClass {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  presentation() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }

  static greeting() {
    console.log('Hey there!');
  }
}

const johnClass = new PersonClass('John', 32, 'teacher');
console.log(johnClass);
johnClass.presentation();
PersonClass.greeting();

// Subclasses
class Customer extends PersonClass {
  constructor(name, age, job, balance) {
    super(name, age, job);
    this.balance = balance;
  }

  greeting() {
    console.log(
      `Hello, my name is ${this.name} and I have a balance of ${this.balance}`
    );
  }
}

const customerClass = new Customer('John Doe', 30, 'teacher', 300);
console.log(customerClass);
customerClass.greeting();
