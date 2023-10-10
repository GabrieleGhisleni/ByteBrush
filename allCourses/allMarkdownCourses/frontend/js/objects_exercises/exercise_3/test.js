
const sumNumberValues = require("./exercise");

test('sumNumberValues returns the correct sum of number values', () => {
    const obj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    };

    expect(sumNumberValues(obj)).toBe(15);
});

test('sumNumberValues returns 0 if no number values', () => {
    const obj = {
        a: 'Hello',
        b: 'World',
        c: '!',
        d: ''
    };

    expect(sumNumberValues(obj)).toBe(0);

    const obj2 = {
        a: true,
        b: false,
        c: true,
        d: false
    }

    expect(sumNumberValues(obj2)).toBe(0);
}
