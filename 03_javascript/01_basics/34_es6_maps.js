// MAPS = key-value pairs - can use ANY type as a key or value
const map1 = new Map();

// Set keys
const key1 = 'some string',
  key2 = {},
  key3 = function () {};

// Set map values by key
map1.set(key1, 'string value');
map1.set(key2, 'object value');
map1.set(key3, 'function value');

// Get values by key
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

// Count values
console.log(map1.size);

// Iterating maps
// Only iterate over keys
for (const key of map1) {
  console.log(key);
}
for (const key of map1.keys()) {
  console.log(key);
}
// Iterating over keys and values
for (const [key, value] of map1) {
  console.log(key, value);
}
// Iterating over values only
for (const value of map1.values()) {
  console.log(value);
}
// We can use forEach
map1.forEach((key, value) => {
  console.log(key, value);
});

// Create an array of the key-value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create an array of the values
const valArr = Array.from(map1.values());
console.log(valArr);

// Create an array of the keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);
