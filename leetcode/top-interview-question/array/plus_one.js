/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    digits[digits.length - 1] += 1;
    
    for (let i = digits.length - 1; i >= 0; i--) {
        if (Math.floor(digits[i] / 10) > 0) {
            if (i == 0) {
                digits.unshift(1);
                digits[i + 1] = digits[i + 1] % 10;
            } else {
                digits[i - 1] += 1;
                digits[i] = digits[i] % 10;
            }
        }
    }
    
    return digits;
};