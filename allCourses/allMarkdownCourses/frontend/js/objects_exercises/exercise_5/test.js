

const findLongestString = require("../exercise_4/exercise");

test('findLongestString returns the longest string value', () => {
    const obj = {
        a: 'Hello',
        b: 'World',
        c: '!',
        d: ''
    };

    expect(findLongestString(obj)).toBe('Hello');
});


