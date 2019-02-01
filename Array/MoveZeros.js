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


//方法4

var moveZeroes = function(nums) {
    let i = 0;
    let j = 0;
    while (i < nums.length) {
        if (nums[i] !== 0) {
            i++;
            continue;
        } else {
            j = i + 1;
            while (j < nums.length && nums[j] === 0) {
                j++;
            }
            if (j === nums.length) {
                break;
            }
            nums[i] = nums[j];
            nums[j] = 0;
            i++;
        }
    }
}


var moveZeroes = function(nums) {
    let i = 0;
    let j = 0;
    while(j < nums.length) {
        if(nums[j] !== 0) {
            nums[i++] = nums[j];
        }
        j++;
    }
    while(i < nums.length) {
        nums[i++] = 0; 
    }
};


var moveZeroes = function(nums) {
    let i = 0;
    let j = 1;
    while(j < nums.length) {
        if(nums[i] !== 0) {
            i++;
        }
        if(nums[j] !== 0) {
           swap(nums, i, j);
        }
        j++;
    }
};

let swap = function(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
