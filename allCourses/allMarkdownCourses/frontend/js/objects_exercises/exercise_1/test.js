const concatenateStrings = require("./exercise");


test('concatenateStrings returns the correct concatenated string', () => {
    const obj = {
        a: 'Hello',
        b: 'World',
        c: '!'
    };

    expect(concatenateStrings(obj)).toBe('HelloWorld!');
});
