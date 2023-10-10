

<!-- toc -->

- [Functions](#functions)
  * [Function declaration](#function-declaration)
  * [Function expression](#function-expression)
  * [Arrow function](#arrow-function)
  * [Function invocation](#function-invocation)
  * [Function return value](#function-return-value)
  * [Function parameters](#function-parameters)
    + [Typing function parameters](#typing-function-parameters)
    + [Default function parameters](#default-function-parameters)
  * [Function can be arguments of other functions](#function-can-be-arguments-of-other-functions)

<!-- tocstop -->

## Functions

Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of
statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from
which you wish to call it.

### Function declaration

In JavaScript, a function declaration is used to create a function. Here's an example:

```javascript
function greet(name) {
    console.log("Hello, " + name);
}
```

In this example, the `greet` function is declared with one parameter: `name`. The function body contains
a `console.log()` statement that displays a greeting to the user.
`name` is called a parameter, while `John` is called an argument. Parameters are variables that are used to store the
values of arguments passed to a function. Arguments are the values that are passed to a function when it is called.

### Function expression

In JavaScript, a function expression is used to create a function. Here's an example:

```javascript
let greet = function (name) {
    console.log("Hello, " + name);
};
```

In this example, the `greet` function is declared with one parameter: `name`. The function body contains
a `console.log()` statement that displays a greeting to the user.
`name` is called a parameter, while `John` is called an argument. Parameters are variables that are used to store the
values of arguments passed to a function. Arguments are the values that are passed to a function when it is called.

Same results as the function declaration example.

### Arrow function

In JavaScript, an arrow function is used to create a function. Here's an example:

```javascript
let greet = (name) => {
    console.log("Hello, " + name);
};
```

In this example, the `greet` function is declared with one parameter: `name`. The function body contains
a `console.log()` statement that displays a greeting to the user.
`name` is called a parameter, while `John` is called an argument. Parameters are variables that are used to store the
values of arguments passed to a function. Arguments are the values that are passed to a function when it is called.

Same results as the function declaration example.

### Function invocation

In JavaScript, a function invocation is used to call a function. Here's an example:

```javascript
function greet(name) {
    console.log("Hello, " + name);
}

greet("John"); // Hello, John
```

In this example, the `greet` function is called with one argument: `John`. The function body contains a `console.log()`
statement that displays a greeting to the user.

### Function return value

In JavaScript, a function return value is used to return a value from a function. Here's an example:

```javascript
function greet(name) {
    return "Hello, " + name;
}

let message = greet("John");
console.log(message); // Hello, John
```

In this example, the `greet` function is called with one argument: `John`. The function body contains a `return`
statement that returns a greeting to the user. The `message` variable is assigned the return value of the `greet`
function.

### Function parameters

In JavaScript, a function parameter is used to pass a value to a function. Here's an example:

```javascript
function greet(name) {
    console.log("Hello, " + name);
}

greet("John"); // Hello, John
```

In this example, the `greet` function is declared with one parameter: `name`. The function body contains
a `console.log()` statement that displays a greeting to the user.

#### Typing function parameters

In JavaScript, a function parameter can be typed. Here's an example:

```javascript
function greet(name: string) {
    console.log("Hello, " + name);
}

greet("John"); // Hello, John
```

and you can type also the return value:

```javascript
function greet(name: string): string {
    return "Hello, " + name;
}

let message = greet("John");
console.log(message); // Hello, John
```

In this example, the `greet` function is declared with one parameter: `name`. The function body contains
a `console.log()` statement that displays a greeting to the user.

#### Default function parameters

In JavaScript, a function parameter can have a default value. Here's an example:

```javascript
function greet(name: string = "John") {
    console.log("Hello, " + name);
}

greet(); // Hello, John
```

In this example, the `greet` function is declared with one parameter: `name`. The function body contains
a `console.log()` statement that displays a greeting to the user.

### Function can be arguments of other functions

In JavaScript, a function can be passed as an argument to another function. Here's an example:

```javascript
function greet(name) {
    console.log("Hello, " + name);
}

function greetUser(greet, name) {
    greet(name);
}

greetUser(greet, "John"); // Hello, John
```

In this example, the `greet` function is declared with one parameter: `name`. The function body contains
a `console.log()` statement that displays a greeting to the user.
