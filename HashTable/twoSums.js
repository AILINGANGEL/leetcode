// var twoSum = function(nums, target) {
//     var result = [];
//     for (var i = 0; i < nums.length - 1; i++) {
//         for (var j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 result = result.concat([i, j]);
//             }
//         }
//     }
//     return result;
// };



//[3, 3]
// nums = [2, 7, 11, 15], target = 9
var twoSum = function(nums, target) {
    var map = {};
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] !== undefined) {
            result.push(map[target - nums[i]]);
            result.push(i);
            break;
        }
        map[nums[i]] = i; //赋值操作放在对比的后面，避免[3, 3]这样的情况存在
    }
    return result;
}


var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        if(map[target - nums[i]] === undefined) {
            map[nums[i]] = i;
        } else {
            return [map[target - nums[i]], i];
        }
    }
    return [];
};