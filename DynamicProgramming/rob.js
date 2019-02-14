var rob = function(nums) {
    if (nums.length === 0) return 0;
    let value = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        value[i] = Math.max(value[i - 1], value[i - 2] ? value[i - 2] + nums[i] : nums[i]);
    }
    return value[value.length - 1];
};
console.log(rob([2, 1, 1, 2]))