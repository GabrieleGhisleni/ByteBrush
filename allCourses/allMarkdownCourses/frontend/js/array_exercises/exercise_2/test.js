const countBooleans = require("./exercise");



test('countBooleans should return the count of boolean values in the array', () => {
    expect(countBooleans([true, false, true])).toBe(3);
    expect(countBooleans([true, true, true])).toBe(3);
    expect(countBooleans([false, false, false])).toBe(3);
});

test('countBooleans should return 0 if the array is empty', () => {
    expect(countBooleans([])).toBe(0);
});
