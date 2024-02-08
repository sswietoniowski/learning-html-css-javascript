const input = require('sync-input');

const name = input("Enter name: ")
const surname = input("Enter surname: ")
const message = input("Enter message: ")
const repeats = Number(input("Enter number of repeats: "))

for (let i = 0; i < repeats; i++) {
    console.log(`This is ${name} ${surname} and ${message}`);
}
