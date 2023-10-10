const capitalizeWord = require('./exercise');


test('capitalizeWord should capitalize the first letter of a word', () => {
    expect(capitalizeWord('hello')).toBe('Hello');
    expect(capitalizeWord('world')).toBe('World');
    expect(capitalizeWord('javascript')).toBe('Javascript');
});

test('capitalizeWord should return an empty string if the input is an empty string', () => {
    expect(capitalizeWord('')).toBe('');
});

test('capitalizeWord should return the same word if the first letter is already capitalized', () => {
    expect(capitalizeWord('Hello')).toBe('Hello');
    expect(capitalizeWord('World')).toBe('World');
    expect(capitalizeWord('Javascript')).toBe('Javascript');
});
