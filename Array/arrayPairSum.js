var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;
    let i = 0;
    while (i < nums.length) {
        sum += nums[i];
        i += 2;
    }
    return sum;
};

var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let halfIndex = nums.length / 2;
    return nums.reduce(function(acc, item, index) {
        if (index % 2 === 0) {
            return acc + item;
        }
        return acc;
    }, 0);
};