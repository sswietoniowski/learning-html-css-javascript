// We have imported the 'sync-input'
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));

const input = require('sync-input');

const name = input("Enter name: ")
const surname = input("Enter surname: ")
const message = input("Enter message: ")

for (let i = 0; i < 5; i++) {
    console.log(`This is ${name} ${surname} and ${message}`);
}
