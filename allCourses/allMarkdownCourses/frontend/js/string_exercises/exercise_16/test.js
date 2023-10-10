const printWithoutFirstAndLast = require("./exercise");

test('printWithoutFirstAndLast should print the string composed of all characters of x except the first one, followed by all characters of x except the last one', () => {
    expect(printWithoutFirstAndLast('hello')).toBe('ell');
    expect(printWithoutFirstAndLast('world')).toBe('orl');
    expect(printWithoutFirstAndLast('javascript')).toBe('avascrip');
});

test('printWithoutFirstAndLast should return an empty string if the input is an empty string', () => {
    expect(printWithoutFirstAndLast('')).toBe('');
});

test('printWithoutFirstAndLast should return an empty string if the input contains only one character', () => {
    expect(printWithoutFirstAndLast('a')).toBe('');
    expect(printWithoutFirstAndLast('z')).toBe('');
});
