var res;
var permute = function(nums) {
    res = [];
    helper(nums, res);
    return res;
};

var helper = function(nums, arr) {
    if (nums.length > 0) {
        let cur = nums[0];
        if (arr.length === 0) {
            arr.push([cur]);
        } else {
            let arrCopy = arr.slice();
            arr.splice(0);
            arrCopy.forEach(item => {
                for (let i = item.length; i > -1; i--) {
                    let temp = item.slice();
                    temp.splice(i, 0, cur);
                    arr.push(temp);
                }
            });
        }
        helper(nums.slice(1), arr);
    }
}
