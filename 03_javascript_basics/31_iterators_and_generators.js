// Iterator example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    },
  };
}

// Create an array of names
const names = ['Jack', 'Jill', 'John'];

// Init iterator and pass in names array
const namesIterator = nameIterator(names);

console.log(namesIterator.next().value); // Jack
console.log(namesIterator.next().value); // Jill
console.log(namesIterator.next().value); // John
console.log(namesIterator.next().done); // true

for (const name of names) {
  console.log(name);
}

// Generator example
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

sayNames().next; // { value: 'Jack', done: false }
sayNames().next; // { value: 'Jill', done: false }
sayNames().next; // { value: 'John', done: false }
sayNames().next; // { done: true }

for (const name of sayNames()) {
  console.log(name);
}

// ID creator
function* createIds() {
  let index = 1;

  while (true) {
    yield index++;
  }
}

const ids = createIds();
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
