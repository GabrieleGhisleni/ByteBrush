

<!-- toc -->

- [Error handling](#error-handling)

<!-- tocstop -->

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
