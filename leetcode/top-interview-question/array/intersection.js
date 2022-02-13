/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    let nums3 = [];
    
    while (nums1.length > 0) {
        let x = nums1.shift();
        
        if (nums2.includes(x)) {
            nums3.push(x);
            nums2.splice(nums2.indexOf(x), 1);
        }
    }
    
    return nums3;
};