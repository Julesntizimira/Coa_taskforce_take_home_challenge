/*
Function that checks for a Contiguous Subarray summing up to the targeted sum.

@param {array} arr - Input array.
@param {number} targetedSum - Targeted sum to check for in the contiguous subarray.
@return {boolean} - True if a contiguous subarray with the targeted sum exists, false otherwise.
*/
function checkContiguousSubArray(arr, targetedSum) {
    // Start and end index for the array
    const start = 0;
    const end = arr.length - 1;
    for (let i = start; i <= end; i++) {
        let sum = arr[i];
        for (let j = i + 1; j <= end; j++) {
            sum += arr[j];
            if (sum === targetedSum) {
                return true;
            }
        }
    }
    return false;
}
module.exports = checkContiguousSubArray;
