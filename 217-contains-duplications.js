/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort()

  if (!nums.length) return true

  let prev = nums[0]

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] === prev) {
        return true 
      } else {
        prev = nums[i]
      }
  }

  return false;
};