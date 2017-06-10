/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
        let temp = []
        for(let i = 0; i<nums.length; i++){
            temp.push(nums[i])
        }
        temp.sort(function(a,b){return a-b})
        let result = []
        for(let j = 0; j<nums.length; j++){
            let index = temp.indexOf(nums[j])
            if(index === nums.length-1){
                result.push("Gold Medal")
            }else if(index === nums.length-2){
                result.push("Silver Medal")
            }else if(index === nums.length-3){
                result.push("Bronze Medal")
            }else{
                result.push((nums.length-index).toString())
            }
        }
    return result 
};
