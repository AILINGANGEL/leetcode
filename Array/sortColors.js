var sortColors = function(nums) {
    let left = -1;
    let right = nums.length;
    let i = 0;
    while (i < right) {
        let temp = nums[i];
        if (temp === 0) {
            left++;
            nums[i] = nums[left];
            nums[left] = 0;
            i++;
        } else if (temp === 2) {
            right--;
            nums[i] = nums[right];
            nums[right] = 2;
        } else {
            i++;
        }
    }
};