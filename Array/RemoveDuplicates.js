var removeDuplicates = function(nums) {
    var recordObj = {};
    for (let i = 0; i < nums.length;) {
        if (nums[i] in recordObj) {
            nums.splice(i, 1);
        } else {
            recordObj[nums[i]] = nums[i];
            i++;
        }
    }
    return nums.length;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length - 1;) {
        if (nums[i] == nums[i + 1]) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
};

//双指针解法
// var removeDuplicates = function(nums) {
//     var n = nums.length;
//     if (n < 2) return n;
//     var i = 0,
//         j = 1;
//     while (j < n) {
//         if (nums[j] != nums[i]) {
//             i++;
//             nums[i] = nums[j];
//         }
//         j++;
//     }
//     return i + 1;
// };

var removeDuplicates = function(nums) {
    let i = 0;
    let j = 1;
    while (j < nums.length) {
        if (nums[i] !== nums[j]) {
            nums[++i] = nums[j];
        }
        j++;
    }
    return i + 1;
};