
const valueExistsInObjects = require("./exercise");

test('valueExistsInObjects should return true if the value exists in any of the objects in the array', () => {
    expect(valueExistsInObjects([{name: 'John', age: 25}, {name: 'Jane', age: 30}], 'John')).toBe(true);
    expect(valueExistsInObjects([{name: 'John', age: 25}, {name: 'Jane', age: 30}], 30)).toBe(true);
    expect(valueExistsInObjects([{name: 'John', age: 25}, {name: 'Jane', age: 30}], {name: 'Jane', age: 30})).toBe(true);
});

test('valueExistsInObjects should return false if the value does not exist in any of the objects in the array', () => {
    expect(valueExistsInObjects([{name: 'John', age: 25}, {name: 'Jane', age: 30}], 'Mary')).toBe(false);
    expect(valueExistsInObjects([{name: 'John', age: 25}, {name: 'Jane', age: 30}], 40)).toBe(false);
    expect(valueExistsInObjects([{name: 'John', age: 25}, {name: 'Jane', age: 30}], {name: 'John', age: 30})).toBe(false);
});

test('valueExistsInObjects should return false if the array is empty', () => {
    expect(valueExistsInObjects([], 'John')).toBe(false);
});
