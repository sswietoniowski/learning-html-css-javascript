// Object Types

const poet = {
  born: 1935,
  name: 'Mary Oliver',
};

poet['born']; // Type: number
poet.name; // Type: string

// poet.end;
// Error: Property 'end' does not exist on
// type '{ born: number; name: string; }'.

// Declaring Object Types

let poetLater: {
  born: number;
  name: string;
};

// Ok
poetLater = {
  born: 1935,
  name: 'Mary Oliver',
};

// poetLater = "Sappho";
// Error: Type 'string' is not assignable to
// type '{ born: number; name: string; }'

// Aliased Object Types

type Poet = {
  born: number;
  name: string;
};

let poetLater2: Poet;

// Ok
poetLater2 = {
  born: 1935,
  name: 'Sara Teasdale',
};

// poetLater2 = "Emily Dickinson";
// Error: Type 'string' is not assignable to 'Poet'.

// Structural Typing

// Structural typing is a way of relating types based on their structure. It is not the same as duck typing (which is checked only at runtime).
// In TypeScript, structural typing is used to check whether two types are compatible during static analysis.

type WithFirstName = {
  firstName: string;
};

type WithLastName = {
  lastName: string;
};

const hasBoth = {
  firstName: 'Lucille',
  lastName: 'Clifton',
};

// Ok: `hasBoth` contains a `firstName` property of type `string`
let withFirstName: WithFirstName = hasBoth;

// Ok: `hasBoth` contains a `lastName` property of type `string`
let withLastName: WithLastName = hasBoth;

// Usage Checking

type FirstAndLastNames = {
  first: string;
  last: string;
};

// Ok
const hasBoth2: FirstAndLastNames = {
  first: 'Sarojini',
  last: 'Naidu',
};

//   const hasOnlyOne: FirstAndLastNames = {
//     first: "Sappho"
//   };
//   // Property 'last' is missing in type '{ first: string; }'
// but required in type 'FirstAndLastNames'.

type TimeRange = {
  start: Date;
};

// const hasStartString: TimeRange = {
//   start: '1879-02-13',
//   // Error: Type 'string' is not assignable to type 'Date'.
// };

// Excess Property Checking

type Poet2 = {
  born: number;
  name: string;
};

// Ok: all fields match what's expected in Poet
const poetMatch: Poet2 = {
  born: 1928,
  name: 'Maya Angelou',
};

// const extraProperty: Poet2 = {
//     activity: "walking",
//     born: 1935,
//     name: "Mary Oliver",
// };
// Error: Type '{ activity: string; born: number; name: string; }'
// is not assignable to type 'Poet'.
//   Object literal may only specify known properties,
//   and 'activity' does not exist in type 'Poet'.

const existingObject = {
  activity: 'walking',
  born: 1935,
  name: 'Mary Oliver',
};

const extraPropertyButOk: Poet2 = existingObject; // Ok

// Nested Object Types

type Poem = {
  author: {
    firstName: string;
    lastName: string;
  };
  name: string;
};

// Ok
const poemMatch: Poem = {
  author: {
    firstName: 'Sylvia',
    lastName: 'Plath',
  },
  name: 'Lady Lazarus',
};

// const poemMismatch: Poem = {
//     author: {
//         name: "Sylvia Plath",
//     },
//     // Error: Type '{ name: string; }' is not assignable
//     // to type '{ firstName: string; lastName: string; }'.
//     //   Object literal may only specify known properties, and 'name'
//     //   does not exist in type '{ firstName: string; lastName: string; }'.
//     name: "Tulips",
// };

type Author = {
  firstName: string;
  lastName: string;
};

type Poem2 = {
  author: Author;
  name: string;
};

// const poemMismatch: Poem2 = {
//   author: {
//     name: 'Sylvia Plath',
//   },
//   // Error: Type '{ name: string; }' is not assignable to type 'Author'.
//   //     Object literal may only specify known properties,
//   //     and 'name' does not exist in type 'Author'.
//   name: 'Tulips',
// };

// Optional Properties

type Book = {
  author?: string;
  pages: number;
};

// Ok
const ok: Book = {
  author: 'Rita Dove',
  pages: 80,
};

//   const missing: Book = {
//       author: "Rita Dove",
//   };
//   // Error: Property 'pages' is missing in type
// '{ author: string; }' but required in type 'Book'.

type Writers = {
  author: string | undefined;
  editor?: string;
};

