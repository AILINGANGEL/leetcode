// var findPeakElement = function(nums) {
//     let i = 0;
//     while (i < nums.length - 1 && nums[i] < nums[i + 1]) {
//         i++;
//     }
//     return i;
// }

// var findPeakElement = function(nums) {
//     let i = 0;
//     let j = nums.length - 1;
//     while (i < j) {
//         let mid = i + Math.floor((j - i) / 2);
//         if (nums[mid] < nums[mid + 1]) {
//             i = mid + 1;
//         } else {
//             j = mid;
//         }
//     }
//     return i;
// }

var findPeakElement = function(nums) {
    return helper(nums, 0, nums.length - 1);
}

var helper = function(nums, i, j) {
    if (i < j) {
        let mid = Math.floor((i + j) / 2);
        if (nums[mid] < nums[mid + 1]) {
            return helper(nums, mid + 1, j);
        } else {
            return helper(nums, i, mid);
        }
    } else {
        return i;
    }
}

var nums = [1, 2, 3]

console.log(findPeakElement(nums))