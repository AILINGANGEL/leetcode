var twoSum = function(nums, target) {
    var result = [];
    for (var i = 0; i<nums.length -1 ; i++) {
        for (var j=i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                result = result.concat([i, j]);
            }
        }
    }
    return result;
};


var twoSum = function(nums, target) {
    var map = {};
    var result = [];
    nums.forEach((num, index)=>{
        map[num] = index; //把每个元素和对应的下标放到对象中

        //如果存在另一个元素,并且另一个元素的下标和当前元素的下标不是一个，则表明找到了这样的数,主要是处理[3,3] 和 6这种情况
        if (map[target-num] !== undefined && map[target-num] !== index) {
            result.push(index);
            result.push(map[target-num]);
        }
    });
    return result;
}