// Ok: author is provided as undefined
const hasRequired: Writers = {
  author: undefined,
};

//   const missingRequired: Writers = {};
//    ~~~~~~~~~~~~~~~
// Error: Property 'author' is missing in type
// '{}' but required in type 'Writers'.

// Unions of Object Types

// Inferred Object-Type Unions

const poem =
  Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7 }
    : { name: 'Her Kind', rhymes: true };
// Type:
// {
//   name: string;
//   pages: number;
//   rhymes?: undefined;
// }
// |
// {
//   name: string;
//   pages?: undefined;
//   rhymes: boolean;
// }

poem.name; // string
poem.pages; // number | undefined
poem.rhymes; // boolean | undefined

// Explicit Object-Type Unions

type PoemWithPages = {
  name: string;
  pages: number;
};

type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
};

type Poem3 = PoemWithPages | PoemWithRhymes;

const poem3: Poem3 =
  Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7 }
    : { name: 'Her Kind', rhymes: true };

poem3.name; // Ok

// poem3.pages;
// Property 'pages' does not exist on type 'Poem'.

// Narrowing Object Types

if ('pages' in poem3) {
  poem3.pages; // Ok: poem is narrowed to PoemWithPages
} else {
  poem3.rhymes; // Ok: poem is narrowed to PoemWithRhymes
}

// if (poem.pages) { /* ... */ }
// Property 'pages' does not exist on type 'PoemWithPages | PoemWithRhymes'.
//   Property 'pages' does not exist on type 'PoemWithRhymes'.

// Discriminated Unions

type PoemWithPages2 = {
  name: string;
  pages: number;
  type: 'pages';
};

type PoemWithRhymes2 = {
  name: string;
  rhymes: boolean;
  type: 'rhymes';
};

type Poem4 = PoemWithPages2 | PoemWithRhymes2;

const poem4: Poem4 =
  Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7, type: 'pages' }
    : { name: 'Her Kind', rhymes: true, type: 'rhymes' };

if (poem4.type === 'pages') {
  console.log(`It's got pages: ${poem.pages}`); // Ok
} else {
  console.log(`It rhymes: ${poem.rhymes}`);
}

poem4.type; // Type: 'pages' | 'rhymes'

// poem4.pages;
// Error: Property 'pages' does not exist on type 'Poem'.
//   Property 'pages' does not exist on type 'PoemWithRhymes'.

// Intersection Types

type Artwork = {
  genre: string;
  name: string;
};

type Writing = {
  pages: number;
  name: string;
};

type WrittenArt = Artwork & Writing;
// Equivalent to:
// {
//   genre: string;
//   name: string;
//   pages: number;
// }

type ShortPoem = { author: string } & (
  | { kigo: string; type: 'haiku' }
  | { meter: number; type: 'villanelle' }
);

// Ok
const morningGlory: ShortPoem = {
  author: 'Fukuda Chiyo-ni',
  kigo: 'Morning Glory',
  type: 'haiku',
};

// const oneArt: ShortPoem = {
//     author: "Elizabeth Bishop",
//     type: "villanelle",
// };
// Error: Type '{ author: string; type: "villanelle"; }'
// is not assignable to type 'ShortPoem'.
//   Type '{ author: string; type: "villanelle"; }' is not assignable to
//   type '{ author: string; } & { meter: number; type: "villanelle"; }'.
//     Property 'meter' is missing in type '{ author: string; type: "villanelle"; }'
//     but required in type '{ meter: number; type: "villanelle"; }'.

// Dangers of Intersection Types

// Long assignability errors

type ShortPoemBase = { author: string };
type Haiku = ShortPoemBase & { kigo: string; type: 'haiku' };
type Villanelle = ShortPoemBase & { meter: number; type: 'villanelle' };
type ShortPoem2 = Haiku | Villanelle;

// const oneArt: ShortPoem2 = {
//     author: "Elizabeth Bishop",
//     type: "villanelle",
// };
// Type '{ author: string; type: "villanelle"; }'
// is not assignable to type 'ShortPoem'.
//   Type '{ author: string; type: "villanelle"; }'
//   is not assignable to type 'Villanelle'.
//     Property 'meter' is missing in type
//     '{ author: string; type: "villanelle"; }'
//     but required in type '{ meter: number; type: "villanelle"; }'.

// never

type NotPossible = number & string;
// Type: never
