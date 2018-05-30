var missingNumber = function(nums) {
    var n = nums.length;
    var sum = 0, rightSum = n * (n + 1) / 2;
    nums.forEach((num)=>{
        sum += num;    
    });
    return rightSum - sum;
};
