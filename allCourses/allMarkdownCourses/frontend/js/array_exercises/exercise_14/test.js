
const findMaxMin = require("./exercise");

test('findMaxMin should return an object with the maximum and minimum numbers extracted from the array', () => {
    expect(findMaxMin([1, 2, 3, 4, 5, 6])).toEqual({ max: 6, min: 1 });
    expect(findMaxMin([-1, 0, 1])).toEqual({ max: 1, min: -1 });
    expect(findMaxMin([10, 20, 30, 40, 50])).toEqual({ max: 50, min: 10 });
});

test('findMaxMin should return undefined for both max and min if the input array is empty', () => {
    expect(findMaxMin([])).toEqual({ max: undefined, min: undefined });
});
