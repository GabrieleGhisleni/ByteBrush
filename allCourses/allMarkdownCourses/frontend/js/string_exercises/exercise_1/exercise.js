/**
 * 1. **Capitalize a Word**
 * This function takes a string as input and returns the string with the first letter capitalized.
 * @param {string} word - The word to be capitalized.
 */
function capitalizeWord(word) {
    if (word.length === 0) {
        return '';
    }
    return word[0].toUpperCase() + word.slice(1);
}

module.exports = capitalizeWord;
