var removeElement = function(nums, val) {
    var n = 0, length = nums.length, i=0;
    while (i<nums.length){
        if (nums[i] == val) {
            nums.splice(i, 1);
            n++;
        } else {
            i++;
        }
    }
    return length - n;
};


// 使用双指针法来删除数组中某个元素
var removeElement = function(nums, val) {
    let i = 0;
    let k = 0;
    while(i<nums.length) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
        i++;
    }
    return k;
};
