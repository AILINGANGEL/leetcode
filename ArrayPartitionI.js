//561
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  sum = 0
  nums = nums.sort(function compare(a,b){
    if(a < b){
        return -1
    }else if (a == b){
        return 0
    }else{
        return 1
    }
    })
  nums.forEach((num, i)=>{
      if (i % 2 ===0)
        sum += num
  })
  return sum
};
