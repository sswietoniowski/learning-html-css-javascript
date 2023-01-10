"use strict";
// TypeScript uses the same primitive data types as JavaScript
// Boolean
const isDone = false;
// Number
const decimal = 6;
const hex = 0xf00d;
const binary = 0b1010;
const octal = 0o744;
// BigInt
const big = 100n;
// String
let color = 'blue';
color = 'red';
// Template Strings
const firstName = 'Bob';
const lastName = 'Bobbington';
const helloMessage = `Hello, my name is ${firstName} ${lastName}.`;
// Array
const list = [1, 2, 3];
// Tuple
let x;
x = ['hello', 10]; // OK
// x = [10, 'hello']; // Error
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
const c = Color.Green;
// Any
let notSure = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean
// Void
function warnUser() {
    console.log('This is my warning message');
}
// Null and Undefined
let u = undefined;
let n = null;
// Never
function error(message) {
    throw new Error(message);
}
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create('string'); // Error
// create(false); // Error
// create(undefined); // Error
// Type Assertions
let someValue = 'this is a string';
let strLength = someValue.length;
// or
let strLength2 = someValue.length;
// Type Inference
let someValue2 = 'this is a string';
let strLength3 = someValue2.length;
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
function createSquare(config) {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: 'black' });
console.log(mySquare);
let p1 = { x: 10, y: 20 };
// p1.x = 5; // error!
// ReadonlyArray<T>
let a = [1, 2, 3, 4];
let ro = a;
function createSquare2(config) {
    // ...
    throw new Error('Not implemented');
}
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
let myArray;
myArray = ['Bob', 'Fred'];
let myStr = myArray[0];
class Clock {
    setTime(d) {
        this.currentTime = d;
    }
    constructor(h, m) {
        this.currentTime = new Date();
    }
}
let square = {};
square.color = 'blue';
square.sideLength = 10;
function getCounter() {
    let counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let counter = getCounter();
counter(10);
counter.reset();
counter.interval = 5.0;
// Interfaces Extending Classes
class Control {
}
class Button extends Control {
    select() { }
}
class TextBox extends Control {
    select() { }
}
function getSmallPet() {
    // ...
    throw new Error('Not implemented');
}
let pet = getSmallPet();
pet.layEggs(); // okay
// pet.swim();    // errors
if (pet.swim) {
    pet.swim();
}
else {
    pet.fly();
}
// typeof type guards
function isNumber(x) {
    return typeof x === 'number';
}
function isString(x) {
    return typeof x === 'string';
}
function padLeft(value, padding) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(' ') + value;
    }
    if (isString(padding)) {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
class SpaceRepeatingPadder {
    constructor(numSpaces) {
        this.numSpaces = numSpaces;
    }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}
class StringPadder {
    constructor(value) {
        this.value = value;
    }
    getPaddingString() {
        return this.value;
    }
}
function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}
// Type is 'SpaceRepeatingPadder | StringPadder'
let padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    padder; // type narrowed to 'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    padder; // type narrowed to 'StringPadder'
}
// Nullable Types
let s = 'foo';
// s = null; // error, 'null' is not assignable to 'string'
let sn = 'bar';
sn = null; // ok
// sn = undefined; // error, 'undefined' is not assignable to 'string | null'
