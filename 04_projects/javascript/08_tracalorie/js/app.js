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
    getItems: function () {
      return data.items;
    },
  };
})();

// UI Controller
const UIController = (function () {
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories',
  };

  // Public methods
  return {
    populateItemList: function (items) {
      let html = '';

      items.forEach((item) => {
        html += `
          <li class="collection-item" id="item-${item.id}">
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          </li>
        `;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
  };
})();

// App
const App = (function (ItemController, UIController, StorageController) {
  // Public methods
  return {
    init: function () {
      // Fetches items from data structure
      const items = ItemController.getItems();

      // Populates list with items
      UIController.populateItemList(items);
    },
  };
})(ItemController, UIController, StorageController);

// Initialize App
App.init();
