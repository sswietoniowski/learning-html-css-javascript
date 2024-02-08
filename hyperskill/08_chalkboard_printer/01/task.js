// We have imported the 'sync-input'
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));

const input = require('sync-input');

const name = "Bart";
const surname = "Simpson";
const message = "I will not skateboard in the halls.";

for (let i = 0; i < 5; i++) {
    console.log(`This is ${name} ${surname} and ${message}`);
}
