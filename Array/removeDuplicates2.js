var removeDuplicates = function(nums, val) {
    let len = nums.length;
    if (len < 3) return len;

    let i = 0;
    let j = 1;
    let count = 1;
    while (j < nums.length) {
        if (nums[j] !== nums[i]) {
            nums[++i] = nums[j];
            count = 1;
        } else {
            if (count < 2) {
                nums[++i] = nums[j];
                count++;
            }
        }
        j++;
    }
    return i + 1;
};
