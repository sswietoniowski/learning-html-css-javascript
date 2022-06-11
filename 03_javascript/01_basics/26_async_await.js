async function myFunc() {
  await setTimeout(() => console.log('Hello'), 2000);

  return 'Hello';
}

myFunc().then((data) => console.log(data));
