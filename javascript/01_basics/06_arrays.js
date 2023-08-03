// Create some arrays
const numbers = [1, 2, 3, 4, 5];
const numbers2 = new Array(1, 2, 3, 4, 5);
const fruits = ['Apple', 'Orange', 'Banana'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];

console.log(mixed);

// Some array methods
let val;
console.log(numbers);
console.log(numbers.length);
console.log(Array.isArray(numbers));
val = numbers[0];
numbers[0] = 100;
console.log(numbers);
console.log(val);
console.log(numbers.indexOf(4));
console.log(numbers.includes(1));
numbers.push(6);
console.log(numbers);
numbers.unshift(0);
console.log(numbers);
console.log(numbers.pop());
console.log(numbers.shift());
console.log(numbers);
console.log(numbers.splice(1, 3));
// deepcode ignore PureMethodReturnValueIgnored: this is just a demo code
numbers.slice(2, 4);
console.log(numbers);
val = numbers.concat([1, 2, 3]);
console.log(val);
val = val.sort();
console.log(val);
val = val.sort(function (x, y) {
  return x - y;
});
console.log(val);
val = val.find(function (x) {
  return x < 4;
});
console.log(val);
