var findPeakElement = function(nums) {
    let i = 0;
    while(i < nums.length - 1 && nums[i] < nums[i+1]) {
        i++;
    }
    return i;
}


var findPeakElement = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    while(i < j) {
        let mid = i + Math.floor((j - i) /2);
        if(nums[mid] < nums[mid+1]) {
            i = mid + 1;
        } else {
            j = mid;
        }
    }
    return i;
}

var findPeakElement = function(nums) {
}

var helper = function(nums, i, j ) {
    
}