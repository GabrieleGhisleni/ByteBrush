const replaceSubstrings = require("./exercise");

test('replaceSubstrings should replace the substring "Gold" with the string in the variable what, and replace the substring "has begun" with the string in the variable happened', () => {
    expect(replaceSubstrings('Gold has begun', 'Silver', 'is happening')).toBe('Silver is happening');
    expect(replaceSubstrings('Gold has begun', 'Bronze', 'is not happening')).toBe('Bronze is not happening');
    expect(replaceSubstrings('Gold has begun', 'Platinum', 'is happening')).toBe('Platinum is happening');
});

test('replaceSubstrings should return an empty string if the input is an empty string', () => {
    expect(replaceSubstrings('', 'Silver', 'is happening')).toBe('');
});

test('replaceSubstrings should return the same string if the substrings to replace are not present in the input string', () => {
    expect(replaceSubstrings('Hello world', 'Silver', 'is happening')).toBe('Hello world');
});
