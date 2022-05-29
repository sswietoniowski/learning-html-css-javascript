let re = /hello/; // pattern
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search

console.log(re);
console.log(re.source);

// exec() - returns an array of the match or null if no match
const result = re.exec('hello world');
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - returns true or false
const result2 = re.test('hello world');
console.log(result2);

// match() - returns an array of the matches or null if no match
const result3 = 'Hello there'.match(re);
console.log(result3);

// search() - returns the index of the first match or -1 if no match
const result4 = 'This is: Hello there'.search(re);
console.log(result4);

// replace() - returns a new string with some or all matches of a pattern
const result5 = 'Hello there'.replace(re, 'Hi');
console.log(result5);
