
const toCamelCase = require("./exercise");

test('toCamelCase should convert a string to camel case', () => {
    expect(toCamelCase('hello world')).toBe('helloWorld');
    expect(toCamelCase('this is a test')).toBe('thisIsATest');
    expect(toCamelCase('javascript is awesome')).toBe('javascriptIsAwesome');
});

test('toCamelCase should return an empty string if the input is an empty string', () => {
    expect(toCamelCase('')).toBe('');
});

test('toCamelCase should return the same string if it is already in camel case', () => {
    expect(toCamelCase('helloWorld')).toBe('helloWorld');
    expect(toCamelCase('thisIsATest')).toBe('thisIsATest');
});
