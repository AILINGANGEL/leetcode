var containsNearbyDuplicate = function(nums, k) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]] === undefined) {
            map[nums[i]] = i;
        } else {
            if( i - map[nums[i]] <=k ) {
                return true;
            } else {
                map[nums[i]] = i;
            }
        }
    }
    return false;
};


var containsNearbyDuplicate = function(nums, k) {
    let i = 0;
    while(i < nums.length) {
        let j = i + 1;
        while(j <= i + k && j < nums.length ) {
            if(nums[i] === nums[j]) {
                return true;
            }
            j++;
        }
        i++;
    }
    return false;
};


var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(i>k) set.delete(nums[i-k-1]);
        if(set.has(nums[i])) {
            return true;
        } else {
            set.add(nums[i]);
        }
    }
    return false;
};
