const beginsAndEndsWithSameTwoChars = require("./exercise");

test('beginsAndEndsWithSameTwoChars should return true if the word begins with the same two characters it ends with', () => {
    expect(beginsAndEndsWithSameTwoChars('hello')).toBe(false);
    expect(beginsAndEndsWithSameTwoChars('radar')).toBe(true);
    expect(beginsAndEndsWithSameTwoChars('madam')).toBe(true);
});

test('beginsAndEndsWithSameTwoChars should return false if the word does not begin with the same two characters it ends with', () => {
    expect(beginsAndEndsWithSameTwoChars('world')).toBe(false);
    expect(beginsAndEndsWithSameTwoChars('javascript')).toBe(false);
});

test('beginsAndEndsWithSameTwoChars should return true if the word is empty', () => {
    expect(beginsAndEndsWithSameTwoChars('')).toBe(true);
});
