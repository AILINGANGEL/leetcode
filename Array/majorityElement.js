var majorityElement = function(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
        if (map[nums[i]] > nums.length / 2) return nums[i]
    }
};

var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};

var majorityElement = function(nums) {
    let num = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === num) {
            count++;
        }else if (count === 0){
            num = nums[i];
            count = 1;
        } else {
            count--;
        }
    }
    return num;
};
