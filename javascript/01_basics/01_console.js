/*

Short message about the JS syntax & coding style - don't spend too much time on it just use Prettier plugin for VSCode and you will be fine :-).

*/

// alert('Hello world!');

// Log to console <- single line comment
console.clear();
console.log('Hello world!');
console.log(123);
console.log(true);
var greeting = 'Hello world!';
console.log(greeting);
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });
console.error('This is some error');
console.warn('This is a warning');
console.time('Hello');
{
  console.log('Hello World!');
  console.log('Hello World!');
  console.log('Hello World!');
  console.log('Hello World!');
  console.log('Hello World!');
  console.log('Hello World!');
}
console.timeEnd('Hello');

/* 

Multiline comment

*/

/**
 * Documentation &configuration comment: This is a function that greets a person.
 *
 * @param {string} name - The name of the person
 * @return {string} The hello message
 */
function greet(name) {
  console.log('Hello ' + name);
  return 'Hello ' + name;
}
