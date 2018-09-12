var containsNearbyDuplicate = function(nums, k) {
    let i = 0;
    let map = {};
    while (i < nums.length) {
        let num = nums[i];
        if (map[num] === undefined) {
            map[num] = i;
        } else {
            if (i - map[num] <= k)
                return true;
            else
                map[num] = i;
        }
        i++;
    }
    return false;
};

console.log(containsNearbyDuplicate([99, 2, 3, 99, 99], 2));