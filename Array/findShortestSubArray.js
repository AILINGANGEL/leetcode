var findShortestSubArray = function(nums) {
    let temp = {};
    for (let i = 0; i < nums.length; i++) {
        if (temp[nums[i]] === undefined) {
            temp[nums[i]] = [1, i, i];
        } else {
            let [num] = temp[nums[i]];
            temp[nums[i]][0] = num + 1;
            temp[nums[i]][2] = i;
        }
    }
    let degree;
    let minLen = 0;
    for (let key in temp) {
        let item = temp[key];
        if (degree == undefined) {
            degree = item[0];
            minLen = item[2] - item[1] + 1;
        } else if (item[0] === degree) {
            degree = item[0];
            minLen = Math.min(minLen, item[2] - item[1] + 1);
        } else if (item[0] > degree) {
            degree = item[0];
            minLen = item[2] - item[1] + 1;
        }
    }
    return minLen;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]))