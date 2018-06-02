var removeDuplicates = function(nums) {
    var recordObj = {};
    for(let i=0; i<nums.length;) {
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
    for(let i=0; i<nums.length -1;) {
       if (nums[i] == nums[i+1]) {
           nums.splice(i, 1);
       } else {
           i++;
       }
    }
    return nums.length;
};
