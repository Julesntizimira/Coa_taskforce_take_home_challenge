// declaration and initiation of giva=en array and targeted sum
const arr = [4, 2, 7, 1, 9, 5];
const targetedSum = 17;

//start and end index
const start = 0
const end = arr.length - 1;

//function that checks for  Contiguous Subarray
function checkContigousSubArray(arr, targetedSum) {
    for (let i = start; i <= end; i++) {
        let sum = arr[i];
        for (let j = i + 1; j <= end; j++) {
            sum += arr[j];
            if (sum === targetedSum) {
                return true;
            }
        }
    }
    return false
}
console.log(checkContigousSubArray(arr, targetedSum));