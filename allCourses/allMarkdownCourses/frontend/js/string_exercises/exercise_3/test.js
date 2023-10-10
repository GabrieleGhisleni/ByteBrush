const countVowels = require("./exercise");

test('countVowels should return the count of vowels in a string', () => {
    expect(countVowels('hello')).toBe(2);
    expect(countVowels('world')).toBe(1);
    expect(countVowels('javascript')).toBe(3);
});

test('countVowels should return 0 if the input is an empty string', () => {
    expect(countVowels('')).toBe(0);
});

test('countVowels should return 0 if the input does not contain any vowels', () => {
    expect(countVowels('xyz')).toBe(0);
});
