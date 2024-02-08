const input = require('sync-input');

const attempts = 8;
const title = `H A N G M A N`;
console.log(title);
console.log();

const words = ["python", "java", "swift", "javascript"];
const word = words[Math.floor(Math.random() * words.length)];

const hint = word.substring(0, 3) + "-".repeat(word.length - 3);

let revealedWord = "-".repeat(word.length);

for (let i = 0; i < attempts; i++) {
    console.log(revealedWord);
    const letter = input("Input a letter: ");

    if (word.includes(letter)) {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === letter) {
                revealedWord = revealedWord.substring(0, j) + letter + revealedWord.substring(j + 1);
            }
        }
    } else {
        console.log("That letter doesn't appear in the word");
    }
}

console.log("Thanks for playing!");