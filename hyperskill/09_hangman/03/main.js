const input = require('sync-input')

const title = `H A N G M A N`
console.log(title)

const words = ["python", "java", "swift", "javascript"];
const word = words[Math.floor(Math.random() * words.length)];

const guess = input("Guess the word: ")

if (guess === word) {
    console.log("You survived!")
} else {
    console.log("You lost!")
}