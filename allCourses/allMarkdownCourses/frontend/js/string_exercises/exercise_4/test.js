const isPalindrome = require("./exercise");

test('isPalindrome should return true if the string is a palindrome', () => {
    expect(isPalindrome('level')).toBe(true);
    expect(isPalindrome('radar')).toBe(true);
    expect(isPalindrome('madam')).toBe(true);
});

test('isPalindrome should return false if the string is not a palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
    expect(isPalindrome('javascript')).toBe(false);
});

test('isPalindrome should return true if the string is empty', () => {
    expect(isPalindrome('')).toBe(true);
});
