var checkPossibility = function(nums) {
    var index = -1;
    for(let i = 0; i < nums.length - 1 ; i++) {
        if(nums[i] > nums[i + 1]) {
            if(index === -1) {
                index = i;
            } else {
                return false; // 说明有多个值大于后面的值
            }
        }
    }

    if(index === -1) {
        return true;
    }

    if(index === 0) {
        return true;
    }
    if(index === nums.length - 2) {
        return true;
    }


//[1,2,3,10, 8, 9]
    if(nums[index + 1] >= nums[index - 1]) {
        return true;
    }

    //[1,2,3,10, 2, 11]

    if(nums[index + 2] >= nums[index]) {
        return true;
    }

    return false;
};

