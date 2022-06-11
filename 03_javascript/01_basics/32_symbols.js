// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('foo');

console.log(sym1);
console.log(sym2);
console.log(typeof sym1);
console.log(Symbol() === Symbol()); // always unique
console.log(`Hello ${String(sym1)}`);

// Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {
  [KEY1]: 'Prop1',
};
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// Symbols are not enumerable in for .. in
for (let i in myObj) {
  console.log(i);
  console.log(myObj[i]);
}

// Symbols are ignored in JSON stringify
console.log(JSON.stringify({ key: 'value' }));
console.log(JSON.stringify({ [KEY1]: 'prop1' }));
console.log(JSON.stringify(myObj));
