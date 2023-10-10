
const findLongestWord = require("./exercise");

test('findLongestWord should return the longest word in a string', () => {
    expect(findLongestWord('hello world')).toBe('hello');
    expect(findLongestWord('this is a test')).toBe('test');
    expect(findLongestWord('javascript is awesome')).toBe('javascript');
});

test('findLongestWord should return an empty string if the input is an empty string', () => {
    expect(findLongestWord('')).toBe('');
});

test('findLongestWord should return the same word if the input contains only one word', () => {
    expect(findLongestWord('hello')).toBe('hello');
    expect(findLongestWord('world')).toBe('world');
});
