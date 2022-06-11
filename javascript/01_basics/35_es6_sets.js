// Sets - stores unique values of any type
// Create a set
const set1 = new Set();

// Add value to set
set1.add(100);
set1.add(200);
set1.add(100);
set1.add('string');
set1.add({ name: 'John' });
set1.add({ name: 'John' });
set1.add(true);

console.log(set1);

// Create another set
const set2 = new Set([
  1,
  2,
  1,
  'string',
  true,
  { name: 'John' },
  { name: 'John' },
]);
console.log(set2);

// Get count
console.log(set1.size);

// Check for a value
console.log(set1.has(100));
console.log(set1.has({ name: 'John' }));

// Delete from a set
set1.delete(100);
console.log(set1);

// Iterate through a set
for (const value of set1) {
  console.log(value);
}

set1.forEach((value) => {
  console.log(value);
});

// Convert a set to an array
const setArr = Array.from(set1);
console.log(setArr);
