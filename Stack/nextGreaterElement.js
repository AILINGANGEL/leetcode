var nextGreaterElement = function(findNums, nums) {
    let res = [];
    let i = 0;
    while (i < findNums.length) {
        let j = nums.indexOf(findNums[i]) + 1;
        while (j < nums.length) {
            if (nums[j] > findNums[i]) {
                res.push(nums[j]);
                break;
            }
            j++;
        }
        if (j === nums.length) {
            res.push(-1);
        }
        i++;
    }
    return res;
};


// 栈的解法
var nextGreaterElement = function(findNums, nums) {
    let stack = [];
    let map = {};
    nums.forEach(num => {
        if (stack.length === 0) {
            stack.push(num);
        } else {
            while (stack[stack.length - 1] < num) {
                map[stack.pop()] = num;
            }
            stack.push(num);
        }
    });
    let res = [];
    findNums.forEach(num => {
        res.push(map[num] || -1);
    })
    return res;
};