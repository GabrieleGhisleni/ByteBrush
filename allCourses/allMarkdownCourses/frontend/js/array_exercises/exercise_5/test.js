
const valueExists = require("./exercise");

test('valueExists should return true if the value exists in the array', () => {
    expect(valueExists([1, 2, 3], 2)).toBe(true);
    expect(valueExists(['apple', 'banana', 'cherry'], 'banana')).toBe(true);
    expect(valueExists([true, false, true], true)).toBe(true);
});

test('valueExists should return false if the value does not exist in the array', () => {
    expect(valueExists([1, 2, 3], 4)).toBe(false);
    expect(valueExists(['apple', 'banana', 'cherry'], 'orange')).toBe(false);
    expect(valueExists([true, false, true], false)).toBe(false);
});

test('valueExists should return false if the array is empty', () => {
    expect(valueExists([], 1)).toBe(false);
});
