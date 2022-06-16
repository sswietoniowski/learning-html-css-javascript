// If statement
let id = 100;
id = '100';
if (id == 100) {
  // != means not equal to
  console.log('id == 100');
} else if (id > 100) {
  console.log('id > 100');
} else {
  console.log('id < 100');
}

// == compares the value, but not the types
// === compares the value and the type (preferable)

id = '100';
if (id === 100) {
  // !== means not equal to
  console.log('id == 100');
} else {
  console.log('Not equal');
}

if (typeof id !== undefined) {
  // test if something is undefined
  console.log(`ID is ${id}`);
} else {
  console.log('No ID');
}

// Some other operators
// >=, <=

// && || (and or)
const name = 'Steve';
const age = 20;

if (age >= 18 && name === 'Steve') {
  console.log('Access granted');
} else {
  console.log('Access denied');
}

// Tri-Arg Operator
console.log(id === 100 ? 'id is 100' : 'id is not 100');

// Switch statement
const grade = 'A';
switch (grade) {
  case 'A':
    console.log('Excellent');
    break;
  case 'B':
    console.log('Good');
    break;
  case 'C':
    console.log('Fair');
    break;
  case 'D':
    console.log('Poor');
    break;
  default:
    console.log('Invalid');
    break;
}