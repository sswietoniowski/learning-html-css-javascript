export const person = {
  name: 'John Doe',
  email: 'john-doe@example.com',
  age: 30,
};

export function sayHello() {
  return `Hello, ${person.name}`;
}

const greeting = sayHello();

export default greeting;
