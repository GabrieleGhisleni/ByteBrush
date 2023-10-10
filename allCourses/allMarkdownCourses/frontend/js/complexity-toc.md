

<!-- toc -->

- [Cost complexity (O notation)](#cost-complexity-o-notation)
  * [Most common Big O notations](#most-common-big-o-notations)
  * [Built-in methods and Big O notation](#built-in-methods-and-big-o-notation)
  * [Loop complexity](#loop-complexity)

<!-- tocstop -->

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
