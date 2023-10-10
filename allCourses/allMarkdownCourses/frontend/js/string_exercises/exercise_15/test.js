const startsWithWord = require("./exercise");

test('startsWithWord should return true if the string starts with the word', () => {
    expect(startsWithWord('hello world', 'hello')).toBe(true);
    expect(startsWithWord('this is a test', 'this')).toBe(true);
    expect(startsWithWord('javascript is awesome', 'javascript')).toBe(true);
});

test('startsWithWord should return false if the string does not start with the word', () => {
    expect(startsWithWord('hello world', 'hi')).toBe(false);
    expect(startsWithWord('this is a test', 'was')).toBe(false);
    expect(startsWithWord('javascript is awesome', 'amazing')).toBe(false);
});

test('startsWithWord should return false if the input is an empty string', () => {
    expect(startsWithWord('', 'hello')).toBe(false);
});
