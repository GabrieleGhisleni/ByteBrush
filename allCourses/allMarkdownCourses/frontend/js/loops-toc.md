

<!-- toc -->

- [Loops](#loops)
  * [For loop](#for-loop)
  * [While loop](#while-loop)
  * [Do...while loop](#dowhile-loop)
  * [For...in loop](#forin-loop)
  * [For...of loop](#forof-loop)

<!-- tocstop -->

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
