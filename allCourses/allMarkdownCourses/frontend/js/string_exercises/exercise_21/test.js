const printStringWithLowercaseMidCharacter = require("./exercise");

test('printStringWithLowercaseMidCharacter should print a new string like x with the mid-character in lowercase', () => {
    expect(printStringWithLowercaseMidCharacter('hello')).toBe('heLlo');
    expect(printStringWithLowercaseMidCharacter('world')).toBe('woRld');
    expect(printStringWithLowercaseMidCharacter('javascript')).toBe('javasCript');
});

test('printStringWithLowercaseMidCharacter should throw an error if the input string has an even length', () => {
    expect(() => printStringWithLowercaseMidCharacter('')).toThrow();
    expect(() => printStringWithLowercaseMidCharacter('a')).toThrow();
    expect(() => printStringWithLowercaseMidCharacter('ab')).toThrow();
});
