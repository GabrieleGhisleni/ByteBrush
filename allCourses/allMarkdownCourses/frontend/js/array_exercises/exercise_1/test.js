
const sumArray = require("./exercise");


test('sumArray should return the sum of all numbers in the array', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([4, 5, 6])).toBe(15);
    expect(sumArray([-1, 0, 1])).toBe(0);
});

test('sumArray should return 0 if the array is empty', () => {
    expect(sumArray([])).toBe(0);
});
