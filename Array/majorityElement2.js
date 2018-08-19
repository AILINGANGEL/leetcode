var majorityElement = function(nums) {
    if (nums.length === 0) return [];
    if (nums.length === 1) return nums;
    let candidate1 = nums[0];
    let candidate2 = nums[1];
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === candidate1) {
            count1++;
        } else if (nums[i] === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = nums[i];
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = nums[i];
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    let threshhold = Math.floor(nums.length / 3);
    let result = [];
    let c1 = 0;
    let c2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === candidate1) {
            c1++;
        }
        if (nums[i] === candidate2) {
            c2++;
        }
    }
    if (candidate1 !== candidate2) {
        // console.log(threshhold);
        if (c1 > threshhold) {
            result.push(candidate1);
        }
        if (c2 > threshhold) {
            result.push(candidate2);
        }
    } else {
        if (c1 > threshhold) {
            result.push(candidate1);
        }
    }
    return result;
};