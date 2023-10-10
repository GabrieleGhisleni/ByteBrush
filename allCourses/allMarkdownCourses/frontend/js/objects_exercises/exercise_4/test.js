
const sumNumberValues = require("../exercise_3/exercise");

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
