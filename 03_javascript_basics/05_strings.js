const firstName = 'John';
const lastName = 'Smith';

let val;
// Concatenation
val = firstName + ' ' + lastName;
console.log(val);
// Basic operations
console.log(val.toLowerCase());
console.log(val.toUpperCase());
console.log("That's awesome");
console.log("That's awesome");
console.log(firstName.length);
console.log(firstName.concat(' ', lastName));
console.log(firstName[0]); // strings can be treated as arrays
console.log(firstName.indexOf('o')); // lastIndexOf
console.log(firstName.charAt(2));
console.log(firstName.substring(0, 3));
console.log(firstName.slice(0, 3));
console.log(val.split(' '));
console.log(val.replace(' ', '|'));
console.log(val.includes('John')); // tests whether a string contains another string

// String interpolation
console.log(`${firstName} ${lastName}`); // ES6, but compatible with all modern browsers
