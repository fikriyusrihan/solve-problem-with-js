/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
 * 
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    
    let dict = new Map();
    
    while (nums.length > 0) {
        let x = nums.shift();
        
        if (nums.includes(x)) {
            dict.set(x, 1);
        } else {
            if (!dict.has(x)) {
                return x;
            }
        }
    }
};