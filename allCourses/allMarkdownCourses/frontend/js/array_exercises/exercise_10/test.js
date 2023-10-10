

const removeDuplicates = require("./exercise");

test('removeDuplicates should return a new array that contains the unique elements of the input array', () => {
    expect(removeDuplicates([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    expect(removeDuplicates(['apple', 'banana', 'banana', 'cherry'])).toEqual(['apple', 'banana', 'cherry']);
    expect(removeDuplicates([true, false, true, true])).toEqual([true, false]);
});

test('removeDuplicates should return an empty array if the input array is empty', () => {
    expect(removeDuplicates([])).toEqual([]);
});
