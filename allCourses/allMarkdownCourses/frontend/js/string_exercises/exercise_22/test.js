const checkIfStartsWithZ = require("./exercise");

test('checkIfStartsWithZ should return true if both x and y start with z', () => {
    expect(checkIfStartsWithZ('zebra', 'zoo', 'z')).toBe(true);
    expect(checkIfStartsWithZ('zeppelin', 'zoom', 'z')).toBe(true);
    expect(checkIfStartsWithZ('zoo', 'zebra', 'z')).toBe(true);
});

test('checkIfStartsWithZ should return false if either x or y does not start with z', () => {
    expect(checkIfStartsWithZ('zebra', 'lion', 'z')).toBe(false);
    expect(checkIfStartsWithZ('zeppelin', 'car', 'z')).toBe(false);
    expect(checkIfStartsWithZ('tiger', 'zebra', 'z')).toBe(false);
});

test('checkIfStartsWithZ should return false if the input is an empty string', () => {
    expect(checkIfStartsWithZ('', '', 'z')).toBe(false);
});
