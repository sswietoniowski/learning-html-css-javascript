let re = /hello/; // pattern
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search

console.log(re);
console.log(re.source);

// exec() - returns an array of the match or null if no match
let result = re.exec('hello world');
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - returns true or false
result = re.test('hello world');
console.log(result);

// match() - returns an array of the matches or null if no match
result = 'Hello there'.match(re);
console.log(result);

// search() - returns the index of the first match or -1 if no match
result = 'This is: Hello there'.search(re);
console.log(result);

// replace() - returns a new string with some or all matches of a pattern
result = 'Hello there'.replace(re, 'Hi');
console.log(result);

function reExec(re, string) {
  let result = re.exec(string);
  if (result) {
    console.log(`${string} matched the regex /${re.source}/`);
    console.log(`The match was: ${result[0]}`);
    console.log(`The index of the match was: ${result.index}`);
    console.log(`The input string was: ${result.input}`);
  } else {
    console.log(`${string} did NOT MATCH the regex /${re.source}/`);
  }
  return result;
}

/**
 * Tests whether a string contains the pattern.
 * @param  {pattern} re
 * @param  {string} string
 *
 * https://jsdoc.app/about-getting-started.html
 */
function reTest(re, string) {
  if (re.test(str)) {
    console.log(`${string} matched the regex /${re.source}/`);
  } else {
    console.log(`${string} did NOT MATCH the regex /${re.source}/`);
  }
}

let str = 'Hello World';
reTest(re, str);
reExec(re, str);

// Literal characters
re = /hello/i;
reTest(re, str);
reExec(re, str);

// Metacharacters symbols
re = /^hello/i; // starts with
reTest(re, str);

re = /world$/i; // ends with
reTest(re, str);

re = /^hello$/i; // starts and ends with
reTest(re, str);

re = /.ello/i; // '.' matches single character
reTest(re, str);

re = /e*o/; // '*' matches zero or more
reTest(re, str);

str = 'Gray';
re = /gre?a?y/i; // '?' matches zero or one
reTest(re, str);

re = /gray\?/i; // '\' escapes the '?'
reTest(re, str);
