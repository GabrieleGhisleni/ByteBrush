

const findDuplicates = require("./exercise");

test('findDuplicates should return a new array that contains the duplicate elements of the input array', () => {
    expect(findDuplicates([1, 2, 2, 3, 3, 3])).toEqual([2, 3]);
    expect(findDuplicates(['apple', 'banana', 'banana', 'cherry'])).toEqual(['banana']);
    expect(findDuplicates([true, false, true, true])).toEqual([true]);
});

test('findDuplicates should return an empty array if there are no duplicate elements', () => {
    expect(findDuplicates([1, 2, 3])).toEqual([]);
});
