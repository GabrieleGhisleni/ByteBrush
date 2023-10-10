

const countBooleans = require("./exercise");

test('countBooleans returns the count of boolean values in object', () => {
    const obj = {
        a: true,
        b: false,
        c: true,
        d: true,
        e: false
    };

    expect(countBooleans(obj)).toBe(3);
});
