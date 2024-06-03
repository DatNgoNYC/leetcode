/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var indices = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = indices.get(target - nums[i]);
        if (complement !== undefined) {
            return [i, complement]
        } 
        
        indices.set(nums[i], i);

    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
