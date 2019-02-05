var containsDuplicate = function(nums) {
    var map = {}
    for(var i=0; i<nums.length; i++) {
        if(map[nums[i]] == undefined) {
            map[nums[i]] = i;
        } else {
            return true;
        }
    }
    return false;
};


var containsDuplicate = function(nums) {
    nums.sort();
    for(var i=1; i<nums.length; i++) {
        if(nums[i]==nums[i-1]) {
            return true
        }
    }
    return false;
};


var containsDuplicate = function(nums) {
    return (new Set(nums)).size !== nums.length;
};
