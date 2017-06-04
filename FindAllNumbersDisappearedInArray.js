var findDisappearedNumbers = function(nums) {
    var i = 0, result=[];
    while(i<nums.length){
        while(nums[i]!==(i+1) && nums[nums[i]-1]!==nums[i]){
            let temp = nums[nums[i]-1]
            nums[nums[i]-1] = nums[i]
            nums[i] = temp
        }
        i++
    }
    for(let i = 0; i< nums.length; i++){
        if(nums[i]!==i+1){
            result.push(i+1)
        }
    }
    return result
};
