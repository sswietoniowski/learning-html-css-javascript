// SINGLETON PATTERN

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object('I am the instance');
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Get a Singleton instance
const instance1 = Singleton.getInstance();
console.log(instance1);
const instance2 = Singleton.getInstance();
console.log(instance2);
console.log(instance1 === instance2);
