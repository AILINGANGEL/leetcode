// var res;
// var permute = function(nums) {
//     res = [];
//     helper(nums, res);
//     return res;
// };

// var helper = function(nums, arr) {
//     if (nums.length > 0) {
//         let cur = nums[0];
//         if (arr.length === 0) {
//             arr.push([cur]);
//         } else {
//             let arrCopy = arr.slice();
//             arr.splice(0);
//             arrCopy.forEach(item => {
//                 for (let i = item.length; i > -1; i--) {
//                     let temp = item.slice();
//                     temp.splice(i, 0, cur);
//                     arr.push(temp);
//                 }
//             });
//         }
//         helper(nums.slice(1), arr);
//     }
// }



var permute = function(nums) {
    let res = [];
    helper(nums, 0, [], res);
    return res;
}

var helper = function(nums, start, permutation, permutations) {
    if (start === nums.length) {
        permutations.push(permutation);
    } else {
        for (let i = 0; i < permutation.length + 1; i++) {
            let newPermuation = permutation.slice();
            newPermuation.splice(i, 0, nums[start]);
            helper(nums, start + 1, newPermuation, permutations);
        }
    }
}

var test = [1, 2, 3];
console.log(permute(test));