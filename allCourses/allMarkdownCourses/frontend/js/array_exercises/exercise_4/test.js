
const findLongestString = require("./exercise");

test('findLongestString should return the longest string in the array', () => {
    expect(findLongestString(['apple', 'banana', 'cherry'])).toBe('banana');
    expect(findLongestString(['cat', 'dog', 'elephant'])).toBe('elephant');
    expect(findLongestString(['red', 'green', 'blue'])).toBe('green');
});

test('findLongestString should return undefined if the array is empty', () => {
    expect(findLongestString([])).toBeUndefined();
});
