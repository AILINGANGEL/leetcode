var missingNumber = function(nums) {
    var n = nums.length;
    var sum = 0, rightSum = n * (n + 1) / 2;
    nums.forEach((num)=>{
        sum += num;    
    });
    return rightSum - sum;
};

var missingNumber = function(nums) {
    var xor = 0;
    nums.forEach((item, index)=>{
        xor = xor ^ item ^ index;
    });
    return xor ^ nums.length;
};