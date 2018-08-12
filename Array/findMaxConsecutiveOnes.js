var findMaxConsecutiveOnes = function(nums) {
    let result = 0;
    let num = 0;
    let i = 0;
    while(i < nums.length) {
        if (nums[i] == 1) {
            num += 1;
        } else {
            result = result > num ? result : num;
            num = 0;
        }
        i++;
    }
    result = result > num ? result : num;
    return result;
};


// 双指针
var findMaxConsecutiveOnes = function(nums) {
    let result = 0;
    let i = 0;
    while(i < nums.length) {
        let j = i;
        let num = 0;
        while( j < nums.length && nums[j] === 1) {
            num += 1;
            j++;
        }
        result = result > num ? result : num;
        i = j;
        i++;
    }
    return result;
};
