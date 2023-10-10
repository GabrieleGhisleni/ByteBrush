

const removeExtraSpaces = require("./exercise");
test('removeExtraSpaces should remove extra spaces from a string', () => {
    expect(removeExtraSpaces('hello  world')).toBe('hello world');
    expect(removeExtraSpaces('this   is   a   test')).toBe('this is a test');
    expect(removeExtraSpaces('javascript   is   awesome')).toBe('javascript is awesome');
});

test('removeExtraSpaces should return an empty string if the input is an empty string', () => {
    expect(removeExtraSpaces('')).toBe('');
});

test('removeExtraSpaces should return the same string if it does not contain any extra spaces', () => {
    expect(removeExtraSpaces('hello world')).toBe('hello world');
    expect(removeExtraSpaces('this is a test')).toBe('this is a test');
});
