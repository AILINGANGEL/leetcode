var findPeakElement = function(nums) {
    let i = 0;
    while (i < nums.length - 1) {
        if (i === 0) {
            if (nums[i] > nums[i + 1]) {
                return i;
            }
            i++;
        }
        if (nums[i] > nums[i + 1] && nums[i] > nums[i - 1]) {
            return i;
        }
        i++;
    }
    return nums.length - 1;
};


var findPeakElement = function(nums) {
    return helper(nums, 0, nums.length - 1);
}

var helper = function(nums, i, j) {
    if (i < j) {
        let mid = Math.floor((i + j) / 2);
        if (nums[mid] < nums[mid + 1]) {
            return helper(nums, mid + 1, j);
        } else {
            return helper(nums, i, mid);
        }
    }
    return i;
}

var nums = [1, 2, 3]

console.log(findPeakElement(nums))