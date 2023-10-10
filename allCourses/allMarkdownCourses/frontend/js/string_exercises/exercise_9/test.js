
const containsWord = require("./exercise");

test('containsWord should return true if the string contains the word', () => {
    expect(containsWord('hello world', 'hello')).toBe(true);
    expect(containsWord('this is a test', 'is')).toBe(true);
    expect(containsWord('javascript is awesome', 'is')).toBe(true);
});

test('containsWord should return false if the string does not contain the word', () => {
    expect(containsWord('hello world', 'hi')).toBe(false);
    expect(containsWord('this is a test', 'was')).toBe(false);
    expect(containsWord('javascript is awesome', 'amazing')).toBe(false);
});

test('containsWord should return false if the input is an empty string', () => {
    expect(containsWord('', 'hello')).toBe(false);
});
