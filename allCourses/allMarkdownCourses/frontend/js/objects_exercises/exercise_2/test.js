
const checkAllTrue = require("./exercise");



test('checkAllTrue returns true if all values in object are true', () => {
    const obj1 = {
        a: true,
        b: true,
        c: true
    };

    const obj2 = {
        a: true,
        b: false,
        c: true
    };

    expect(checkAllTrue(obj1)).toBe(true);
    expect(checkAllTrue(obj2)).toBe(false);
});
