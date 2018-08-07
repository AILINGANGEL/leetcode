var dominantIndex = function(nums) {
    let max = -1;
    let index = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            index = i;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (i !== index) { //不判断自己
            if (max / nums[i] < 2) {
                return -1;
            }
        }
    }
    return index;
};
