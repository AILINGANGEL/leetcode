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

var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let set = new Set();
    for(let i = 0; i<nums.length; i++) {
        if(i > k) set.delete(nums[i-k-1]);
        for(let value of set) {
            if(Math.abs(nums[i] - value) <= t) {
                return true;
            }
        }
        set.add(nums[i]);
    }
    return false;
};
