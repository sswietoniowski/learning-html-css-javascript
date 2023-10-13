// Create some arrays (ordered collections of items)
const numbers = [1, 2, 3, 4, 5];
const numbers2 = new Array(1, 2, 3, 4, 5);
const fruits = ['Apple', 'Orange', 'Banana'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];

console.log(mixed);

// Some array methods
let val;
console.log(numbers);
console.log(numbers.length); // length of the array
console.log(Array.isArray(numbers));
val = numbers[0]; // get the first element
numbers[0] = 100;
console.log(numbers);
console.log(val);
console.log(numbers.indexOf(4));
console.log(numbers.includes(1));
numbers.push(6); // add to the end
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

// Map (collection of key-value pairs)
const map = new Map();

map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map);
console.log(map.get('key1'));
console.log(map.size);
console.log(map.has('key1'));
console.log(map.has('key3'));
console.log(map.delete('key1'));
console.log(map);

// Set (collection of unique values)
const set = new Set();

set.add(100);
set.add('A string');
set.add({ name: 'John' });
console.log(set);
console.log(set.size);
console.log(set.has(100));
console.log(set.has(50 + 50));
console.log(set.has({ name: 'John' }));
console.log(set.delete(100));
console.log(set);

// we can slice & splice arrays, more on that in "42_array_slicing"
