var majorityElement = function(nums) {
    let count = 0;
    let num;
    for(let i=0; i<nums.length; i++){
        if(count === 0){
            num = nums[i];
            count = 1;
        } else if (num === nums[i]){
            count++;
        } else {
            count--;
        }
    }
    return num;
};
