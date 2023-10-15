async function myFunc() {
  await setTimeout(() => console.log('Hello'), 2000);

  return 'Hello';
}

// file deepcode ignore PromiseNotCaughtGeneral: this is just a demo code
myFunc().then((data) => console.log(data));

/*

Top-level await enables modules to act as big async functions: they can await top-level promises. This is not possible in normal modules, where await can only be used in async functions.

This is a new feature in ES2020 (ES11) supported by ECMAScript Modules (ESM). It is not supported in CommonJS modules.

*/
