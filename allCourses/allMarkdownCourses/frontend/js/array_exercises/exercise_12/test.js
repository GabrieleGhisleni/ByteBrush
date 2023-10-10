const filterArray = require("./exercise");

test('filterArray should return a new array that contains only the elements of the input array that meet the condition specified in the callback function', () => {
    const isEven = (num) => num % 2 === 0;
    expect(filterArray([1, 2, 3, 4, 5, 6], isEven)).toEqual([2, 4, 6]);
    const isLongerThanFive = (str) => str.length > 5;
    expect(filterArray(['apple', 'banana', 'cherry', 'date'], isLongerThanFive)).toEqual(['banana', 'cherry']);
    const isTrue = (bool) => bool === true;
    expect(filterArray([true, false, true, true], isTrue)).toEqual([true, true, true]);
});

test('filterArray should return an empty array if no elements meet the condition', () => {
    const isEven = (num) => num % 2 === 0;
    expect(filterArray([1, 3, 5], isEven)).toEqual([]);
});
