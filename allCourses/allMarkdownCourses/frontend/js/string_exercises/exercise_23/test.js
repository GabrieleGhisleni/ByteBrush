const isValidPhoneNumber = require("./exercise");

test('isValidPhoneNumber should return true if the string is a valid phone number', () => {
    expect(isValidPhoneNumber('+393333333333')).toBe(true);
    expect(isValidPhoneNumber('+391234567890')).toBe(true);
    expect(isValidPhoneNumber('+390123456789')).toBe(true);
});

test('isValidPhoneNumber should return false if the string is not a valid phone number', () => {
    expect(isValidPhoneNumber('3333333333')).toBe(false);
    expect(isValidPhoneNumber('+39123456789')).toBe(false);
    expect(isValidPhoneNumber('+39012345678')).toBe(false);
});

test('isValidPhoneNumber should return false if the input is an empty string', () => {
    expect(isValidPhoneNumber('')).toBe(false);
});
