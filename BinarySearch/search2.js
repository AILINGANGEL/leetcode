var search = function(nums, target) {
    if (nums.length === 0) return -1;
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        console.log(mid);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            if (nums[mid] < nums[mid + 1]) {
                if (nums[r] === target) {
                    return r;
                } else if (nums[r] > target) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            } else {
                if (nums[l] === target) {
                    return l;
                } else if (nums[l] < target) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        } else {
            if (nums[mid] < nums[mid + 1]) {
                if (nums[l] === target) {
                    return l;
                } else if (nums[l] < target) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            } else {
                if (nums[r] === target) {
                    return r;
                } else if (nums[r] > target) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        }
    }
    return nums[l] === target ? l : -1;
};

console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8))