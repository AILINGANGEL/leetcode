var removeElement = function(nums, val) {
    let i = -1;
    let j = 0;
    while (j < nums.length) {
        if (nums[j] !== val) {
            nums[++i] = nums[j];
        }
        j++;
    }
    return i + 1;
};

var test = [3, 2, 2, 3];
var val = 3;

var res = removeElement(test, val);
console.log(test);

console.log(res);