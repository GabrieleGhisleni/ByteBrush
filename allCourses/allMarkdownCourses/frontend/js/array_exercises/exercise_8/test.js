
const findCommonElements = require("./exercise");

test('findCommonElements should return a new array that contains the common elements of the input arrays', () => {
    expect(findCommonElements([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    expect(findCommonElements(['apple', 'banana', 'cherry'], ['banana', 'cherry', 'date'])).toEqual(['banana', 'cherry']);
    expect(findCommonElements([true, false], [true, true])).toEqual([true]);
});

test('findCommonElements should return an empty array if there are no common elements', () => {
    expect(findCommonElements([1, 2, 3], [4, 5, 6])).toEqual([]);
});
