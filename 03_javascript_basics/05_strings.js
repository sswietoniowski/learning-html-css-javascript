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

const isSymmetric = (strArr, start, end) => {
  let length = end - start + 1;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (strArr[start + i] !== strArr[end - i]) {
      return false;
    }
  }
  return true;
};

const symmetricTree = (strArr) => {
  let lastIndex = strArr.length - 1;
  let power = 1;
  let start = 1;
  let length = Math.pow(2, power);
  let end = start + length - 1;
  while (end <= lastIndex) {
    if (!isSymmetric(strArr, start, end)) {
      return false;
    }
    power++;
    start = end + 1;
    length = Math.pow(2, power);
    end = start + length - 1;
  }
  return true;
};

strArr = ['1', '2', '2', '3', '#', '#', '3'];
console.log(symmetricTree(strArr));

strArr = ['4', '3', '4'];
console.log(symmetricTree(strArr));

strArr = ['10', '2', '2', '#', '1', '1', '#'];
console.log(symmetricTree(strArr));
