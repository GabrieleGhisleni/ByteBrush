

const reverseStrings = require("./exercise");

test('reverseStrings returns a new object with reversed string values', () => {
    const obj = {
        a: 'Hello',
        b: 'World',
        c: '!'
    };

    expect(reverseStrings(obj)).toEqual({
        a: 'olleH',
        b: 'dlroW',
        c: '!'
    });
});
