var search = function(nums, target) {
    let n = nums.length;
    let lo = 0;
    let hi = n - 1;

    //找到最小值的位置，这个就是向后移动的距离
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (nums[mid] > nums[hi]) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }

    let rot = lo;
    lo = 0;
    hi = n - 1;
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        let realmid = (mid + rot) % n;
        if (nums[realmid] == target) return realmid;
        if (nums[realmid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
};
console.log(search([1, 3], 1))