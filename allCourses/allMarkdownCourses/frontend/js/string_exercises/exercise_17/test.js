const extractAndPrintFirstAndLastThree = require("./exercise");

test('extractAndPrintFirstAndLastThree should extract the last 3 characters joined to the first 3 characters, then print the result', () => {
    expect(extractAndPrintFirstAndLastThree('hello world')).toBe('helrld');
    expect(extractAndPrintFirstAndLastThree('this is a test')).toBe('thetst');
    expect(extractAndPrintFirstAndLastThree('javascript is awesome')).toBe('javome');
});

test('extractAndPrintFirstAndLastThree should throw an error if the input is not at least 3 characters long', () => {
    expect(() => extractAndPrintFirstAndLastThree('')).toThrow();
    expect(() => extractAndPrintFirstAndLastThree('a')).toThrow();
    expect(() => extractAndPrintFirstAndLastThree('ab')).toThrow();
});
