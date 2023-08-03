async function myFunc() {
  await setTimeout(() => console.log('Hello'), 2000);

  return 'Hello';
}

// file deepcode ignore PromiseNotCaughtGeneral: this is just a demo code
myFunc().then((data) => console.log(data));
