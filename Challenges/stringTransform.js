/*
Transforms a string based on its length.

@param {string} str - Input string to be transformed.
@return {string|undefined} - Transformed string based on conditions, or undefined if no condition is met.
*/
function transformString(str) {
    const len = str.length;
    let strArr = Array.from(str);

    if (len % 3 === 0 && len % 5 === 0) {
        let asciiValues = "";
        const newStr = strArr.reverse().join('');
        for (let i = 0; i < len; i++) {
            let ascii = newStr.charCodeAt(i);
            asciiValues += ascii.toString();
        }
        return asciiValues;
    } else if (len % 3 === 0) {
        return strArr.reverse().join('');
    } else if (len % 5 === 0) {
        let asciiValues = "";
        for (let i = 0; i < len; i++) {
            let ascii = str.charCodeAt(i);
            asciiValues += ascii.toString();
        }
        return asciiValues;
    }
    // No transformation condition met, return undefined
}
module.exports = transformString;