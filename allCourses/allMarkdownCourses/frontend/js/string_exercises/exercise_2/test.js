const reverseString = require("./exercise");



test('reverseString should reverse the characters in a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('javascript')).toBe('tpircsavaj');
});

test('reverseString should return an empty string if the input is an empty string', () => {
    expect(reverseString('')).toBe('');
});

test('reverseString should return the same string if it contains only one character', () => {
    expect(reverseString('a')).toBe('a');
    expect(reverseString('z')).toBe('z');
});
