var search = function(nums, target) {
    return helper(nums, 0, nums.length, target);
};

var helper = function(nums, l, r, target) {
    if (l > r) return -1;
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) {
        return mid
    } else if (nums[mid] > target) {
        return helper(nums, 0, mid - 1, target);
    } else {
        return helper(nums, mid + 1, r, target);
    }
}

var search = function(nums, target) {
    let l = 0;
    let r = nums.length;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;
}


var test = [-1, 0, 3, 5, 9, 12];
var target = 2;