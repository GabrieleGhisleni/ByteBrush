const repeatSyllableNTimes = require("./exercise");

test('repeatSyllableNTimes should print the syllable repeated n times, separated by spaces', () => {
    expect(repeatSyllableNTimes('la', 'la3')).toBe('la la la');
    expect(repeatSyllableNTimes('do', 'do5')).toBe('do do do do do');
    expect(repeatSyllableNTimes('mi', 'mi2')).toBe('mi mi');
});

test('repeatSyllableNTimes should throw an error if the phrase does not end with a digit n', () => {
    expect(() => repeatSyllableNTimes('la', 'la')).toThrow();
    expect(() => repeatSyllableNTimes('do', 'do')).toThrow();
    expect(() => repeatSyllableNTimes('mi', 'mi')).toThrow();
});
