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