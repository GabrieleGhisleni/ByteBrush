const toUpperCase = require("./exercise");

test('toUpperCase should return a new array where all the strings are converted to uppercase', () => {
    expect(toUpperCase(['apple', 'banana', 'cherry'])).toEqual(['APPLE', 'BANANA', 'CHERRY']);
    expect(toUpperCase(['cat', 'dog', 'elephant'])).toEqual(['CAT', 'DOG', 'ELEPHANT']);
    expect(toUpperCase(['red', 'green', 'blue'])).toEqual(['RED', 'GREEN', 'BLUE']);
});

test('toUpperCase should return an empty array if the input array is empty', () => {
    expect(toUpperCase([])).toEqual([]);
});
