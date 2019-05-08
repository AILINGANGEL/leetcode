var maxSubArray = function(nums) {
    let sum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        sum[i] = Math.max(sum[i - 1] + nums[i], nums[i]);
    }
    return Math.max.apply(null, sum);
};