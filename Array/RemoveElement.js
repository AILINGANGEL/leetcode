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
