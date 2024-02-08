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

let wins = 0;
let losses = 0;

const showResult = (revealedWord, word) => {
    if (revealedWord === word) {
        console.log(`You guessed the word ${word}!`);
        console.log("You survived!");
        wins++;
    } else {
        console.log("You lost!");
        losses++;
    }
}

const game = () => {
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

const showMenu = () => {
    return input(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:`);
}

const hangman = () => {
    showBanner();

    while (true) {
        switch (showMenu()) {
            case "play":
                game();
                break;
            case "results":
                console.log(`You won: ${wins} times.`);
                console.log(`You lost: ${losses} times.`);
                break;
            case "exit":
                return;
            default:
                console.log("Invalid command!");
        }
    }
}

hangman();