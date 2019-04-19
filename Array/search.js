var search = function(nums, target) {
    // 找出在哪个点开始旋转的,进而得到旋转的长度
    let len = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            len = i + 1;
        }
    }
    // 二分查找
    let i = len;
    let j = nums.length + len;
    while (i < j) {
        // 找到mid位置对应的真实值的下标
        let mid = Math.floor((i + j) / 2);
        let midIndex = mid % nums.length;
        let midVal = nums[midIndex];
        if (target === midVal) {
            return midIndex
        }
        if (target < midVal) {
            j = mid;
        } else {
            i = mid + 1;
        }
    }
    return -1;
};