
const valueExists = require("./exercise");

test('valueExists returns true if value exists in object', () => {
    const obj = {
        a: 'Hello',
        b: 2,
        c: true
    };

    expect(valueExists(obj, 'Hello')).toBe(true);
    expect(valueExists(obj, 2)).toBe(true);
    expect(valueExists(obj, false)).toBe(false);
});
