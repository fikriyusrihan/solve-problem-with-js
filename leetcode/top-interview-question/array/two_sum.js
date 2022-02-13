/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        let value = target - nums[i];
        let index = nums.indexOf(value);
        
        if (index !== -1 && i !== index) {
            answer.push(i);
            answer.push(index);
            
            break;
        }
    }
    
    return answer;
};