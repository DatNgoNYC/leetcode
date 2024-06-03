/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let lo = 0, hi = nums.length - 1; 
    while (lo < hi) {
        let mid = Math.floor((hi + lo) / 2) 

        if (nums[mid] < target) {  
            lo = mid + 1
        } else {
            hi = mid;
        } 
    }
    return nums[hi] === target ? hi : -1 
};