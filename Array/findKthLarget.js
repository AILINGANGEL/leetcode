var findKthLargest = function(nums, k) {
    k = nums.length - k;
    let lo = 0;
    let hi = nums.length - 1;
    while(lo <= hi) {
        let p = partition(nums, lo, hi);
        if(p === k) {
            return nums[p];
        }
        if(p < k) {
            lo = p + 1;
        }
        if(p > k) {
            hi = p - 1;
        }
    }
};
var partition = function(nums, start, end) {
    let i = start - 1;
    let j = start;
    let pivot = nums[end];
    while(j < end ) {
        if(nums[j] < pivot) {
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        j++;
    }
    [nums[i+1], nums[end]] = [nums[end], nums[i+1]];
    return i + 1;
};
