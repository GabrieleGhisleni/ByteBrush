

<!-- toc -->

- [JavaScript](#javascript)
  * [Introduction](#introduction)
  * [Data Types](#data-types)
    + [Number](#number)
      - [Number operators](#number-operators)
      - [Number operators between numbers and strings](#number-operators-between-numbers-and-strings)
    + [String](#string)
      - [String basic exercises](#string-basic-exercises)
    + [Boolean](#boolean)
      - [Boolean truthy and falsy values](#boolean-truthy-and-falsy-values)
      - [Unexpected truthy](#unexpected-truthy)
      - [Boolean operators](#boolean-operators)
      - [Short-circuit evaluation](#short-circuit-evaluation)
      - [Null](#null)
      - [Undefined](#undefined)
      - [Null vs Undefined](#null-vs-undefined)
    + [Object](#object)
      - [Nested Objects](#nested-objects)
      - [Objects built-in methods](#objects-built-in-methods)
      - [Object destructuring](#object-destructuring)
      - [Object spread operator](#object-spread-operator)
      - [Object decorators](#object-decorators)
      - [Function as property](#function-as-property)
        * ['this' Keyword](#this-keyword)
      - [Object Constructors](#object-constructors)
      - [Object exercises](#object-exercises)
    + [Array](#array)
      - [Array built-in methods](#array-built-in-methods)
      - [Array built-in loops](#array-built-in-loops)
      - [Array decomposition](#array-decomposition)
      - [Array spread operator](#array-spread-operator)
      - [Multi-dimensional arrays](#multi-dimensional-arrays)
      - [Array exercises](#array-exercises)
    + [Sets](#sets)
      - [Set built-in methods](#set-built-in-methods)
      - [Set and arrays](#set-and-arrays)
  * [Control Flow](#control-flow)
    + [If...else](#ifelse)
    + [If...else if...else](#ifelse-ifelse)
    + [Switch](#switch)
    + [Ternary operator](#ternary-operator)
  * [Loops](#loops)
    + [For loop](#for-loop)
    + [While loop](#while-loop)
    + [Do...while loop](#dowhile-loop)
    + [For...in loop](#forin-loop)
    + [For...of loop](#forof-loop)
  * [Functions](#functions)
    + [Function declaration](#function-declaration)
    + [Function expression](#function-expression)
    + [Arrow function](#arrow-function)
    + [Function invocation](#function-invocation)
    + [Function return value](#function-return-value)
    + [Function parameters](#function-parameters)
      - [Typing function parameters](#typing-function-parameters)
      - [Default function parameters](#default-function-parameters)
    + [Function can be arguments of other functions](#function-can-be-arguments-of-other-functions)
  * [Error handling](#error-handling)
  * [Browser APIs](#browser-apis)
    + [DOM Manipulation](#dom-manipulation)
      - [Selecting elements](#selecting-elements)
      - [Element manipulations](#element-manipulations)
      - [Styling elements](#styling-elements)
      - [Displaying elements conditionally](#displaying-elements-conditionally)
    + [Events](#events)
      - [Event listeners](#event-listeners)
      - [Mouse events](#mouse-events)
      - [Keyboard events](#keyboard-events)
      - [Form events](#form-events)
      - [Window events](#window-events)
  * [Timers](#timers)
  * [Async (to be enriched)](#async-to-be-enriched)
  * [Cost complexity (O notation)](#cost-complexity-o-notation)
    + [Most common Big O notations](#most-common-big-o-notations)
    + [Built-in methods and Big O notation](#built-in-methods-and-big-o-notation)
    + [Loop complexity](#loop-complexity)

<!-- tocstop -->

# JavaScript

## Introduction

JavaScript is a high-level, interpreted programming language that is primarily used for enhancing interactivity and
improving the user experience on web pages. It is one of the three core technologies of the World Wide Web, alongside
HTML and CSS. JavaScript enables interactive web features such as form submissions, animations, user activity tracking,
and more.

JavaScript is a versatile language and can be used for both client-side and server-side development. This is made
possible by environments such as Node.js, which allows JavaScript to run outside of the browser.

Now, let's delve into the core components of JavaScript:

1. **Variables**: Variables are used to store data values. In JavaScript, you declare a variable using the `var`, `let`,
   or `const` keyword.

2. **Data Types**: JavaScript has several data types including Number, String, Boolean, Object, Null, and Undefined.

3. **Operators**: JavaScript uses arithmetic, comparison, and logical operators to perform operations on values.

4. **Control Structures**: These include conditional statements like `if`, `else`, `switch`, and loops like `for`
   , `while`, and `do while`.

5. **Functions**: Functions are blocks of code designed to perform a particular task. They are executed when they are
   called or invoked.

6. **Objects**: JavaScript is an object-oriented language and uses objects to model real-world things. Objects are
   variables too, but they contain many values, referred to as properties and methods.

7. **Events**: JavaScript allows you to create interactive web pages with Event Handlers. An event can be something the
   browser does, or something a user does.

8. **Error Handling**: JavaScript provides several methods for catching and handling errors, including `try`, `catch`
   , `throw`, and `finally` statements.

9. **DOM Manipulation**: The Document Object Model (DOM) is a programming interface for web documents. It represents the
   structure of a document and allows JavaScript to manipulate the content and structure of a web page.

10. **Asynchronous JavaScript**: JavaScript is single-threaded, but it can achieve concurrency through the use of
    callbacks, promises, and async/await.

These are the core components of JavaScript. Each component plays a crucial role in the functionality of the language
and contributes to the development of interactive and dynamic web pages.

## Data Types

Let's delve deeper into JavaScript data types.

1. **Number**: This data type is used to represent both integer and floating-point numbers. For example, `var num = 25;`
   or `var floatNum = 25.5;`.

2. **String**: This data type is used to represent a sequence of characters. Strings in JavaScript must be enclosed in
   quotes. For example, `var str = "Hello World";`.

3. **Boolean**: This data type can hold only two values: true or false. It is typically used for conditional testing.
   For example, `var isTrue = true;`.

4. **Undefined**: A variable that has been declared but has not been assigned a value is undefined. For
   example, `var x;`.

5. **Null**: This is a special keyword denoting a null value. It means no value or no object. It implies the absence of
   value.

6. **Object**: JavaScript is an object-oriented programming language and provides a special data type called object.
   Objects are variables too, but they contain many values. An example of an object
   is `var car = {type:"Fiat", model:"500", color:"white"};`.

7. **Array**: An array is a special type of object used for storing multiple values in a single variable. Each value is
   assigned a numeric index starting from 0. For example, `var fruits = ["Apple", "Banana", "Mango"];`. Here, "Apple" is
   at index 0, "Banana" is at index 1, and so on.

These data types form the building blocks of JavaScript programming. Understanding them is crucial to manipulating data
effectively in your JavaScript programs.

### Number

The Number data type is used to represent both integer and floating-point numbers. For example, `var num = 25;`
or `var floatNum = 25.5;`.

JavaScript provides several methods for working with numbers. Let's look at some of them:

1. **toString()**: This method converts a number to a string. For example, `var num = 25; var str = num.toString();`.
2. **toFixed()**: This method formats a number with a specific number of digits to the right of the decimal. For
   example, `var num = 25.5; var str = num.toFixed(2);`.
3. **toPrecision()**: This method formats a number to a specified length. For
   example, `var num = 25.5; var str = num.toPrecision(2);`.
4. **parseInt()**: This method parses a string and returns an integer. For
   example, `var str = "25"; var num = parseInt(str);`.
5. **parseFloat()**: This method parses a string and returns a floating-point number. For
   example, `var str = "25.5"; var num = parseFloat(str);`.
6. **isNaN()**: This method checks whether a value is NaN (Not a Number). For
   example, `var num = 25; var isNum = isNaN(num);`.
7. **isFinite()**: This method checks whether a value is a finite number. For
   example, `var num = 25; var isNum = isFinite(num);`.
8. **NaN**: This property represents Not a Number. For example, `var notNum = Number.NaN;`.
9. **Number()**: This method converts a value to a number. For example, `var num = Number("25");`.

#### Number operators

JavaScript provides several operators for performing arithmetic operations on numbers. Let's look at some of them:

1. **+**: This operator adds two numbers. For example, `var sum = 5 + 5;`.
2. **-**: This operator subtracts two numbers. For example, `var diff = 5 - 5;`.
3. **\***: This operator multiplies two numbers. For example, `var product = 5 * 5;`.
4. **/**: This operator divides two numbers. For example, `var quotient = 5 / 5;`.
5. **%**: This operator returns the remainder of two numbers. For example, `var remainder = 5 % 5;`.
6. **++**: This operator increments a number by 1. For example, `var num = 5; num++;`.
7. **--**: This operator decrements a number by 1. For example, `var num = 5; num--;`.
8. **+=**: This operator adds a value to a variable. For example, `var num = 5; num += 5;`.
9. **-=**: This operator subtracts a value from a variable. For example, `var num = 5; num -= 5;`.
10. **\*=**: This operator multiplies a value to a variable. For example, `var num = 5; num *= 5;`.
11. **/=**: This operator divides a value from a variable. For example, `var num = 5; num /= 5;`.
12. **%=**: This operator returns the remainder of a value from a variable. For example, `var num = 5; num %= 5;`.

#### Number operators between numbers and strings

JavaScript provides several operators for performing operations between numbers and strings. Many of them produce
unexpected results. Let's look at some of them:

1. **Addition (+) Operator**: When you use the + operator with a number and a string, JavaScript performs string
   concatenation, meaning it combines the two operands into one string.

Example:

```javascript
console.log(5 + "10"); // Output: "510"
console.log("10" + 5); // Output: "105"
```

In both cases, JavaScript converts the number to a string and concatenates it with the other string.

2. **Subtraction (-) Operator**: When you use the - operator with a number and a string, JavaScript attempts to convert
   the string to a number and perform the subtraction. If the string cannot be converted to a number, the result is
   NaN (Not a Number).

Example:

```javascript
console.log(5 - "10"); // Output: -5
console.log("10" - 5); // Output: 5
console.log("ten" - 5); // Output: NaN
```

In the first two cases, JavaScript successfully converts the string "10" to a number and performs the subtraction. In
the third case, since "ten" cannot be converted to a number, the result is NaN.

Remember, the order of operands matters in subtraction but not in concatenation. So, "10" - 5 is not the same as 5 - "
10", but "10" + 5 is the same as 5 + "10".

3. **Multiplication (\*) Operator**: When you use the \* operator with a number and a string, JavaScript attempts to
   convert the string to a number and perform the multiplication. If the string cannot be converted to a number, the
   result is NaN (Not a Number).

Example:

```javascript
console.log(5 * "10"); // Output: 50
console.log("10" * 5); // Output: 50
console.log("ten" * 5); // Output: NaN
```

In the first two cases, JavaScript successfully converts the string "10" to a number and performs the multiplication. In
the third case, since "ten" cannot be converted to a number, the result is NaN.

### String

The String data type is used to represent a sequence of characters. Strings in JavaScript must be enclosed in quotes.
For example, `var str = "Hello World";`.

JavaScript provides several methods for working with strings. Let's look at some of them:

1. **length**: This property returns the length of a string. For
   example, `var str = "Hello World"; var len = str.length;`.
2. **indexOf()**: This method returns the index of the first occurrence of a specified value in a string. For
   example, `var str = "Hello World"; var index = str.indexOf("World");`.
3. **lastIndexOf()**: This method returns the index of the last occurrence of a specified value in a string. For
   example, `var str = "Hello World"; var index = str.lastIndexOf("World");`.
4. **search()**: This method searches a string for a specified value and returns the position of the match. For
   example, `var str = "Hello World"; var index = str.search("World");`.
5. **slice()**: This method extracts a part of a string and returns the extracted part in a new string. For
   example, `var str = "Hello World"; var newStr = str.slice(0, 5);`.
6. **substring()**: This method extracts a part of a string and returns the extracted part in a new string. For
   example, `var str = "Hello World"; var newStr = str.substring(0, 5);`.
7. **substr()**: This method extracts a part of a string and returns the extracted part in a new string. For
   example, `var str = "Hello World"; var newStr = str.substr(0, 5);`.
8. **replace()**: This method searches a string for a specified value, or a regular expression, and returns a new string
   where the specified values are replaced. For
   example, `var str = "Hello World"; var newStr = str.replace("World", "JavaScript");`.
9. **toUpperCase()**: This method converts a string to uppercase letters. For
   example, `var str = "Hello World"; var newStr = str.toUpperCase();`.
10. **toLowerCase()**: This method converts a string to lowercase letters. For
    example, `var str = "Hello World"; var newStr = str.toLowerCase();`.
11. **concat()**: This method joins two or more strings and returns a new string. For
    example, `var str1 = "Hello"; var str2 = "World"; var newStr = str1.concat(str2);`.
12. **trim()**: This method removes whitespace from both ends of a string. For
    example, `var str = " Hello World "; var newStr = str.trim();`.
13. **charAt()**: This method returns the character at a specified index in a string. For
    example, `var str = "Hello World"; var char = str.charAt(0);`.
14. **charCodeAt()**: This method returns the Unicode of the character at a specified index in a string. For
    example, `var str = "Hello World"; var charCode = str.charCodeAt(0);`.
15. **split()**: This method splits a string into an array of substrings. For
    example, `var str = "Hello World"; var arr = str.split(" ");`.
16. **match()**: This method searches a string for a match against a regular expression, and returns the matches, as an
    Array object. For example, `var str = "Hello World"; var matches = str.match(/l/g);`.
17. **includes()**: This method checks whether a string contains the specified value, and returns true or false. For
    example, `var str = "Hello World"; var isPresent = str.includes("World");`.
18. **startsWith()**: This method checks whether a string begins with the specified value, and returns true or false.
    For example, `var str = "Hello World"; var isPresent = str.startsWith("Hello");`.
19. **endsWith()**: This method checks whether a string ends with the specified value, and returns true or false. For
    example, `var str = "Hello World"; var isPresent = str.endsWith("World");`.
20. **repeat()**: This method returns a new string with a specified number of copies of an existing string. For
    example, `var str = "Hello World"; var newStr = str.repeat(2);`.
21. **padStart()**: This method pads the current string with another string until the resulting string reaches the given
    length. For example, `var str = "Hello World"; var newStr = str.padStart(15, "Hi ");`.
22. **padEnd()**: This method pads the current string with another string until the resulting string reaches the given
    length. For example, `var str = "Hello World"; var newStr = str.padEnd(15, " Hi");`.
23. **repleaceAll()**: This method replaces all occurrences of a specified value in a string, and returns a new string.
    For example, `var str = "Hello World"; var newStr = str.replaceAll("World", "JavaScript");`.

#### String basic exercises

Some basic exercises to test your understanding of strings in JavaScript.

1. **Capitalize a Word**

```javascript
/**
 * This function takes a string as input and returns the string with the first letter capitalized.
 * @param {string} word - The word to be capitalized.
 */
function capitalizeWord(word) {
    // Your code here
}
```

2. **Reverse a String**

```javascript
/**
 * This function takes a string as input and returns the reversed string.
 * @param {string} str - The string to be reversed.
 */
function reverseString(str) {
    // Your code here
}
```

3. **Count Vowels in a String**

```javascript
/**
 * This function takes a string as input and returns the count of vowels in the string.
 * @param {string} str - The string in which vowels are to be counted.
 */
function countVowels(str) {
    // Your code here
}
```

4. **Check if String is Palindrome**

```javascript
/**
 * This function takes a string as input and returns true if the string is a palindrome, false otherwise.
 * @param {string} str - The string to be checked.
 */
function isPalindrome(str) {
    // Your code here
}
```

5. **Find Longest Word in a String**

```javascript
/**
 * This function takes a string as input and returns the longest word in the string.
 * @param {string} str - The string from which the longest word is to be found.
 */
function findLongestWord(str) {
    // Your code here
}
```

6. **Replace All Occurrences of a Word in a String**

```javascript
/**
 * This function takes a string, a word to find, and a word to replace with, and returns the string with all occurrences of the word replaced.
 * @param {string} str - The string in which the word is to be replaced.
 * @param {string} find - The word to find.
 * @param {string} replace - The word to replace with.
 */
function replaceAll(str, find, replace) {
    // Your code here
}
```

7. **Convert String to Title Case**

```javascript
/**
 * This function takes a string as input and returns the string in title case.
 * @param {string} str - The string to be converted to title case.
 */
function toTitleCase(str) {
    // Your code here
}
```

8. **Count Occurrences of a Word in a String**

```javascript
/**
 * This function takes a string and a word, and returns the count of occurrences of the word in the string.
 * @param {string} str - The string in which the word is to be counted.
 * @param {string} word - The word to count.
 */
function countOccurrences(str, word) {
    // Your code here
}
```

9. **Check if String Contains a Word**

```javascript
/**
 * This function takes a string and a word, and returns true if the string contains the word, false otherwise.
 * @param {string} str - The string to check.
 * @param {string} word - The word to find.
 */
function containsWord(str, word) {
    // Your code here
}
```

10. **Convert String to Camel Case**

```javascript
/**
 * This function takes a string as input and returns the string in camel case.
 * @param {string} str - The string to be converted to camel case.
 */
function toCamelCase(str) {
    // Your code here
}
```

11. **Split a String into an Array of Words**

```javascript
/**
 * This function takes a string as input and returns an array of words in the string.
 * @param {string} str - The string to be split into words.
 */
function splitIntoWords(str) {
    // Your code here
}
```

12. **Remove Extra Spaces from a String**

```javascript
/**
 * This function takes a string as input and returns the string with extra spaces removed.
 * @param {string} str - The string from which extra spaces are to be removed.
 */
function removeExtraSpaces(str) {
    // Your code here
}
```

13. **Convert a String to a URL Slug**

```javascript
/**
 * This function takes a string as input and returns a URL-friendly slug.
 * @param {string} str - The string to be converted to a slug.
 */
function toSlug(str) {
    // Your code here
}
```

14. **Extract a Substring from a String**

```javascript
/**
 * This function takes a string, a start index, and an end index, and returns the substring from the start index to the end index.
 * @param {string} str - The string from which the substring is to be extracted.
 * @param {number} start - The start index.
 * @param {number} end - The end index.
 */
function extractSubstring(str, start, end) {
    // Your code here
}
```

15. **Check if a String Starts with a Specific Word**

```javascript
/**
 * This function takes a string and a word, and returns true if the string starts with the word, false otherwise.
 * @param {string} str - The string to check.
 * @param {string} word - The word to check for.
 */
function startsWithWord(str, word) {
    // Your code here
}
```

### Boolean

A Boolean in JavaScript is a primitive data type that can have one of two values: `true` or `false`. It is named after
George Boole, who first defined an algebraic system of logic in the mid 19th century.

Booleans are typically used in conditional testing (i.e., control structures like if-else statements, loops, etc.).
Here's an example:

```javascript
let isRaining = true;

if (isRaining) {
    console.log('Take an umbrella!');
} else {
    console.log('No need for an umbrella.');
}
```

In this example, `isRaining` is a Boolean variable. If `isRaining` is `true`, the message 'Take an umbrella!' will be
logged to the console. If `isRaining` is `false`, 'No need for an umbrella.' will be logged instead.

#### Boolean truthy and falsy values

JavaScript has truthy and falsy values. A value is considered `truthy` if it's not one of the six falsy values:

- `false`, `0`, `""` (empty string), `null`, `undefined`, or `NaN`.

This means that values like "0" (a string containing a single zero), "false" (a string containing the text “false”)
, `{}` (an empty object), `[]` (an empty array), etc., are all considered truthy because they're not on the list of
falsy values.
This can lead to some unexpected results when comparing values, so it's important to understand the difference
between `==` (loose equality, which performs type coercion) and `===` (strict equality, which doesn't perform type
coercion).

#### Unexpected truthy

Unexpected truthy:

1. **"0"**: While the number 0 is falsy, the string "0" is truthy because it's a non-empty string.

2. **"false"**: The string "false" is truthy, even though the Boolean value `false` is falsy.

3. **[]**: An empty array is truthy. This might be unexpected because you might think of an empty array as being '
   nothing' or 'empty', but it's actually an object in JavaScript, and objects are truthy.

4. **{}**: Similarly to an empty array, an empty object is also truthy in JavaScript.

5. **function(){}**: Functions in JavaScript are objects, and objects are truthy, so an empty function is also truthy.

6. **Infinity**: The value of Infinity is truthy.

#### Boolean operators

There are three primary Boolean operators: AND, OR, and NOT, represented as `&&`, `||`, and `!` respectively.

1. **AND (`&&`)**: This operator returns `true` if both operands are true. If one or both operands are `false`, it
   returns `false`. Here's an example:

```javascript
let a = true;
let b = false;

console.log(a && b); // Output: false
```

2. **OR (`||`)**: This operator returns `true` if at least one of the operands is true. If both operands are `false`, it
   returns `false`. Here's an example:

```javascript
let a = true;
let b = false;

console.log(a || b); // Output: true
```

3. **NOT (`!`)**: This operator returns the inverse of the operand's Boolean value. If the operand is `true`, it
   returns `false`, and vice versa. Here's an example:

```javascript
let a = true;

console.log(!a); // Output: false
```

These operators are often used in conditional statements (like `if` statements) to create more complex conditions. For
example:

```javascript
let a = true;
let b = false;

if (a && !b) {
    console.log('Condition met!');
} else {
    console.log('Condition not met.');
}
```

In this example, the message 'Condition met!' will be logged to the console because `a` is `true` and `!b` is
also `true` (since `b` is `false`, `!b` is `true`).

#### Short-circuit evaluation

In an AND (`&&`) operation, if the first operand is `false`, JavaScript immediately knows that the overall result cannot
be `true` (since both operands need to be `true` for an AND operation to return `true`). Therefore, it doesn't even
check the second operand; it just returns `false` right away. This can be useful for performance reasons, especially in
cases where the second operand is a more complex or computationally expensive operation.

Here's an example:

```javascript
let a = false;
let b = true;

console.log(a && b); // Output: false
```

In this case, JavaScript sees that `a` is `false` and immediately returns `false` for the whole operation, without even
looking at `b`.

The same concept applies to OR (`||`) operations, but in reverse. If the first operand in an OR operation is `true`,
JavaScript immediately returns `true` without checking the second operand, because it knows that at least one operand
is `true`.

This is a fundamental concept in most programming languages, not just JavaScript.

#### Null

The Null data type is used to represent a null value. It is typically used to indicate that a variable has no value
assigned to it. For example, `var x = null;`.

#### Undefined

The Undefined data type is used to represent a variable that has been declared but has not been assigned a value. For
example, `var x;`.

#### Null vs Undefined

Null and Undefined are both used to represent the absence of a value. However, they are not the same. Null is a value
that can be assigned to a variable, while Undefined is a type that indicates that a variable has not been assigned a
value.

### Object

In JavaScript, an object is a standalone entity with properties and types. It's like a container that holds related data
and functionality. Objects are used to store keyed collections of various data and more complex entities.

An object can be created with figure brackets `{…}` with an optional list of properties. A property is a “key: value”
pair, where the key is a string (also called a “property name”), and value can be anything.

Here's an example of creating an object:

```javascript
let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};
```

You can access the properties of the object using dot notation:

```javascript
alert(user.name); // John
alert(user.age);  // 30
```

You can also add, modify, and delete properties:

```javascript
user.isAdmin = true; // add a property
user.name = "Pete";  // modify a property
delete user.age;     // delete a property
```

#### Nested Objects

An object can contain another object as a property. This is called a nested object. Here's an example:

```javascript
let user = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    }
};
```

You can access the properties of the nested object using dot notation:

```javascript
alert(user.address.street); // 123 Main St
```

#### Objects built-in methods

JavaScript provides a number of built-in methods that can be used with objects. Here are some of the most commonly used
ones:

1. **Object.assign()**: This method is used to copy values from one or more source objects to a target object. It
   returns the target object.

```javascript
let obj1 = {a: 1};
let obj2 = {b: 2};
let combined = Object.assign(obj1, obj2);
console.log(combined); // { a: 1, b: 2 }
```

2. **Object.keys()**: This method returns an array of a given object's property names, in the same order as we get with
   a normal loop.

```javascript
let obj = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj)); // ["a", "b", "c"]
```

3. **Object.values()**: This method returns an array of a given object's own enumerable property values.

```javascript
let obj = {a: 1, b: 2, c: 3};
console.log(Object.values(obj)); // [1, 2, 3]
```

4. **Object.entries()**: This method returns an array of a given object's own enumerable string-keyed
   property [key, value] pairs.

```javascript
let obj = {a: 1, b: 2, c: 3};
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]
```

5. **Object.hasOwnProperty()**: This method returns a boolean indicating whether the object has the specified property
   as its own property.

```javascript
let obj = {a: 1, b: 2, c: 3};
console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('d')); // false
```

6. **Object.freeze()**: This method freezes an object. A frozen object can no longer be changed.

```javascript
let obj = {a: 1};
Object.freeze(obj);
obj.a = 2; // will be ignored
console.log(obj.a); // 1
```

7. **Object.seal()**: This method seals an object, preventing new properties from being added to it and marking all
   existing properties as non-configurable.

```javascript
let obj = {a: 1};
Object.seal(obj);
obj.b = 2; // will be ignored
console.log(obj.b); // undefined
```

8. **Object.is()**: This method determines whether two values are the same value.

```javascript
console.log(Object.is('foo', 'foo'));     // true
console.log(Object.is(window, window));   // true
console.log(Object.is('foo', 'bar'));     // false
console.log(Object.is([], []));           // false
```

These are just a few examples of the built-in methods provided by JavaScript for working with objects. There are many
more, and you can always refer to
the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) for a
complete list and detailed explanations.

#### Object destructuring

ES6 introduced a way to extract data from arrays and objects into distinct variables.

```javascript
let obj = {a: 1, b: 2, c: 3};
let {a, b, c} = obj;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

#### Object spread operator

ES6 introduced a way to copy properties from one object to another.

```javascript
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let obj3 = {...obj1, ...obj2};
console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }
```

when there are conflicting properties, the right-most object wins.

```javascript
let obj1 = {a: 1, b: 2};
let obj2 = {b: 3, c: 4};
let obj3 = {...obj1, ...obj2};
console.log(obj3); // { a: 1, b: 3, c: 4 }
```

#### Object decorators

In JavaScript, an object decorator is a function that takes an object as an argument and returns a new object with
additional properties and methods. Here's an example:

```javascript
function decorate(obj) {
    obj.greet = function () {
        alert("Hello, " + this.name);
    };
    return obj;
}

let user = decorate({name: "John"});
```

In this example, the `decorate` function takes an object as an argument and adds a `greet` method to it. The `greet`
method displays an alert with the name of the user. The `decorate` function then returns the object with the `greet`
method.

#### Function as property

Objects can also have functions as their properties. These functions are called methods. Here's an example:

```javascript
let user = {
    name: "John",
    age: 30,
    greet: function () {
        alert("Hello, " + this.name);
    }
};

user.greet(); // Hello, John
```

In the `greet` method, `this` refers to the `user` object.

##### 'this' Keyword

In JavaScript, the thing called `this`, is the object that "owns" the JavaScript code. The value of `this`, when used in
a function, is the object that "owns" the function. In the object method `greet`, `this` refers to the `user` object.
The person object is the owner of the function.

#### Object Constructors

In JavaScript, an object constructor is a function that is used to create new objects. Here's an example:

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new Person("John", 30);
let person2 = new Person("Mary", 25);
```

#### Object exercises

Some exercises to test your understanding of objects in JavaScript.

```javascript
function countKeysBelowThreshold(obj, threshold) {
    // Your code here
}
```

2. **String concatenation from object**

```javascript
/**
 * This function takes an object as input and concatenates all the string values in the object.
 * @param {object} obj - The object to be checked.
 */
```

```javascript
function concatenateStrings(obj) {
    // Your code here
}
```

3. **Check boolean values in object**

```javascript
/**
 * This function takes an object as input and returns true if all values in the object are true, and false otherwise.
 * @param {object} obj - The object to be checked.
 */
```

```javascript
function checkAllTrue(obj) {
    // Your code here
}
```

4. **Sum of number values in object**

```javascript
/**
 * This function takes an object as input and returns the sum of all the number values in the object.
 * @param {object} obj - The object to be checked.
 */
```

```javascript
function sumNumberValues(obj) {
    // Your code here
}
```

5. **Find the longest string in object**

```javascript
/**
 * This function takes an object as input and returns the longest string value in the object.
 * @param {object} obj - The object to be checked.
 */
```

```javascript
function findLongestString(obj) {
    // Your code here
}
```

6. **Check if a value exists in object**

```javascript
/**
 * This function takes an object and a value as input and returns true if the value exists in the object, and false otherwise.
 * @param {object} obj - The object to be checked.
 * @param {string|number|boolean} value - The value to be checked.
 */
```

```javascript
function valueExists(obj, value) {
    // Your code here
}
```

7. **Count the number of boolean values in object**

```javascript
/**
 * This function takes an object as input and returns the count of boolean values in the object.
 * @param {object} obj - The object to be checked.
 */
```

```javascript
function countBooleans(obj) {
    // Your code here
}
```

8. **Find the smallest number in object**

```javascript
/**
 * This function takes an object as input and returns the smallest number value in the object.
 * @param {object} obj - The object to be checked.
 */
```

```javascript
function findSmallestNumber(obj) {
    // Your code here
}
```

9. **Reverse all strings in object**

```javascript
/**
 * This function takes an object as input and returns a new object with all the string values reversed.
 * @param {object} obj - The object to be checked.
 */
```

```javascript
function reverseStrings(obj) {
    // Your code here
}
```

10. **Check if a key exists in object**

```javascript
/**
 * This function takes an object and a key as input and returns true if the key exists in the object, and false otherwise.
 * @param {object} obj - The object to be checked.
 * @param {string} key - The key to be checked.
 */
```

```javascript
function keyExists(obj, key) {
    // Your code here
}
```

### Array

An array is a special type of object used for storing multiple values in a single variable. Each value (also called an
element) in an array has a numeric position, known as its index, and it may contain values of any data type—numbers,
strings, booleans, functions, objects, and even other arrays. The first element is at index 0, the second element is at
index 1, and so on.

Here's an example of creating an array:

```javascript
let fruits = ["Apple", "Banana", "Orange"];
```

You can access the elements of an array using bracket notation:

```javascript
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Orange
```

You can also add, modify, and delete elements:

```javascript
fruits[3] = "Mango"; // add an element
fruits[0] = "Pineapple"; // modify an element
delete fruits[1]; // delete an element
```

#### Array built-in methods

JavaScript provides a number of built-in methods that can be used with arrays. Here are some of the most commonly used
ones:

1. **push()**: Adds one or more elements to the end of an array and returns the new length of the array.

```javascript
fruits.push('orange'); // returns 4
```

2. **pop()**: Removes the last element from an array and returns that element.

```javascript
fruits.pop(); // returns 'orange'
```

3. **shift()**: Removes the first element from an array and returns that element.

```javascript
fruits.shift(); // returns 'apple'
```

4. **unshift()**: Adds one or more elements to the front of an array and returns the new length of the array.

```javascript
fruits.unshift('strawberry'); // returns 4
```

5. **concat()**: Merges two or more arrays and returns a new array.

```javascript
let moreFruits = ['peach', 'kiwi'];
let allFruits = fruits.concat(moreFruits); // returns ['strawberry', 'banana', 'mango', 'peach', 'kiwi']
```

6. **slice()**: Returns a shallow copy of a portion of an array into a new array object.

```javascript
let citrusFruits = allFruits.slice(1, 3); // returns ['banana', 'mango']
```

7. **splice()**: Changes the contents of an array by removing or replacing existing elements and/or adding new elements
   in place.

```javascript
fruits.splice(1, 0, 'pineapple'); // inserts 'pineapple' at index 1
```

8. **join()**: Joins all elements of an array into a string.

```javascript
let fruitsString = fruits.join(', '); // returns 'strawberry, pineapple, banana, mango'
```

11. **sort()**: Sorts the elements of an array in place and returns the array. The default sort order is built upon
    converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

```javascript
let array = ['cat', 'dog', 'elephant', 'ant'];
array.sort(); // returns ['ant', 'cat', 'dog', 'elephant']
```

12. **reverse()**: Reverses the order of the elements in an array in place. (First becomes the last, last becomes
    first.)

```javascript
array.reverse(); // returns ['elephant', 'dog', 'cat', 'ant']
```

13. **includes()**: Determines whether an array includes a certain value among its entries, returning true or false as
    appropriate.

```javascript
array.includes('cat'); // returns true
```

14. **indexOf()**: Returns the first index at which a given element can be found in the array, or -1 if it is not
    present.

```javascript
array.indexOf('dog'); // returns 1
```

15. **find()**: Returns the value of the first element in the provided array that satisfies the provided testing
    function.

```javascript
let array = [5, 12, 8, 130, 44];
let found = array.find(element => element > 10); // returns 12
```

16. **findIndex()**: Returns the index of the first element in the array that satisfies the provided testing function.
    Otherwise, it returns -1, indicating that no element passed the test.

```javascript
let foundIndex = array.findIndex(element => element > 10); // returns 1
```

17. **every()**: Tests whether all elements in the array pass the test implemented by the provided function. It returns
    a Boolean value.

```javascript
array.every(val => val > 4); // returns true
```

18. **some()**: Tests whether at least one element in the array passes the test implemented by the provided function. It
    returns a Boolean value.

```javascript
array.some(val => val > 100); // returns true
```

19. **reduceRight()**: Applies a function against an accumulator and each value of the array (from right-to-left) to
    reduce it to a single value.

```javascript
let array = [[0, 1], [2, 3], [4, 5]].reduceRight((accumulator, currentValue) => accumulator.concat(currentValue)); // returns [4, 5, 2, 3, 0, 1]
```

20. **isArray()**: Determines whether the passed value is an Array.

```javascript
Array.isArray([1, 2, 3]);  // returns true
Array.isArray({foo: 123}); // returns false
```

#### Array built-in loops

JavaScript provides a number of built-in loops that can be used with arrays. Here are some of the most commonly used
ones:

1. **filter()**: This method creates a new array with all elements that pass the test implemented by the provided
   function. It does not mutate the original array.

```javascript
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

In this example, `filter()` is used to create a new array (`evenNumbers`) that includes only the even numbers from the
original `numbers` array.

2. **map()**: This method creates a new array with the results of calling a provided function on every element in the
   calling array. It does not mutate the original array.

```javascript
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]
```

In this example, `map()` is used to create a new array (`squares`) that includes the squares of all the numbers in the
original `numbers` array.

3. **reduce()**: This method executes a reducer function (that you provide) on each element of the array, resulting in a
   single output value.

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
```

In this example, `reduce()` is used to calculate the sum of all numbers in the `numbers` array. The `accumulator`
represents the accumulation of values returned by the reducer function. The `currentValue` is the current element being
processed in the array.

4. **forEach()**: This method executes a provided function once for each array element. Unlike `map()` and `filter()`
   , `forEach()` does not return a new array.

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num * num));
// Output: 
// 1
// 4
// 9
// 16
// 25
```

In this example, `forEach()` is used to log the square of each number in the `numbers` array to the console. Note
that `forEach()` does not return a new array.

These methods are all higher-order functions, which means they accept functions as arguments. They are also chainable,
meaning you can use them one after another on the result of the previous method.

#### Array decomposition

ES6 introduced a way to extract data from arrays into distinct variables.

```javascript
let array = [1, 2, 3];
let [a, b, c] = array;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

#### Array spread operator

ES6 introduced a way to copy elements from one array into another.

```javascript
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [...array1, ...array2];
console.log(array3); // [1, 2, 3, 4, 5, 6]
```

```javascript
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [...array2, ...array2, 7, 8, 9];
console.log(array3); // [4, 5, 6, 4, 5, 6, 7, 8, 9]
```

#### Multi-dimensional arrays

An array can contain other arrays. For example:

```javascript
let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
```

You can access the elements of a multi-dimensional array using bracket notation:

```javascript
console.log(array[0][0]); // 1
console.log(array[1][1]); // 5
console.log(array[2][2]); // 9
```

#### Array exercises

Some exercises to test your understanding of arrays in JavaScript.

1. **Sum of all numbers in array**

```javascript
/**
 * This function takes an array of numbers as input and returns the sum of all the numbers in the array.
 * @param {number[]} array - The array of numbers.
 */
function sumArray(array) {
    // Your code here
}
```

2. **Count the number of boolean values in array**

```javascript
/**
 * This function takes an array as input and returns the count of boolean values in the array.
 * @param {any[]} array - The array to be checked.
 */
function countBooleans(array) {
    // Your code here
}

```

3. **Find the smallest number in array**

```javascript
/**
 * This function takes an array of numbers as input and returns the smallest number in the array.
 * @param {number[]} array - The array of numbers.
 */
function findSmallestNumber(array) {
    // Your code here
}
```

4. **Find the longest string in array**

```javascript
/**
 * This function takes an array of strings as input and returns the longest string in the array.
 * @param {string[]} array - The array of strings.
 */
function findLongestString(array) {
    // Your code here
}
```

5. **Check if a value exists in array**

```javascript
/**
 * This function takes an array and a value as input and returns true if the value exists in the array, and false otherwise.
 * @param {any[]} array - The array to be checked.
 * @param {string|number|boolean} value - The value to be checked.
 */
function valueExists(array, value) {
    // Your code here
}

```

7. **Check if a value exists in array of objects**

```javascript
/**
 * This function takes an array of objects and a value as input and returns true if the value exists in any of the objects in the array, and false otherwise.
 * @param {object[]} array - The array of objects to be checked.
 * @param {string|number|boolean} value - The value to be checked.
 */
function valueExistsInObjects(array, value) {
    // Your code here
}

```

1. **Merge two arrays**

```javascript
/**
 * This function takes two arrays as input and returns a new array that is the result of merging the two input arrays.
 * @param {Array} array1 - The first array.
 * @param {Array} array2 - The second array.
 */
function mergeArrays(array1, array2) {
    // Your code here
}
```

2. **Find the common elements of two arrays**

```javascript
/**
 * This function takes two arrays as input and returns a new array that contains the common elements of the input arrays.
 * @param {Array} array1 - The first array.
 * @param {Array} array2 - The second array.
 */
function findCommonElements(array1, array2) {
    // Your code here
}
```

3. **Find duplicates in an array**

```javascript
/**
 * This function takes an array as input and returns a new array that contains the duplicate elements of the input array.
 * @param {Array} array - The array to be checked.
 */
function findDuplicates(array) {
    // Your code here
}
```

4. **Remove duplicates from an array**

```javascript
/**
 * This function takes an array as input and returns a new array that contains the unique elements of the input array.
 * @param {Array} array - The array to be checked.
 */
function removeDuplicates(array) {
    // Your code here
}
```

5. **Flatten a multidimensional array**

```javascript
/**
 * This function takes a multidimensional array as input and returns a new one-dimensional array that contains all the elements of the input array.
 * @param {Array} array - The multidimensional array to be flattened.
 */
function flattenArray(array) {
    // Your code here
}
```

6. **Filter an array based on a condition**

```javascript
/**
 * This function takes an array and a callback function as input. It returns a new array that contains only the elements of the input array that meet the condition specified in the callback function.
 * @param {Array} array - The array to be filtered.
 * @param {Function} callback - The callback function that defines the condition.
 */
function filterArray(array, callback) {
    // Your code here
}
```

8. **Transform an array of strings to uppercase**

```javascript
/**
 * This function takes an array of strings as input and returns a new array where all the strings are converted to uppercase.
 * @param {string[]} array - The array of strings to be converted.
 */
function toUpperCase(array) {
    // Your code here
}
```

9. **Find the maximum and minimum values in an array of numbers**

```javascript
/**
 * This function takes an array of numbers as an input and returns an object with the maximum and minimum numbers extracted from the array.
 * @param {number[]} array - The array of numbers.
 */
function findMaxMin(array) {
    // Your code here
}
```

### Sets

A Set is a collection of unique values. It can be used to store a list of values without any duplicates. Sets are
similar to arrays, but they don't allow duplicate values. They also don't have any order, so you can't access elements
by index.

Here's an example of creating a set:

```javascript
let set = new Set();
```

You can add values to a set using the `add()` method:

```javascript
set.add(1);
set.add(2);
set.add(3);
console.log(set); // Set { 1, 2, 3 }
```

You can also add multiple values at once using the `add()` method:

```javascript
set.add(1, 2, 3);
console.log(set); // Set { 1, 2, 3 }
```

You can check if a set contains a value using the `has()` method:

```javascript
console.log(set.has(1)); // true
console.log(set.has(4)); // false
```

You can remove a value from a set using the `delete()` method:

```javascript
set.delete(1);
console.log(set); // Set { 2, 3 }
```

You can get the size of a set using the `size` property:

```javascript
console.log(set.size); // 2
```

You can iterate over the values in a set using the `forEach()` method:

```javascript
set.forEach(value => console.log(value));
// Output:
// 2
// 3
```

You can also use a `for...of` loop to iterate over the values in a set:

```javascript
for (let value of set) {
    console.log(value);
}

// Output:
// 2
// 3
```

#### Set built-in methods

JavaScript provides a number of built-in methods that can be used with sets. Here are some of the most commonly used
ones:

1. **add()**: Adds a new element with the given value to the Set. Returns the Set object.

```javascript
set.add(1);
```

2. **clear()**: Removes all elements from the Set object.

```javascript
set.clear();
```

3. **delete()**: Removes the element associated to the value and returns the value that Set.prototype.has(value) would
   have previously returned. Set.prototype.has(value) will return false afterwards.

```javascript
set.delete(1);
```

4. **has()**: Returns a boolean asserting whether an element is present with the given value in the Set object or not.

```javascript
set.has(1);
```

5. **forEach()**: Calls callbackFn once for each value present in the Set object, in insertion order. If a thisArg
   parameter is provided to forEach, it will be used as the this value for each callback.

```javascript
set.forEach(value => console.log(value));
```

6. **values()**: Returns a new Iterator object that yields the values for each element in the Set object in insertion
   order.

```javascript
set.values();
```

7. **entries()**: Returns a new Iterator object that contains an array of [value, value] for each element in the Set
   object, in insertion order.

```javascript
set.entries();
```

8. **keys()**: Is the same function as the values() function and returns a new Iterator object that yields the values
   for each element in the Set object in insertion order.

```javascript
set.keys();
```

#### Set and arrays

You can convert a set to an array using the `Array.from()` method:

```javascript
let array = Array.from(set);
```

You can also convert an array to a set using the `Set()` constructor:

```javascript
let set = new Set(array);
```

this last option is useful for removing duplicates from an array:

```javascript
let array = [1, 2, 3, 1, 2, 3];
let set = new Set(array);
console.log(set); // Set { 1, 2, 3 }
```

## Control Flow

### If...else

In JavaScript, an if...else statement is used to execute a block of code if a condition is true, and another block of
code if the condition is false. Here's an example:

```javascript
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
```

In this example, the `age` variable is set to `18`. The `if` statement checks if the `age` is greater than or equal
to `18`. If it is, the first block of code is executed. If not, the second block of code is executed.

### If...else if...else

In JavaScript, an if...else if...else statement is used to execute a block of code if a condition is true, and another
block of code if the condition is false. Here's an example:

```javascript
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
} else if (age >= 13) {
    console.log("You are a teenager");
} else {
    console.log("You are a child");
}
```

In this example, the `age` variable is set to `18`. The `if` statement checks if the `age` is greater than or equal
to `18`. If it is, the first block of code is executed. If not, the `else if` statement checks if the `age` is greater
than or equal to `13`. If it is, the second block of code is executed. If not, the `else` statement is executed.

### Switch

In JavaScript, a switch statement is used to execute a block of code depending on the value of a variable. Here's an
example:

```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}
```

In this example, the `day` variable is set to `Monday`. The `switch` statement checks the value of the `day` variable
and executes the corresponding block of code. If the value of the `day` variable is not one of the cases, the `default`
block of code is executed.

### Ternary operator

In JavaScript, a ternary operator is used to execute a block of code depending on the value of a variable. Here's an
example:

```javascript
let age = 18;

let message = age >= 18 ? "You are an adult" : "You are a minor";

console.log(message); // You are an adult
```

In this example, the `age` variable is set to `18`. The ternary operator checks if the `age` is greater than or equal
to `18`. If it is, the first value is assigned to the `message` variable. If not, the second value is assigned to
the `message` variable.

## Loops

### For loop

In JavaScript, a for loop is used to execute a block of code a specified number of times. Here's an example:

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

In this example, the `for` loop is used to log the numbers from `0` to `9` to the console. The `for` loop has three
parts: the initialization, the condition, and the final expression. The initialization is executed once before the loop
starts. The condition is checked before each iteration of the loop. If the condition is true, the loop continues. If
not, the loop ends. The final expression is executed after each iteration of the loop.

### While loop

In JavaScript, a while loop is used to execute a block of code while a condition is true. Here's an example:

```javascript
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}
```

In this example, the `while` loop is used to log the numbers from `0` to `9` to the console. The `while` loop has one
part: the condition. The condition is checked before each iteration of the loop. If the condition is true, the loop
continues. If not, the loop ends.

### Do...while loop

In JavaScript, a do...while loop is used to execute a block of code while a condition is true. Here's an example:

```javascript
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);
```

In this example, the `do...while` loop is used to log the numbers from `0` to `9` to the console. The `do...while` loop
has two parts: the condition and the body. The body is executed once before the condition is checked. If the condition
is true, the loop continues. If not, the loop ends.

### For...in loop

In JavaScript, a for...in loop is used to iterate over the properties of an object. Here's an example:

```javascript
obj = {a: 1, b: 2, c: 3};

for (let key in obj) {
    console.log(key);
}
```

In this example, the `for...in` loop is used to log the keys of the `obj` object to the console. The `for...in` loop has
one part: the variable. The variable is assigned the key of each property in the object.

### For...of loop

In JavaScript, a for...of loop is used to iterate over the elements of an array. Here's an example:

```javascript
array = [1, 2, 3];

for (let element of array) {
    console.log(element);
}
```

In this example, the `for...of` loop is used to log the elements of the `array` array to the console. The `for...of`
loop has one part: the variable. The variable is assigned the value of each element in the array.

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

## Error handling

Error handling in JavaScript is an important aspect of coding, as it helps to manage and deal with errors that may occur
during the execution of your code. The most common way to handle errors in JavaScript is through the use of
try/catch/finally blocks.

1. **Try/Catch**: The try block contains the code that may potentially throw an error, while the catch block contains
   the code that will be executed if an error occurs in the try block.

```javascript
try {
    // Code that may throw an error
} catch (error) {
    // Code to handle the error
}
```

The error object that is passed to the catch block contains useful information about the error, such as its name and
message.

2. **Finally**: The finally block contains code that will be executed regardless of whether an error was thrown or
   caught.

```javascript
    try {
    // Code that may throw an error
} catch (error) {
    // Code to handle the error
} finally {
    // Code that will be executed regardless
}
```

3. **Throw**: You can also generate your own errors using the throw statement. This allows you to create custom error
   messages and types.

```javascript
throw new Error('This is a custom error');
```

4. **Error Types**: JavaScript has several built-in error constructors, such as Error(), SyntaxError(), TypeError(),
   ReferenceError(), etc. You can use these to create and throw custom errors.

5. **Promises and Async/Await**: When working with asynchronous code, you can handle errors using the catch method of a
   Promise, or by using try/catch with async/await.

```javascript
fetch(url)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));

// or with async/await

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}
```

Remember, proper error handling can make your code more robust and easier to debug, so it's a good practice to always
handle potential errors in your code.

## Browser APIs

### DOM Manipulation

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that
programs can change the document structure, style, and content. The DOM represents the document as nodes and objects.
That way, programming languages can connect to the page.

#### Selecting elements

In JavaScript, there are several ways to select HTML elements. Here are some of the most commonly used methods:

1. `document.getElementById(id)`: This method selects an element by its ID. It returns the first element in the document
   that matches the specified ID, or `null` if no matching element was found.

   Example:
   ```javascript
   var element = document.getElementById("myId");
   ```

2. `document.getElementsByClassName(className)`: This method selects elements by their class name. It returns a live
   HTMLCollection of elements with the specified class name.

   Example:

```javascript
   var elements = document.getElementsByClassName("myClass");
```

3. `document.getElementsByTagName(tagName)`: This method selects elements by their tag name. It returns a live
   HTMLCollection of elements with the specified tag name.

   Example:

```javascript
   var elements = document.getElementsByTagName("p");
```

4. `document.querySelector(selector)`: This method selects the first element that matches a specified CSS selector(s) in
   the document.

   Example:

```javascript
   var element = document.querySelector(".myClass");
```

5. `document.querySelectorAll(selector)`: This method selects all elements that match a specified CSS selector(s) in the
   document. It returns a static NodeList.

   Example:

```javascript
   var elements = document.querySelectorAll(".myClass");
```

Remember, `getElementById`, `getElementsByClassName`, and `getElementsByTagName` are older methods and they return live
collections. This means that changes in the DOM are automatically reflected in the collection. On the other
hand, `querySelector` and `querySelectorAll` are newer methods and they return static collections or single elements.
This means that changes in the DOM are not reflected in the collections or elements returned by these methods.

#### Element manipulations

Modifying elements in the DOM (Document Object Model) is a common task in JavaScript. Here are some of the most useful
methods for modifying elements:

1. `innerHTML`: This property allows you to get or set the HTML content (the inner HTML) of an element.

```javascript
document.getElementById("myDiv").innerHTML = "<p>New content!</p>";
```

2. `textContent`: This property sets or returns the text content of the specified node, and all its descendants.

```javascript
document.getElementById("myDiv").textContent = "New text content!";
```

3. `setAttribute()`: This method adds a new attribute or changes the value of an existing attribute on an element.

```javascript
document.getElementById("myImage").setAttribute("src", "newImage.jpg");
```

4. `removeAttribute()`: This method removes an attribute from an element.

```javascript
document.getElementById("myImage").removeAttribute("src");
```

5. `createElement()`: This method creates a new element with the specified tag name.

```javascript
let newParagraph = document.createElement("p");
```

6. `appendChild()`: This method appends a node as the last child of a node.

```javascript
let newParagraph = document.createElement("p");
newParagraph.textContent = "New paragraph!";
document.body.appendChild(newParagraph);
```

7. `removeChild()`: This method removes a child node from an element.

```javascript
let paragraph = document.querySelector("p");
document.body.removeChild(paragraph);
```

8. `replaceChild()`: This method replaces a child node with a new node.

```javascript
let newParagraph = document.createElement("p");
newParagraph.textContent = "New paragraph!";
let oldParagraph = document.querySelector("p");
document.body.replaceChild(newParagraph, oldParagraph);
```

9. `classList`: This property is useful for adding, removing, and toggling CSS classes on an element.

```javascript
document.getElementById("myDiv").classList.add("newClass");
document.getElementById("myDiv").classList.remove("oldClass");
document.getElementById("myDiv").classList.toggle("anotherClass");
```

Remember, when modifying elements, you should always be mindful of potential security risks, such as Cross-Site
Scripting (XSS) attacks. Always validate and sanitize user input to ensure that it does not contain malicious code.

#### Styling elements

Modifying styles in JavaScript is often done by directly manipulating the `style` property of an HTML element. This
property is an object that contains CSS properties as keys, and you can assign new values to these keys to change the
style of the element.

Here's an example:

```javascript
let element = document.getElementById('myElement');
element.style.color = 'blue';
element.style.backgroundColor = 'yellow';
```

In this example, the text color of the element with the ID `myElement` is changed to blue, and the background color is
changed to yellow.

While this method is straightforward and easy to use, it has some limitations. For example, it can only be used to
modify inline styles, and it doesn't support CSS selectors or pseudo-classes.

A more powerful and flexible way to modify styles in JavaScript is by manipulating CSS classes. Instead of directly
changing the style properties of an element, you can define a CSS class with the desired styles, and then add or remove
this class from the element using JavaScript.

Here's an example:

```css
/* CSS */
.myClass {
    color: blue;
    background-color: yellow;
}
```

```javascript
// JavaScript
let element = document.getElementById('myElement');
element.classList.add('myClass');
```

In this example, the same styles are applied to the element, but they are defined in a CSS class instead of being set
directly in JavaScript. This method is more flexible because it allows you to group multiple styles together, reuse them
across different elements, and take advantage of all the features of CSS.

The `classList` property provides several methods for manipulating classes, including `add()`, `remove()`, `toggle()`,
and `contains()`. These methods make it easy to dynamically change the appearance of elements based on user interactions
or other conditions.

In conclusion, while directly modifying the `style` property can be useful for simple style changes, using CSS classes
is generally a more powerful and flexible pattern for modifying styles in JavaScript.

#### Displaying elements conditionally

This can be useful with display properties:

```javascript
let element = document.querySelector("p");
element.style.display = "none";
```

or

```javascript
let element = document.querySelector("p");
element.style.display = "block";
```

### Events

In JavaScript, events are actions or occurrences that happen in the browser, such as a user clicking a button, hovering
over an element, or submitting a form. Events allow you to respond to these actions and execute specific code or
functions.

There are various types of events in JavaScript, including:

1. Mouse events: These events are triggered by mouse actions, such as clicking, hovering, or moving the mouse. Examples
   include "click", "mouseover", "mouseout", etc.
2. Keyboard events: These events are triggered by keyboard actions, such as pressing a key or releasing a key. Examples
   include "keydown", "keyup", "keypress", etc.
3. Form events: These events are triggered by form-related actions, such as submitting a form, changing the value of an
   input field, or focusing on an input field. Examples include "submit", "change", "focus", etc.
4. Window events: These events are triggered by actions related to the browser window, such as resizing the window,
   scrolling the page, or loading the page. Examples include "resize", "scroll", "load", etc.

To handle events in JavaScript, you can use event listeners or event handlers. Event listeners are functions that are
executed when an event occurs, and they can be attached to specific elements using methods like `addEventListener()`.
Event handlers, on the other hand, are functions that are directly assigned to the event property of an element.

#### Event listeners

You can use event listeners to handle events in JavaScript. Here's an example:

```javascript
let button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Button clicked");
});
```

#### Mouse events

Mouse events in JavaScript are triggered by actions performed with the mouse, such as clicking, moving, or hovering over
elements on a webpage. These events allow you to respond to user interactions and perform specific actions accordingly.

Here are some commonly used mouse events in JavaScript:

1. click: This event is triggered when the user clicks the mouse button on an element.

2. dblclick: This event is triggered when the user double-clicks the mouse button on an element.

3. mouseover: This event is triggered when the mouse pointer enters the boundaries of an element.

4. mouseout: This event is triggered when the mouse pointer leaves the boundaries of an element.

5. mousemove: This event is triggered when the mouse pointer moves within the boundaries of an element.

6. mousedown: This event is triggered when the user presses the mouse button down on an element.

7. mouseup: This event is triggered when the user releases the mouse button after pressing it down on an element.

To handle mouse events in JavaScript, you can use event listeners or event handlers. Here's an example of attaching an
event listener to a button element for the "click" event:

```javascript
const button = document.querySelector('button');

button.addEventListener('click', function () {
    console.log('Button clicked!');
});
```

#### Keyboard events

Keyboard events in JavaScript are triggered by user interactions with the keyboard. These events allow you to respond to
key presses, releases, and other keyboard-related actions. Here are some commonly used keyboard events:

1. `keydown`: This event is triggered when a key is initially pressed down. It occurs continuously if the key is held
   down.

2. `keyup`: This event is triggered when a key is released after being pressed down.

3. `keypress`: This event is triggered when a key is initially pressed down and a character is generated. It doesn't
   occur for non-character keys like Shift or Ctrl.

To handle keyboard events, you can use event listeners or event handlers. Here's an example of attaching an event
listener to the `keydown` event:

```javascript
document.addEventListener('keydown', function (event) {
    console.log('Key pressed:', event.key);
});
```

In this example, the function is executed whenever a key is pressed down, and it logs the pressed key to the console.

Keyboard events also provide additional information through the `event` object. For example, you can access
the `event.key` property to get the value of the pressed key. Other properties like `event.keyCode`, `event.shiftKey`
, `event.ctrlKey`, etc., provide more details about the keyboard event.

#### Form events

Form events in JavaScript are events that are triggered by actions related to HTML forms. These events allow you to
respond to user interactions with form elements, such as submitting a form, changing the value of an input field, or
focusing on an input field.

Here are some commonly used form events:

1. `submit`: This event is triggered when a form is submitted, either by clicking a submit button or by pressing the
   Enter key while focused on an input field. You can use this event to perform form validation, handle form data, or
   prevent the default form submission behavior.

2. `change`: This event is triggered when the value of an input field, select element, or textarea is changed. It is
   commonly used to detect when a user has made a selection or entered text in a form field.

3. `input`: This event is similar to the `change` event, but it is triggered immediately when the value of an input
   field changes, even before the user finishes typing or leaves the field. It is often used for real-time validation or
   to update the UI as the user types.

4. `focus`: This event is triggered when an input field, select element, or textarea gains focus, meaning it becomes the
   active element. It can be used to perform actions when a user starts interacting with a specific form field.

5. `blur`: This event is triggered when an input field, select element, or textarea loses focus, meaning it is no longer
   the active element. It can be used to perform actions when a user finishes interacting with a specific form field.

To handle form events, you can use event listeners or event handlers, similar to other JavaScript events. You can attach
event listeners to form elements using methods like `addEventListener()`, and then execute the desired code or functions
when the events occur.

Here's an example of attaching an event listener to a form's submit event:

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Perform form validation or handle form data
});
```

In this example, the function is executed when the form is submitted, and it prevents the default form submission
behavior using `event.preventDefault()`. This allows you to handle the form submission manually, such as validating the
form data before sending it to the server.

#### Window events

Window events in JavaScript are triggered by actions related to the browser window or the document itself. These events
allow you to respond to a variety of interactions and states, such as when the page has finished loading, when the
window is resized, or when the user scrolls the page. Here are some common window events:

1. `load`: This event is triggered when the entire page has loaded, including all dependent resources such as
   stylesheets and images. It's often used to trigger functions that should only run once everything on the page is
   fully loaded.

2. `resize`: This event is triggered when the browser window is resized. It can be used to adjust layout or elements in
   response to changes in window size.

3. `scroll`: This event is triggered when the user scrolls the page. It can be used to create scroll-dependent features,
   such as sticky headers or reveal-on-scroll animations.

4. `unload`: This event is triggered when the page is being unloaded (usually because a new page is being loaded). It's
   often used to clean up before the document is unloaded, such as saving data.

5. `beforeunload`: This event is triggered just before the window is about to unload its resources. It can be used to
   warn the user about unsaved changes.

6. `focus` and `blur`: These events are triggered when the window gains or loses focus, respectively. They can be used
   to pause and resume activities based on whether the user is currently interacting with the window.

Here's an example of how to use the `resize` event:

```javascript
window.addEventListener('resize', function () {
    console.log('Window resized to ' + window.innerWidth + 'x' + window.innerHeight);
});
```

In this example, whenever the window is resized, a message is logged to the console with the new window dimensions.

## Timers

In JavaScript, there are several built-in methods that allow you to execute code at specified time intervals. These are known as timers. The most commonly used timers are `setTimeout()`, `setInterval()`, and `clearInterval()`.

1. `setTimeout()`: This method allows you to execute a function or specified piece of code once after a specified number of milliseconds. Here's an example:

```javascript
setTimeout(function() {
  console.log('This message will appear after 2 seconds');
}, 2000);
```

In this example, the message will be logged to the console after 2 seconds (2000 milliseconds).

2. `setInterval()`: This method is similar to `setTimeout()`, but instead of executing the code once after a specified number of milliseconds, it executes the code repeatedly at that interval. Here's an example:

```javascript
setInterval(function() {
  console.log('This message will appear every 2 seconds');
}, 2000);
```

In this example, the message will be logged to the console every 2 seconds.

3. `clearInterval()`: This method is used to stop the repeated execution of code set up using `setInterval()`. It requires the ID value returned by `setInterval()`. Here's an example:

```javascript
let intervalId = setInterval(function() {
  console.log('This message will appear every 2 seconds');
}, 2000);

// After 10 seconds, stop the repeated message
setTimeout(function() {
  clearInterval(intervalId);
}, 10000);
```

In this example, the message will stop appearing after 10 seconds.

These timers are very useful for creating delays, repeating actions, animations, and more.

## Async (to be enriched)

Async, short for Asynchronous, is a behavior in JavaScript that allows tasks to run in the background while other tasks continue to run concurrently. This is particularly useful for tasks that are time-consuming, like fetching data from an API, reading a file from the disk, or querying a database. 

There are three main ways to handle asynchronous code in JavaScript: callbacks, promises, and async/await.

1. Callbacks: A callback is a function that is passed as an argument to another function and is executed after some operation has been completed. Here's an example:

```javascript
function doSomething(callback) {
  // simulate a time-consuming operation
  setTimeout(function() {
    const data = 'Hello, world!';
    callback(data);
  }, 2000);
}

doSomething(function(data) {
  console.log(data); // 'Hello, world!'
});
```

2. Promises: A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It returns a value which is either a resolved value or a reason why it's rejected. Promises are more readable than callbacks and can be easily chained.

```javascript
let promise = new Promise(function(resolve, reject) {
  // simulate a time-consuming operation
  setTimeout(function() {
    const data = 'Hello, world!';
    resolve(data);
  }, 2000);
});

promise.then(function(data) {
  console.log(data); // 'Hello, world!'
});
```

3. Async/Await: Async/Await is a syntactic sugar on top of promises. It makes asynchronous code look and behave a little more like synchronous code, which makes it easier to understand and manage.

```javascript
async function doSomething() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Hello, world!';
      resolve(data);
    }, 2000);
  });
}

async function main() {
  const data = await doSomething();
  console.log(data); // 'Hello, world!'
}

main();
```

In this example, the `await` keyword is used to pause the execution of the `main` function until the promise is resolved, and then it resumes the execution and returns the resolved value. The `async` keyword is used to declare an asynchronous function, which implicitly returns a promise.


## Cost complexity (O notation)

Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In computer science, it's used to classify algorithms according to how their running time or space requirements grow as the input size grows.

Big O notation characterizes functions according to their growth rates: different functions with the same growth rate may be represented using the same O notation.

Here are some common Big O notations:

1. O(1): Constant Time Complexity - The running time of the algorithm is constant. It doesn’t matter how much data you have, it will always take the same amount of time to execute.

2. O(n): Linear Time Complexity - The running time of the algorithm grows linearly with the size of the input data. If you double the size of the input, the running time will double as well.

3. O(log n): Logarithmic Time Complexity - The running time of the algorithm increases logarithmically with the size of the input data. This means that the running time increases slowly and then plateaus as the size of the input increases.

4. O(n^2): Quadratic Time Complexity - The running time of the algorithm is proportional to the square of the size of the input data. This is common with algorithms that involve nested iterations over the data.

5. O(2^n): Exponential Time Complexity - The running time of the algorithm doubles with each addition to the input data set. This kind of time complexity is usually seen with algorithms that solve problems of combinatorial nature.

6. O(n!): Factorial Time Complexity - The running time of the algorithm grows faster than exponential as the size of the input data increases. This is seen in algorithms that solve the traveling salesman problem brutishly.

Remember, Big O notation doesn't tell you the speed of an algorithm, it tells you how the running time grows as the size of your input grows.

### Most common Big O notations

Sure, let's go through some examples:

1. O(1) - Constant Time Complexity:
```javascript
function isFirstElementNull(arr) {
  return arr[0] === null ? true : false;
}
```
In this example, no matter how big the array is, the function only checks the first element of the array, so it always takes the same amount of time to run.

2. O(n) - Linear Time Complexity:
```javascript
function containsValue(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
```
In this example, in the worst-case scenario (the value is not in the array), the function has to check every element in the array once. So, the running time increases linearly with the size of the array.

3. O(log n) - Logarithmic Time Complexity:
```javascript
function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
```
In this example, the binary search algorithm cuts the array in half with each iteration, so the running time increases logarithmically with the size of the array.

4. O(n^2) - Quadratic Time Complexity:
```javascript
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```
In this example, the bubble sort algorithm has two nested loops: one that iterates over the array, and another one that compares each element with the rest of the elements. So, the running time increases quadratically with the size of the array.


### Built-in methods and Big O notation

Sure, here are some common built-in functions for strings, arrays, and objects in JavaScript, along with their computational complexity:

**String:**

1. `charAt(index)`: O(1) - Accesses a character at a specific index.
2. `concat(string2)`: O(n + m) - Concatenates the original string with `string2`, where `n` and `m` are the lengths of the two strings.
3. `includes(searchString)`: O(n) - Checks if `searchString` is in the original string.
4. `indexOf(searchString)`: O(n) - Returns the index of the first occurrence of `searchString` in the original string.
5. `slice(startIndex, endIndex)`: O(n) - Returns a new string from `startIndex` to `endIndex`.

**Array:**

1. `push(element)`: O(1) - Adds `element` to the end of the array.
2. `pop()`: O(1) - Removes the last element from the array.
3. `shift()`: O(n) - Removes the first element from the array. All other elements have to be re-indexed.
4. `unshift(element)`: O(n) - Adds `element` to the beginning of the array. All other elements have to be re-indexed.
5. `splice(startIndex, deleteCount, items)`: O(n) - Changes the array by adding/removing elements. The worst case is when `startIndex` is 0.
6. `slice(startIndex, endIndex)`: O(n) - Returns a new array from `startIndex` to `endIndex`.
7. `sort(compareFunction)`: O(n log n) - Sorts the elements in the array in place.

**Object:**

1. `Object.keys(obj)`: O(n) - Returns an array of a given object's own enumerable property names.
2. `Object.values(obj)`: O(n) - Returns an array of a given object's own enumerable property values.
3. `Object.entries(obj)`: O(n) - Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
4. `Object.assign(target, sources)`: O(n + m) - Copies all enumerable own properties from one or more source objects to a target object, where `n` and `m` are the numbers of properties in the target and source objects.

Please note that these complexities are for the worst-case scenarios and actual performance can vary based on the JavaScript engine and how it optimizes certain operations.

### Loop complexity

The time complexity of a for loop depends on the number of iterations it makes.

1. **O(1) - Constant Time Complexity**: If the number of iterations is constant and does not grow with the size of an input, the time complexity is O(1). This is rare for loops, as they're usually used to iterate over data.

```javascript
for(let i = 0; i < 10; i++) {
  console.log(i);
}
```
In this example, the loop will always run 10 times, regardless of any other factors, so it's O(1).

2. **O(n) - Linear Time Complexity**: If the loop runs once for each item in the input data, the time complexity is O(n).

```javascript
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```
In this example, the loop runs once for each item in the array, so it's O(n).

3. **O(n^2) - Quadratic Time Complexity**: If there's a loop within a loop, each running once for each item in the input data, the time complexity is O(n^2).

```javascript
for(let i = 0; i < arr.length; i++) {
  for(let j = 0; j < arr.length; j++) {
    console.log(arr[i], arr[j]);
  }
}
```
In this example, for each item in the array, the outer loop runs the inner loop for each item in the array, so it's O(n^2).

4. **O(log n) - Logarithmic Time Complexity**: If the loop splits the data in half (or any fraction) with each iteration, the time complexity is O(log n). This is common in search algorithms.

```javascript
while(n > 1) {
  n = n / 2;
}
```
In this example, the loop cuts `n` in half with each iteration, so it's O(log n).

Remember, these are simplifications. The actual time complexity can depend on what's happening inside the loop. If you're calling a function inside the loop, the time complexity of that function also contributes to the overall time complexity.
