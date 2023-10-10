const toSlug = require("./exercise");

test('toSlug should convert a string to a URL slug', () => {
    expect(toSlug('hello world')).toBe('hello-world');
    expect(toSlug('this is a test')).toBe('this-is-a-test');
    expect(toSlug('javascript is awesome')).toBe('javascript-is-awesome');
});

test('toSlug should return an empty string if the input is an empty string', () => {
    expect(toSlug('')).toBe('');
});

test('toSlug should return the same string if it is already a URL slug', () => {
    expect(toSlug('hello-world')).toBe('hello-world');
    expect(toSlug('this-is-a-test')).toBe('this-is-a-test');
});
