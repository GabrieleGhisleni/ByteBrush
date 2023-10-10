

<!-- toc -->

- [Async (to be enriched)](#async-to-be-enriched)

<!-- tocstop -->

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

