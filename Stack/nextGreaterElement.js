var nextGreaterElement = function(findNums, nums) {
    let res = [];
    let i = 0;
    while(i < findNums.length) {
        let j = nums.indexOf(findNums[i]) + 1;
        while(j < nums.length) {
            if(nums[j] > findNums[i]) {
                res.push(nums[j]);
                break;
            }
            j++;
        }
        if(j === nums.length) {
            res.push(-1);
        }
        i++;
    }
    return res;
};
