

const findSmallestNumber = require("./exercise");

test('findSmallestNumber returns the smallest number value', () => {
    const obj = {
        a: 5,
        b: 2,
        c: 10,
        d: 1,
        e: 3
    };

    expect(findSmallestNumber(obj)).toBe(1);
});
