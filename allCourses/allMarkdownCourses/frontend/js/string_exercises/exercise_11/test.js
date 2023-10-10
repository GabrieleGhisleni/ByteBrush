
const splitIntoWords = require("./exercise");

test('splitIntoWords should split a string into an array of words', () => {
    expect(splitIntoWords('hello world')).toEqual(['hello', 'world']);
    expect(splitIntoWords('this is a test')).toEqual(['this', 'is', 'a', 'test']);
    expect(splitIntoWords('javascript is awesome')).toEqual(['javascript', 'is', 'awesome']);
});

test('splitIntoWords should return an empty array if the input is an empty string', () => {
    expect(splitIntoWords('')).toEqual([]);
});

test('splitIntoWords should return an array with one element if the input contains only one word', () => {
    expect(splitIntoWords('hello')).toEqual(['hello']);
    expect(splitIntoWords('world')).toEqual(['world']);
});
