
const mergeArrays = require("./exercise");

test('mergeArrays should return a new array that is the result of merging the two input arrays', () => {
    expect(mergeArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mergeArrays(['apple', 'banana'], ['cherry', 'date'])).toEqual(['apple', 'banana', 'cherry', 'date']);
    expect(mergeArrays([true, false], [true, true])).toEqual([true, false, true, true]);
});

test('mergeArrays should return an empty array if both input arrays are empty', () => {
    expect(mergeArrays([], [])).toEqual([]);
});
