/**
 * 2. **Reverse a String**
 * This function takes a string as input and returns the reversed string.
 * @param {string} str - The string to be reversed.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

module.exports = reverseString;
