
const countOccurrences = require("./exercise");

test('countOccurrences should return the count of occurrences of a word in a string', () => {
    expect(countOccurrences('hello world', 'hello')).toBe(1);
    expect(countOccurrences('this is a test', 'is')).toBe(1);
    expect(countOccurrences('javascript is awesome', 'is')).toBe(1);
});

test('countOccurrences should return 0 if the input is an empty string', () => {
    expect(countOccurrences('', 'hello')).toBe(0);
});

test('countOccurrences should return 0 if the word to count is not present in the input string', () => {
    expect(countOccurrences('hello world', 'hi')).toBe(0);
});
