
const replaceAll = require("./exercise");

test('replaceAll should replace all occurrences of a word in a string', () => {
    expect(replaceAll('hello world', 'hello', 'hi')).toBe('hi world');
    expect(replaceAll('this is a test', 'is', 'was')).toBe('thwas was a test');
    expect(replaceAll('javascript is awesome', 'awesome', 'amazing')).toBe('javascript is amazing');
});

test('replaceAll should return an empty string if the input is an empty string', () => {
    expect(replaceAll('', 'hello', 'hi')).toBe('');
});

test('replaceAll should return the same string if the word to find is not present in the input string', () => {
    expect(replaceAll('hello world', 'hi', 'hello')).toBe('hello world');
});
