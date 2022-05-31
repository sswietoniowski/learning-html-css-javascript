// MODULE PATTERN

// Basic structure of the module pattern

// (function() {
//     // Declare private vars and functions

//     return {
//         // Declare public vars and functions
//     }
// })();

const UIController = (function () {
  let text = 'Hello World!';

  const changeText = function () {
    const element = document.getElementById('heading');
    element.textContent = text;
  };

  return {
    callChangeText: function () {
      changeText();
      console.log(text);
    },
  };
})();

UIController.callChangeText();

// UIController.changeText();
// console.log(UIController.text);

// REVEALING MODULE PATTERN

const ItemController = (function () {
  let _data = [];

  function add(item) {
    _data.push(item);
    console.log('Item Added...');
  }

  function get(id) {
    return _data.find((item) => item.id === id);
  }

  return {
    add: add,
    get: get,
  };
})();

ItemController.add({ id: 1, name: 'John' });
ItemController.add({ id: 2, name: 'Peter' });
ItemController.add({ id: 3, name: 'Mike' });

console.log(ItemController.get(2));

// These days (ES6) this pattern can be replaced by the class with (private) static methods.
// More on that here: https://dev.to/nas5w/the-revealing-module-pattern-in-javascript-15a8