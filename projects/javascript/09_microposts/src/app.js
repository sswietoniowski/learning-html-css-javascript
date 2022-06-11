// CommonJS Module Syntax
// const person = require('./mymodule1');

// ES2015 Module Syntax
import { person, sayHello } from './mymodule2';
//import * as mod from './mymodule2';
import greeting from './mymodule2';

console.log(person.name);
console.log(sayHello());
console.log(greeting);
