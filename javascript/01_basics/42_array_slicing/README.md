# JavaScript Array Slicing

## Introduction

Arrays are a fundamental data structure in most programming languages, and JavaScript is no exception. An _array_ is an ordered collection of values. Each value is called an _element_, and each element has a numeric position in the array, known as its _index_. JavaScript arrays are untyped: an array element may be of any type, and different elements of the same array may be of different types. In reality though, arrays are usually used to store elements of the same type. For example, an array of integers or an array of strings.

For more curious readers, arrays in JS might not be what most would think of them or how they are described by the above definition. [Here](https://youtu.be/QRGNLYxulmc) you'll find an explanation why.

There are many ways to manipulate arrays in JavaScript. One powerful technique, "**slicing**," allows developers to extract a portion of an array. This article will delve into the concept of array slicing in JavaScript, explaining its syntax, uses, and providing practical examples.

## Basics of Array in JavaScript

An array in JavaScript is an object used to store multiple values in a single variable. You can create an array in JavaScript by declaring a variable and assigning it to a new Array object, by using the array literal syntax or with the `Array.of()` and `Array.from()` methods.

Example:

```javascript
// Array Literals
let empty = []; // An array with no elements
let primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements that are prime numbers
let morePrimes = [...primes, 13, 17, 19, 23, 29]; // An array with 10 numeric elements using spread operator
let anything = [1.1, 'one', true]; // An array with 3 elements of different types
let threeElements = [1, , 3]; // An array with 3 elements, 2nd element is undefined

// Array Constructor
let array1 = new Array(); // An empty array, equivalent to []
let array2 = new Array(10); // An array with 10 undefined elements

// Array.of and Array.from
let numbers1 = Array.of(1, 2, 3); // An array with three numeric elements
let numbers2 = Array.from(numbers); // A copy (shallow) of the numbers array
```

## What is Array Slicing?

The term "**slicing**" in the context of arrays means getting a subset of elements from the original array. In JavaScript, you can do this using the [**`slice()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method.

```javascript
let newArray = oldArray.slice(start, end);
```

`start` and `end` are parameters denoting the range of elements you want to extract, where `start` is inclusive and `end` is exclusive. That means, the slice starts from the index `start` and extracts elements up to (but not including) the index `end`.

## Understanding Array.slice()

> The `slice()` method returns a new array containing a shallow copy of a portion of an array. The original array will not be modified.

```javascript
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let someFruits = fruits.slice(1, 3);
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']
console.log(someFruits); // Output: ['banana', 'cherry']
```

In the above example, the `slice()` method creates a new array `someFruits` containing elements from index 1 to 2 of the `fruits` array.

### Special Cases

#### No parameters

If you call `slice()` without any parameters, it returns a copy of the original array.

```javascript
let fruitsCopy = fruits.slice();
console.log(fruitsCopy); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']
```

To achieve the same result, you can also use the spread operator (`...`):

```javascript
let fruitsCopy2 = [...fruits];
```

or the `Array.from()` method:

```javascript
let fruitsCopy3 = Array.from(fruits);
```

#### Negative indices

You can use negative indices to count from the end of the array. `-1` refers to the last element, `-2` refers to the second last, and so on.

```javascript
let lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits); // Output: ['date', 'elderberry']
```

#### One parameter

If you provide only one parameter, the `slice()` method will return elements from the start index to the end of the array.

```javascript
let fromCherry = fruits.slice(2);
console.log(fromCherry); // Output: ['cherry', 'date', 'elderberry']
```

## Performance Considerations

While `slice()` is a powerful method, it's important to note that it creates a new array. If you're working with large arrays, this can lead to significant memory usage. As such, it should be used judiciously.

## The Array.splice() Method

It's worth noting the existence of another JavaScript method that sounds similar but serves a different purpose: [**`splice()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

> The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. `splice()` can be used to add new items to an array, remove items from it, or a combination of both. Importantly, unlike `slice()`, `splice()` modifies the original array.

Here's an example of using `splice()`:

```javascript
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
fruits.splice(2, 0, 'cantaloupe');
console.log(fruits); // Output: ['apple', 'banana', 'cantaloupe', 'cherry', 'date', 'elderberry']
```

In this example, `splice()` starts at the 2nd index of the array, removes 0 elements, and adds 'cantaloupe' at that position.

## Slicing vs Splicing

As we've seen, slicing and splicing are two different operations:

- `slice()` is a non-destructive method that leaves the original array untouched and returns a new array with selected items.

- `splice()` is a destructive method that changes the original array by adding, replacing, or removing items.

It's essential to understand the distinction and choose the appropriate method based on the needs of your program.

## Conclusion

The array slicing technique in JavaScript, provided by the `slice()` method, is a powerful tool for extracting portions of an array. By understanding how to use it effectively, you can write more concise and readable code. However, remember that `slice()` creates a new array, which can have implications for memory usage, and it doesn't modify the original array, unlike `splice()`. Always choose the appropriate method for your specific needs, and happy coding!

This article should serve as a comprehensive guide to array slicing in JavaScript. Try out these examples in your own code and experiment with the `slice()` method to better understand its capabilities and usage. You can find my examples [here](https://github.com/sswietoniowski/learning-html-and-css-and-javascript/tree/master/javascript/01_basics/42_array_slicing).
