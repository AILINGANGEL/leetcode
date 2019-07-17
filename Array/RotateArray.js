var rotate = function(nums, k) {
    let i = 0,
        length = nums.length; //原始数组的长度
    while (i < length && i - k < 0) { //如果i - k >= 0表示所有的已经改动过位置了, i < length的检查是必要的,避免k>length的情况
        let val = nums[i];
        let targetPos = i + k;
        let desVal = nums[targetPos];
        while (desVal != undefined) { //一定要用undefined来判断，如果数字是0也会被判定为false
            nums[targetPos] = val;
            val = desVal;
            targetPos = targetPos + k;
            desVal = nums[targetPos];
        }
        nums[targetPos] = val;
        i++;
    }
    let j = k;
    for (j = k; j < nums.length; j++) { //将数字放到正确的位置上
        nums[j % length] = nums[j];
    }
    nums.splice(length, nums.length - length); //截断不需要的数字
};

var rotate = function(nums, k) {
    let tmp = nums.splice(nums.length - k, k);
    nums.unshift(...tmp)
};