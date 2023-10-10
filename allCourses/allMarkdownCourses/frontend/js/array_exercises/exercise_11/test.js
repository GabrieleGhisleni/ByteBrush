
const flattenArray = require("./exercise");

test('flattenArray should return a new one-dimensional array that contains all the elements of the input array', () => {
    expect(flattenArray([[1, 2], [3, 4], [5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(flattenArray([['apple', 'banana'], ['cherry', 'date']])).toEqual(['apple', 'banana', 'cherry', 'date']);
    expect(flattenArray([[true, false], [true, true]])).toEqual([true, false, true, true]);
});

test('flattenArray should return an empty array if the input array is empty', () => {
    expect(flattenArray([])).toEqual([]);
});
