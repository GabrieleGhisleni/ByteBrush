const findSmallestNumber = require("./exercise");

test('findSmallestNumber should return the smallest number in the array', () => {
    expect(findSmallestNumber([1, 2, 3])).toBe(1);
    expect(findSmallestNumber([4, 5, 6])).toBe(4);
    expect(findSmallestNumber([-1, 0, 1])).toBe(-1);
});

test('findSmallestNumber should return undefined if the array is empty', () => {
    expect(findSmallestNumber([])).toBeUndefined();
});
