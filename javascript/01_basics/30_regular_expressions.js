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

str = 'The quick brown fox jumps over the lazy dog';
re = /[a-z]/; // '[' and ']' define a character class
reTest(re, str);

re = /[^a-z]/; // '^' inverts the character class
reTest(re, str);

re = /T[a-z]{2,7}/; // '{' and '}' define a range
reTest(re, str);

// other quantifiers - +, *, ?, {n,m}

re = /\w+/; // \w = [a-zA-Z0-9_]
reTest(re, str);

re = /\W+/; // \W = [^a-zA-Z0-9_]
reTest(re, str);

re = /\d+/; // \d = [0-9]
reTest(re, str);

re = /\D+/; // \D = [^0-9]
reTest(re, str);

re = /\s+/; // \s = [ \t\n\r\f]
reTest(re, str);

re = /\S+/; // \S = [^ \t\n\r\f]
reTest(re, str);

re = /\bquick/; // \b = word boundary
reTest(re, str);

re = /x(?=y)/; // positive lookahead, match x only if followed by y
str = 'abcxyz';
reTest(re, str);

re = /x(?!y)/; // negative lookahead, match x only if not followed by y
str = 'abcxz';
reTest(re, str);
