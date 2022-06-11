// Destructuring Assignment
let a, b;

[a, b] = [100, 200];
console.log(a, b);

// REST pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(a, b, rest);

({ a, b } = { a: 100, b: 200 });
console.log(a, b);

// Array destructuring
const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;
console.log(person1, person2, person3);

// Parse array returned from function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let p1, p2, p3;

[p1, p2, p3] = getPeople();
console.log(p1, p2, p3);

// Object destructuring
const person = {
  name: 'John',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
  married: true,
  address: {
    city: 'Miami',
    state: 'FL',
    zip: 33133,
  },
};

// Destructuring object properties
const {
  name,
  age,
  hobbies,
  role,
  married,
  address: { city, state, zip },
} = person;
console.log(name, age, hobbies, role, married, city, state, zip);
// Destructuring object properties and renaming
const {
  name: n,
  age: ag,
  hobbies: h,
  role: r,
  married: m,
  address: { city: c, state: s, zip: z },
} = person;
console.log(n, ag, h, r, m, c, s, z);
// Destructuring object properties with default values and renaming
const {
  name: n2 = 'John Doe',
  age: a2 = 30,
  hobbies: h2 = ['Sports', 'Cooking'],
  role: r2 = [2, 'author'],
  married: m2 = true,
  address: { city: c2 = 'Miami', state: s2 = 'FL', zip: z2 = 33133 },
} = person;
console.log(n2, a2, h2, r2, m2, c2, s2, z2);
// Destructuring object properties with default values and renaming and rest pattern
const {
  name: n3 = 'John Doe',
  age: a3 = 30,
  hobbies: h3 = ['Sports', 'Cooking'],
  role: r3 = [2, 'author'],
  married: m3 = true,
  ...other
} = person;
console.log(n3, a3, h3, r3, m3, other);
