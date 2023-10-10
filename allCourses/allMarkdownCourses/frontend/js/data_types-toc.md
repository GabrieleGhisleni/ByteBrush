

<!-- toc -->

- [Data Types](#data-types)
  * [Number](#number)
    + [Number operators](#number-operators)
    + [Number operators between numbers and strings](#number-operators-between-numbers-and-strings)
  * [Boolean](#boolean)
    + [Boolean truthy and falsy values](#boolean-truthy-and-falsy-values)
    + [Unexpected truthy](#unexpected-truthy)
    + [Boolean operators](#boolean-operators)
    + [Short-circuit evaluation](#short-circuit-evaluation)
    + [Null](#null)
    + [Undefined](#undefined)
    + [Null vs Undefined](#null-vs-undefined)
  * [String](#string)
    + [Escape characters](#escape-characters)
    + [Escaping sequences](#escaping-sequences)
    + [Raw strings](#raw-strings)
    + [Strings length](#strings-length)
    + [Strings comparison](#strings-comparison)
    + [Strings are immutable](#strings-are-immutable)
    + [Fancy string formatting in es6](#fancy-string-formatting-in-es6)
    + [String indexing](#string-indexing)
    + [Exercises](#exercises)
  * [Array](#array)
    + [Array built-in methods](#array-built-in-methods)
    + [Array built-in loops](#array-built-in-loops)
    + [Array decomposition](#array-decomposition)
    + [Array spread operator](#array-spread-operator)
    + [Multi-dimensional arrays](#multi-dimensional-arrays)
    + [Exercises](#exercises-1)
  * [Sets](#sets)
    + [Set built-in methods](#set-built-in-methods)
    + [Set and arrays](#set-and-arrays)
  * [Object](#object)
    + [Nested Objects](#nested-objects)
    + [Objects built-in methods](#objects-built-in-methods)
    + [Object destructuring](#object-destructuring)
    + [Object spread operator](#object-spread-operator)
    + [Object decorators](#object-decorators)
    + [Function as property](#function-as-property)
      - ['this' Keyword](#this-keyword)
    + [Object Constructors](#object-constructors)
    + [Exercises](#exercises-2)

<!-- tocstop -->

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

#### Escape characters

JavaScript uses the backslash character (\) to escape characters that have special meaning in strings. Here are some
examples:

1. **\\**: This is used to escape the backslash character.
2. **\***: This is used to escape the asterisk character.
3. **\'**: This is used to escape the single quote character.

```javascript
var str = "Hello \"World\"";

console.log(str); // Output: Hello "World"
```

#### Escaping sequences

Escape sequences are strings that act differently than their literal meaning. They are used to represent characters that
cannot be typed or are difficult to type. Here are some examples:

1. **\n**: This is used to insert a new line.
2. **\t**: This is used to insert a tab.
3. **\r**: This is used to insert a carriage return.
4. **\v**: This is used to insert a vertical tab.

```javascript
var str = "Hello\nWorld";

console.log(str); // Output: Hello
                  //         World
```

#### Raw strings

Raw strings are strings that do not have any escape sequences. They are used to represent strings that contain escape
sequences. Here are some examples:

1. **String.raw()**: This method returns a string where all escape sequences are ignored.

```javascript
var str = String.raw(`Hello\nWorld`);

console.log(str); // Output: Hello\nWorld
```

#### Strings length

The length of a string is the number of characters in the string. For example, the length of the string "Hello World" is
11.

```javascript
var str = "Hello World";

console.log(str.length); // Output: 11
```

#### Strings comparison

Strings can be compared using the comparison operators. For example, the string "Hello" is less than the string "World"
because the letter "H" comes before the letter "W" in the alphabet.

```javascript
var str1 = "Hello";
var str2 = "World";

console.log(str1 < str2); // Output: true
```


#### Strings are immutable

Strings are immutable, meaning they cannot be changed. For example, the following code will throw an error:

```javascript
var str = "Hello World";

str[0] = "J"; // Error: Cannot assign to read only property '0' of string 'Hello World'
```

So every time you modify a string, a new string is created.

```javascript
var str = "Hello World";

str = "J" + str.slice(1); // OK
```

They will not modify in place ever

```javascript
var x = "Hello";
var y = x + " World";

console.log(x); // Output: Hello
console.log(y); // Output: Hello World
```

#### Fancy string formatting in es6

In ES6, you can use template literals to format strings. Template literals are enclosed in backticks (`) instead of
quotes. They can contain placeholders, which are indicated by the dollar sign and curly braces (${expression}). The
placeholders are replaced with the values of the expressions. Here are some examples:

```javascript
var name = "John";
var age = 25;

var str = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(str); // Output: Hello, my name is John and I am 25 years old.
```

#### String indexing

Strings are zero-indexed, meaning the first character is at index 0, the second character is at index 1, and so on. For
example, the string "Hello World" has 11 characters, so the last character is at index 10.

```javascript
var str = "Hello World";

console.log(str[0]); // Output: H
console.log(str[10]); // Output: d
console.log(str[11]); // Output: undefined
console.log(str[-1]); // Output: undefined
```

if you want access the last character of a string, you can use the length property.

```javascript
var str = "Hello World";

console.log(str[str.length - 1]); // Output: d
```

#### Exercises
You can download the exercises here [string_exercises.zip](https://github.com/GabrieleGhisleni/ByteBrush/blob/main/public/allCourses/allMarkdownCourses/frontend/js/string_exercises/string_exercises.zip)

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

#### Exercises
You can download the exercises here [array_exercises.zip](https://github.com/GabrieleGhisleni/ByteBrush/blob/main/public/allCourses/allMarkdownCourses/frontend/js/array_exercises/array_exercises.zip)

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


#### Exercises

You can download the exercises here [objects_exercises.zip](https://github.com/GabrieleGhisleni/ByteBrush/blob/main/public/allCourses/allMarkdownCourses/frontend/js/objects_exercises/objects_exercises.zip)
