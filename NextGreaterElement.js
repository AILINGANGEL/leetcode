var nextGreaterElement = function(findNums, nums) {
    var result = []
    for(var i=0; i< findNums.length; i++){
        var pos = -1
        var rightMax = -1
        for (var j=0; j< nums.length; j++){
            if(nums[j]=== findNums[i]){
                pos = j
            }
            if(pos != -1 && nums[j]>findNums[i]){
                rightMax = nums[j]
                break
            }
        }
        result.push(rightMax)
    }
    return result
};
