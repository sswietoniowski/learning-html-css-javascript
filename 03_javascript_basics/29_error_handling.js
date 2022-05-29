try {
  // Produce a ReferenceError
  //   myFunc();
  // Produce a TypeError
  //   null.myFunc();
  // Produce a SyntaxError
  //   eval('Hello World');
} catch (error) {
  console.log(error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
  console.log(error instanceof SyntaxError);
} finally {
  console.log('Finally runs regardless of error');
}

console.log('Program continues');
