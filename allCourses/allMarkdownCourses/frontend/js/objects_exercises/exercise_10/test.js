


const keyExists = require("./exercise");

test('keyExists returns true if key exists in object', () => {
    const obj = {
        a: 'Hello',
        b: 2,
        c: true
    };

    expect(keyExists(obj, 'a')).toBe(true);
    expect(keyExists(obj, 'b')).toBe(true);
    expect(keyExists(obj, 'd')).toBe(false);
});
