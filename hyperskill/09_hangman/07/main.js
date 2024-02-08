const input = require('sync-input');

const readLetter = (revealedWord) => {
    let letter;
    while (true) {
        console.log(revealedWord)
        letter = input("Input a letter: ");
        if (letter.length !== 1) {
            console.log("Please, input a single letter.");
        } else if (!letter.match(/[a-z]/)) {
            console.log("Please, enter a lowercase letter from the English alphabet.");
        } else {
            break;
        }
    }

    return letter;
}

const showBanner = () => {
    console.log("H A N G M A N");
    console.log();
}

const chooseWord = () => {
    const words = ["python", "java", "swift", "javascript"];
    return words[Math.floor(Math.random() * words.length)];
}

const revealWord = (word, guessedLetters) => {
    let revealedWord = "";
    for (let i = 0; i < word.length; i++) {
        if (guessedLetters.has(word[i])) {
            revealedWord += word[i];
        } else {
            revealedWord += "-";
        }
    }

    return revealedWord;
}

const showResult = (revealedWord, word) => {
    if (revealedWord === word) {
        console.log(`You guessed the word ${word}!`);
        console.log("You survived!");
    } else {
        console.log("You lost!");
    }
}

const game = () => {
    showBanner();

    const word = chooseWord();

    let revealedWord = "-".repeat(word.length);
    let alreadyGuessed = new Set();

    let lives = 8;
    while (lives > 0 && revealedWord !== word) {
        const letter = readLetter(revealedWord);

        if (alreadyGuessed.has(letter)) {
            console.log("You've already guessed this letter.");
        } else if (word.includes(letter)) {
            alreadyGuessed.add(letter);
            revealedWord = revealWord(word, alreadyGuessed);
        } else {
            console.log("That letter doesn't appear in the word");
            alreadyGuessed.add(letter);
            lives--;
        }
    }

    showResult(revealedWord, word);
}

game();