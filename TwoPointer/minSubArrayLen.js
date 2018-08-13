var minSubArrayLen = function(s, nums) {
    let i = 0;
    let j = -1;
    let result = 0;
    let sum = 0;
    while (j < nums.length) {
        if (sum < s) {
            j++;
            sum += nums[j];
        } else {
            if (result === 0) {
                result = (j - i + 1);
            } else {
                result = result > (j - i + 1) ? (j - i + 1) : result;
            }
            sum -= nums[i];
            i++;
        }
    }
    return result;
};
