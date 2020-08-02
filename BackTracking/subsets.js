var subsets = function(nums) {
    if (nums.length === 0) return [];
    return helper(nums, nums.length - 1);
};

function helper(nums, index) {
    if (index === -1) {
        return [
            []
        ];
    }
    let tmp = helper(nums, index - 1);
    let ans = [];
    for (let i = 0; i < tmp.length; i++) {
        ans.push(tmp[i].slice());
        tmp[i].push(nums[index]);
        ans.push(tmp[i]);
    }
    return ans;
}

// 回溯
var subsets = function (nums) {
    let ans = [];
    backtrack(nums, [], ans);
    return ans;
};

var backtrack = function (nums, subset, subsets) {
    if (subset.length <= nums.length) {
        subsets.push(subset.map(item => item.value));
    }
    const lastItem = subset[subset.length - 1];
    const start = lastItem ? lastItem.pos : -1;
    for (let i = start + 1; i < nums.length; i++) {
        subset.push({ value: nums[i], pos: i });
        backtrack(nums, subset, subsets);
        subset.splice(subset.length - 1);
    }
}
