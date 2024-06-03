/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = Array(nums.length)
    dp[0] = nums[0]
    let max = dp[0]

    for (let i = 1; i < nums.length; i++) {
        current = nums[i] // 1
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0) // 

        max = Math.max(max, dp[i])
    }

    return max
};