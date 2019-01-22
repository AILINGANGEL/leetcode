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


var majorityElement = function(nums) {
    let number = nums[0];
    let cnt = 1;
    for(let i = 1; i<nums.length; i++) {
        if(nums[i] === number) {
            cnt++;
        } else {
            cnt--;
            if(cnt === 0) {
                number = nums[i];
                cnt = 1;
            }
        }
    }
    return number;
};
