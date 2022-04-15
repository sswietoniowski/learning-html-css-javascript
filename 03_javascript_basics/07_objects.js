// Basics of object literals
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  hobbies: ['music', 'sports'],
  address: {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA',
  },
  getBirthYear: function () {
    return 2022 - this.age;
  },
};

let val;

val = person;

console.log(val);
console.log(val.firstName); // recommended
console.log(val['firstName']);
val.lastName = 'Smith';
console.log(val);
val.hobbies.push('food');
console.log(val.hobbies[0]);
console.log(val.address.city);
console.log(val.getBirthYear());

const people = [
  { name: 'John Doe', age: 50 },
  { name: 'Alice Smith', age: 20 },
];

console.log(people);
console.table(people);

for (const person of people) {
  console.log(`Person: ${person.name}`);
}
