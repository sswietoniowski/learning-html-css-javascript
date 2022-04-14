// var, let, const
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// Initialize a variable
var greeting;
console.log(greeting); // undefined
greeting = 'Hello';
console.log(greeting); // Hello

// Variable naming rules
// letters, numbers, _, $
// Can not start with a number
//var 1name = 'test'; // SyntaxError
//var name-one = 'test'; // SyntaxError
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
