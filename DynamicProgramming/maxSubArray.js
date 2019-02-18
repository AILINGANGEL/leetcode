var maxSubArray = function(nums) {
    let sum = [nums[0]];
    let max = sum[0];
    for (let i = 1; i < nums.length; i++) {
        sum[i] = nums[i] + (sum[i - 1] > 0 ? sum[i - 1] : 0);
        max = Math.max(max, sum[i]);
    }
    return max;
};

console.log(maxSubArray([8, -19, 5, -4, 20]))