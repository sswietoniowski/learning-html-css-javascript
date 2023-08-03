// Array Literals
let empty = []; // An array with no elements
let primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements that are prime numbers
let morePrimes = [...primes, 13, 17, 19, 23, 29]; // An array with 10 numeric elements using spread operator
let anything = [1.1, 'one', true]; // An array with 3 elements of different types
let threeElements = [1, , 3]; // An array with 3 elements, 2nd element is undefined
// Array Constructor
// file deepcode ignore ArrayConstructor: this is just a demo code
let array1 = new Array(); // An empty array, equivalent to []
let array2 = new Array(10); // An array with 10 undefined elements
// Array.of and Array.from
let numbers1 = Array.of(1, 2, 3); // An array with three numeric elements
let numbers2 = Array.from(numbers1); // A copy (shallow) of the numbers array

// Array.slice(start, end)
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let someFruits = fruits.slice(1, 3);
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']
console.log(someFruits); // Output: ['banana', 'cherry']

// Array.splice()
let fruitsCopy = fruits.slice();
console.log(fruitsCopy); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']

// One could also use the spread operator to copy an array
let fruitsCopy2 = [...fruits];

// Or use Array.from()
let fruitsCopy3 = Array.from(fruits);

// Array.slice() with negative values
let lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits); // Output: ['date', 'elderberry']

// Array.slice() with only one argument
let fromCherry = fruits.slice(2);
console.log(fromCherry); // Output: ['cherry', 'date', 'elderberry']

// Array.splice(start, deleteCount, item1, item2, ...)
let newFruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
newFruits.splice(2, 0, 'cantaloupe');
console.log(newFruits); // Output: ['apple', 'banana', 'cantaloupe', 'cherry', 'date', 'elderberry']
