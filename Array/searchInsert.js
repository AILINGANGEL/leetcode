var searchInsert = function(nums, target) {
    var pos = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            pos = i;
            break;
        }
    }
    pos = i === nums.length ? nums.length : pos;
    return pos;
};

var searchInsert = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
        if(nums[i]>=target) {
            return i;
        }
    }
    return nums.length;
};
