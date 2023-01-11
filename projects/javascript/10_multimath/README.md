# MultiMath

This is a simple project that demonstrates how to use TypeScript to create a library that can be used in a web page.

## Installing TypeScript and Configuring a Project

Information about how-to install TypeScript can be found [here](https://www.typescriptlang.org/download).

To install it globally, run the following command:

```bash
npm install -g typescript
```

To install it locally, run the following command:

```bash
npm install typescript --save-dev
```

Of course, we must install Node.js first. You can download it [here](https://nodejs.org/en/download/).

To create a default configuration file, run the following command:

```bash
tsc --init
```

Complete list of all configuration options can be found [here](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

## Taking Advantages of Built-in Types

### Basic Types and Variable Declarations

We can use the following types:

- `boolean`
- `number`
- `string`
- `Array`
- `Enum`

To declare a variable, we can use the following syntax:

```typescript
let myVariable: type = value;
```

Alternatively, we can declare constants using the following syntax:

```typescript
const myConstant: type = value;
```

We are not using `var` keyword anymore. We are using `let` or `const` keywords instead.

### Type Annotations and Type Inference

Type annotations are used to tell TypeScript what type of value a variable will refer to. Type inference is the ability of TypeScript to figure out what type of value a variable refers to.

Example of type annotations:

```typescript
let myString: string;
myString = 'Hello World';
```

Example of type inference:

```typescript
let myString = 'Hello World'; // TypeScript will infer that myString is a string
```

### Additional Built-in Types

Additional built-in types are used to represent values that may be more than one type.

That includes the following types:

- `Tuple`
- `Any`
- `Void`
- `Null`
- `Undefined`
- `Never`

#### The Any Type

The `any` type is used to represent values that may be more than one type. It is the default type for variables that are declared without an explicit type annotation.

#### The Void Type

The `void` type is used to represent the absence of a value. Most commonly, it is used to represent the return type of functions that do not return a value.

#### The Null and Undefined Types

The `null` and `undefined` types are used to represent the absence of a value.

#### The Never Type

The `never` type is used to represent the type of values that never occur. For example, a function that always throws an exception or one that never returns.

#### The Tuple Type

The `tuple` type is used to represent an array with a fixed number of elements whose types are known, but need not be the same.

Example of the `tuple` type:

```typescript
let myTuple: [string, number];
myTuple = ['Hello World', 42];
```

### Union Types and the --strictNullChecks Flag

Union types are used to allow a variable to refer to more than one type of value. The `-strictNullChecks` flag is used to enable strict null checking.

Example of union types:

```typescript
let myString: string | number;
myString = 'Hello World';
myString = 45;
```

Example of the `--strictNullChecks` flag:

```typescript
let myString: string;
myString = 'Hello World';
myString = null; // Error: Type 'null' is not assignable to type 'string'
```

### Type Assertions

Type assertions are used to tell TypeScript that we know better than it what the type of a value is.

Example of type assertions:

```typescript
let myString: any = 'Hello World';
let strLength: number = (<string>myString).length;
```

Alternatively, we can use the `as` keyword:

```typescript
let myString: any = 'Hello World';
let strLength: number = (myString as string).length;
```

## Writing Better Functions with TypeScript

## Creating and Using Custom Types

## Creating and Consuming Modules

## Being More Productive with Type Declaration Files
