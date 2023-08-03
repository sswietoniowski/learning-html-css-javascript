// Union Types

let mathematician = Math.random() > 0.5 ? undefined : 'Mark Goldberg';

// Declaring Union Types

let thinker: string | null = null;

if (Math.random() > 0.5) {
  thinker = 'Susanne Langer'; // Ok
}

// Union Properties

let physicist = Math.random() > 0.5 ? 'Marie Curie' : 84;

physicist.toString(); // Ok

// physicist.toUpperCase();
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
//   Property 'toUpperCase' does not exist on type 'number'.

// physicist.toFixed();
// Error: Property 'toFixed' does not exist on type 'string | number'.
//   Property 'toFixed' does not exist on type 'string'.

// Narrowing

// Assignment Narrowing

let admiral: number | string;

admiral = 'Grace Hopper';

// file deepcode ignore PureMethodReturnValueIgnored: this is just a demo code
admiral.toUpperCase(); // Ok: string

// admiral.toFixed();
// Error: Property 'toFixed' does not exist on type 'string'.

let inventor: number | string = 'Hedy Lamarr';

inventor.toUpperCase(); // Ok: string

// inventor.toFixed();
// Error: Property 'toFixed' does not exist on type 'string'.

// Type Guard / Conditional Checks

// Type of scientist: number | string
let scientist = Math.random() > 0.5 ? 'Rosalind Franklin' : 51;

if (scientist === 'Rosalind Franklin') {
  // Type of scientist: string
  // file deepcode ignore StringMethodOnNonString: this is just a demo code
  scientist.toUpperCase(); // Ok
}

// Type of scientist: number | string
// scientist.toUpperCase();
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
//   Property 'toUpperCase' does not exist on type 'number'.

// typeof Checks

let researcher = Math.random() > 0.5 ? 'Rosalind Franklin' : 51;

if (typeof researcher !== 'string') {
  researcher.toFixed(); // Ok: number
} else {
  researcher.toUpperCase(); // Ok: string
}

// Literal Types

const philosopher = 'Hypatia'; // Type: "Hypatia"

let lifespan: number | 'ongoing' | 'uncertain';

lifespan = 89; // Ok
lifespan = 'ongoing'; // Ok

// lifespan = true;
// Error: Type 'true' is not assignable to
// type 'number | "ongoing" | "uncertain"'

// Literal Assignability

let specificallyAda: 'Ada';

specificallyAda = 'Ada'; // Ok

// specificallyAda = "Byron";
// Error: Type '"Byron"' is not assignable to type '"Ada"'.

let someString = ''; // Type: string

// specificallyAda = someString;
// Error: Type 'string' is not assignable to type '"Ada"'.

someString = ':)';

// Strict Null Checking

// const firstName: string = null; // Error: Type 'null' is not assignable to type 'string' if strictNullChecks is true

let nameMaybe = Math.random() > 0.5 ? 'Tony Hoare' : undefined;

// nameMaybe.toLowerCase(); // Not allowed if strictNullChecks is true
// Potential runtime error: Cannot read property 'toLowerCase' of undefined.

// Truthiness Narrowing

let geneticist = Math.random() > 0.5 ? 'Barbara McClintock' : undefined;

if (geneticist) {
  geneticist.toUpperCase(); // Ok: string
}

// geneticist.toUpperCase();
// Error: Object is possibly 'undefined'.

geneticist && geneticist.toUpperCase(); // Ok: string | undefined
geneticist?.toUpperCase(); // Ok: string | undefined

let biologist = Math.random() > 0.5 && 'Rachel Carson';

if (biologist) {
  biologist; // Type: string
  // file deepcode ignore DuplicateIfBody: this is just a demo code
} else {
  biologist; // Type: false | string
}

// Variables Without Initial Values

let mathematician2: string;

// mathematician2?.length;
// Error: Variable 'mathematician' is used before being assigned.

mathematician2 = 'Mark Goldberg';
mathematician2.length; // Ok

// Type Aliases

let rawDataFirst1: boolean | number | string | null | undefined;
let rawDataSecond1: boolean | number | string | null | undefined;
let rawDataThird1: boolean | number | string | null | undefined;

type RawData = boolean | number | string | null | undefined;

let rawDataFirst2: RawData;
let rawDataSecond2: RawData;
let rawDataThird2: RawData;

// Type Aliases Are Not JavaScript Types

type SomeType = string | undefined;

// console.log(SomeType);
// Error: 'SomeType' only refers to a type, but is being used as a value here.

// Combining Type Aliases

type Id = number | string;

// Equivalent to: number | string | undefined | null
type IdMaybe = Id | undefined | null;
