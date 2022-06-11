const num1 = 101;
const num2 = 50;
let val;

// Simple math
val = num1 + num2;
console.log(val);
val = num1 * num2;
console.log(val);
val = num1 - num2;
console.log(val);
val = num1 / num2; // float result
console.log(val);
val = num1 % num2; // modulo
console.log(val);

// Math Object
val = Math.PI;
console.log(val);
val = Math.E;
console.log(val);
val = Math.round(val); // ceil, floor, sqrt, abs, pow
console.log(val);
console.log(Math.min(1, 2.4, 5, 10, -1)); // max
console.log(Math.floor(Math.random() * 20 + 1)); // 1..20
