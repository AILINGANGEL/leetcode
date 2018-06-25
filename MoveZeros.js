//全是0的时候依然有操作
var moveZeroes = function(nums) {
    var i = 0;
    var n = nums.length;
    while (i < n) {
        if (nums[i] === 0) {
            nums.push(0);
            nums.splice(i, 1);
            n--;
        } else {
            i++;
        }
    }
};


//全都不是0的时候依然有操作, i记录所有的非0
var moveZeroes = function(nums) {
    var i = 0;
    nums.forEach((num) => {
        if (num !== 0) {
            nums[i] = num;
            i++;
        }
    });
    if (i < nums.length) {
        while (i < nums.length) {
            nums[i] = 0;
            i++;
        }
    }
};

//方法3, 如果都不是0的时候还是有操作
var moveZeroes = function(nums) {
    var i = 0;
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            var temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            i++;
        }
    }
};