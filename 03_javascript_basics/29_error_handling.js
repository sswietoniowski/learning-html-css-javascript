const user = { email: 'jdoe@example.com' };

class InvalidArgument extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidArgument';
  }
}

try {
  // Produce a ReferenceError
  //   myFunc();
  // Produce a TypeError
  //   null.myFunc();
  // Produce a SyntaxError
  //   eval('Hello World');
  // Produce a URIError
  //   decodeURIComponent('%');
  if (!user.name) {
    // throw 'User has no name';
    // throw new SyntaxError('User has no name');
    throw new InvalidArgument('User has no name');
  }
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
