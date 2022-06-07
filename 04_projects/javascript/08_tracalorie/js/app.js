// Storage Controller
const StorageController = (function () {
  // Public methods
  return {};
})();

// Item Controller
const ItemController = (function () {
  // Item constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure / State
  const data = {
    items: [
      { id: 0, name: 'Steak Dinner', calories: 1200 },
      { id: 1, name: 'Cookie', calories: 400 },
      { id: 2, name: 'Eggs', calories: 300 },
      { id: 3, name: 'Milk', calories: 900 },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  // Public methods
  return {
    logData: function () {
      return data;
    },
  };
})();

// UI Controller
const UIController = (function () {
  // Public methods
  return {};
})();

// App
const App = (function (ItemController, UIController, StorageController) {
  // Public methods
  return {
    init: function () {
      console.log(ItemController.logData());
    },
  };
})(ItemController, UIController, StorageController);

// Initialize App
App.init();
