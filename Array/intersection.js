var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let ans = [];
    for (let num of set1) {
        if (set2.has(num)) {
            ans.push(num)
        }
    }
    return ans;
};