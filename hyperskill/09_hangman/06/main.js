const input = require('sync-input');

const title = `H A N G M A N`;
console.log(title);
console.log();

const words = ["python", "java", "swift", "javascript"];
const word = words[Math.floor(Math.random() * words.length)];

const hint = word.substring(0, 3) + "-".repeat(word.length - 3);

let revealedWord = "-".repeat(word.length);
let alreadyGuessed = new Set();

let lives = 8;
while (lives > 0 && revealedWord !== word) {
    console.log(revealedWord);
    const letter = input("Input a letter: ");

    if (alreadyGuessed.has(letter)) {
        console.log("No improvements");
        lives--;
    } else if (word.includes(letter)) {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === letter) {
                revealedWord = revealedWord.substring(0, j) + letter + revealedWord.substring(j + 1);
            }
        }
        alreadyGuessed.add(letter);
    } else {
        console.log("That letter doesn't appear in the word");
        lives--;
    }
}

if (revealedWord === word) {
    console.log("You guessed the word!");
    console.log("You survived!");
} else {
    console.log("You lost!");
}