const extractSubstring = require("./exercise");

test('extractSubstring should extract a substring from a string', () => {
    expect(extractSubstring('hello world', 0, 4)).toBe('hello');
    expect(extractSubstring('this is a test', 5, 6)).toBe('is');
    expect(extractSubstring('javascript is awesome', 11, 17)).toBe('awesome');
});

test('extractSubstring should return an empty string if the input is an empty string', () => {
    expect(extractSubstring('', 0, 4)).toBe('');
});

test('extractSubstring should return the same string if the start and end indices are out of range', () => {
    expect(extractSubstring('hello world', 10, 20)).toBe('hello world');
});
