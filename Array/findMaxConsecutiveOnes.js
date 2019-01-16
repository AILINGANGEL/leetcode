var findMaxConsecutiveOnes = function(nums) {
    let i = 0;
    let res = 0;
    let tmp = 0;
    while(i < nums.length) {
        if(nums[i] === 1) {
            tmp++;
        } else {
            res = Math.max(res, tmp);
            tmp = 0;
        }
        i++;
    }
    return Math.max(res, tmp);
};
