// Loops

// Basis for loops
console.log('Basic for loop');
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Basic while loops
console.log('Basic while loop');
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

console.log('Basic do while loop');
do {
  i++;

  console.log(i);
  if (i % 2 !== 0) {
    continue;
  }

  if (i % 9 === 0) {
    break;
  }
} while (i < 20);

// Loop to walk over all the properties of an object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
};
console.log('For in loop (over objects properties)');
for (const key in person) {
  console.log(key, person[key]);
}

// Foreach loop (sort of)
console.log('For of loop (foreach)');
const array = [1, 2, 3, 4, 5];
for (const i of array) {
  console.log(i);
}

// Elements of functional programming
console.log('forEach loop');
array.forEach(function (element) {
  console.log(element);
});

console.log('map transform');
const newArray = array.map(function (element, index) {
  console.log(`${index} -> ${element}`);
  return element * 2;
});
console.table(newArray);
