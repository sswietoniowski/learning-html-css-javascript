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
// deepcode ignore GlobalReplacementRegex: this is just a demo code
console.log(val.replace(' ', '|'));
console.log(val.includes('John')); // tests whether a string contains another string

// String interpolation
console.log(`${firstName} ${lastName}`); // ES6, but compatible with all modern browsers

/* 
Have the function SymmetricTree(strArr) take the array of strings stored in strArr, which 
will represent a binary tree, and determine if the tree is symmetric (a mirror image of itself). 
The array will be implemented similar to how a binary heap is implemented, except the tree may 
not be complete and NULL nodes on any level of the tree will be represented with a #. 

For example: if strArr is ["1", "2", "2", "3", "#", "#", "3"] then this tree looks like the following:
1
/ \
2   2
/ \ / \
3  # #  3
For the input above, your program should return the string true because the binary tree is symmetric.
Examples
Input: new string[] {"4", "3", "4"}
Output: false
Input: new string[] {"10", "2", "2", "#", "1", "1", "#"}
Output: true
*/
const isSymmetric = (strArr, start, end) => {
  const length = end - start + 1;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (strArr[start + i] !== strArr[end - i]) {
      return false;
    }
  }
  return true;
};

const symmetricTree = (strArr) => {
  const lastIndex = strArr.length - 1;
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
