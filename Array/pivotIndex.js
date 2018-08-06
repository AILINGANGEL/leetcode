var pivotIndex = function(nums) {
    if (nums.length === 0) return -1;
    if (nums.length === 1) return 0;
    var sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    var sumLeft = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > 0) sumLeft += nums[i - 1];
        if ((sum - nums[i]) / 2 === sumLeft) return i;
        sumLeft += nums[i];
    }
    return -1;
};


var pivotIndex = function(nums) {
    if (nums.length === 0) return -1;
    if (nums.length === 1) return 0;
    var sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    var sumLeft = 0;
    for (let i = 0; i < nums.length; i++) {
        if ((sum - nums[i]) / 2 === sumLeft) return i;
        sumLeft += nums[i];
    }
    return -1;
};


var pivotIndex = function(nums) {
    var sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    var sumRight = sum;
    var sumLeft = 0;
    for (let i = 0; i < nums.length; i++) {
        sumRight -= nums[i];
        if (sumRight === sumLeft) return i;
        sumLeft += nums[i];
    }
    return -1;
}


// nums = [1, 7, 3, 6, 5, 6]
// index = 3
