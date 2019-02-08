var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let i = 0;
    while(i < nums.length) {
        let j = i + 1;
        while(j <= i + k && j < nums.length) {
            if(Math.abs(nums[i] - nums[j]) <= t) {
                return true;
            }
            j++;
        }
        i++;
    }
    return false;
};
