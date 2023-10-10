
const toTitleCase = require("./exercise");

test('toTitleCase should convert a string to title case', () => {
    expect(toTitleCase('hello world')).toBe('Hello World');
    expect(toTitleCase('this is a test')).toBe('This Is A Test');
    expect(toTitleCase('javascript is awesome')).toBe('Javascript Is Awesome');
});

test('toTitleCase should return an empty string if the input is an empty string', () => {
    expect(toTitleCase('')).toBe('');
});

test('toTitleCase should return the same string if it is already in title case', () => {
    expect(toTitleCase('Hello World')).toBe('Hello World');
    expect(toTitleCase('This Is A Test')).toBe('This Is A Test');
});
