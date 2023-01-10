// TypeScript uses the same primitive data types as JavaScript

// Boolean
const isDone: boolean = false;
// Number
const decimal: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;
// BigInt
const big: bigint = 100n;
// String
let color: string = 'blue';
color = 'red';
// Template Strings
const firstName: string = 'Bob';
const lastName: string = 'Bobbington';
const helloMessage: string = `Hello, my name is ${firstName} ${lastName}.`;

// Array
const list: number[] = [1, 2, 3];
// Tuple
let x: [string, number];
x = ['hello', 10]; // OK
// x = [10, 'hello']; // Error
// Enum
enum Color {
  Red,
  Green,
  Blue,
}
const c: Color = Color.Green;
// Any
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean
// Void
function warnUser(): void {
  console.log('This is my warning message');
}
// Null and Undefined
let u: undefined = undefined;
let n: null = null;
// Never
function error(message: string): never {
  throw new Error(message);
}
// Object
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create('string'); // Error
// create(false); // Error
// create(undefined); // Error

// Type Assertions
let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length;
// or
let strLength2: number = (<string>someValue).length;

// Type Inference
let someValue2 = 'this is a string';
let strLength3 = someValue2.length;

// Type Aliases
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

// Interfaces
interface LabelledValue {
  label: string;
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

// Optional Properties
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
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

// Readonly Properties
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

// ReadonlyArray<T>
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!

// Excess Property Checks
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare2(config: SquareConfig): { color: string; area: number } {
  // ...
  throw new Error('Not implemented');
}

// let mySquare2 = createSquare2({ colour: 'red', width: 100 }); // error!

// Function Types
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

// Indexable Types
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred'];

let myStr: string = myArray[0];

// Class Types
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {
    this.currentTime = new Date();
  }
}

// Extending Interfaces
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
square.color = 'blue';
square.sideLength = 10;

// Hybrid Types
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) {};
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

let counter = getCounter();
counter(10);
counter.reset();
counter.interval = 5.0;

// Interfaces Extending Classes
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

// Error: Property 'state' is missing in type 'Image'.
// class Image implements SelectableControl {
//     select() { }
// }

// Type Guards and Differentiating Types
interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

function getSmallPet(): Fish | Bird {
    // ...
    throw new Error('Not implemented');
}

let pet = getSmallPet();
pet.layEggs(); // okay
// pet.swim();    // errors

if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}

// typeof type guards
function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function isString(x: any): x is string {
    return typeof x === 'string';
}

function padLeft(value: string, padding: string | number) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(' ') + value;
    }
    if (isString(padding)) {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

// instanceof type guards
interface Padder {
    getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}

class StringPadder implements Padder {
    constructor(private value: string) { }
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
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
    padder; // type narrowed to 'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    padder; // type narrowed to 'StringPadder'
}

// Nullable Types
let s = 'foo';
// s = null; // error, 'null' is not assignable to 'string'

let sn: string | null = 'bar';
sn = null; // ok

// sn = undefined; // error, 'undefined' is not assignable to 'string | null'

