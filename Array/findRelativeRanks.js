 var findRelativeRanks = function(nums) {
     let sortedArray = [...nums].sort((a, b) => b - a);
     let map = {};
     for (let i = 0; i < sortedArray.length; i++) {
         if (i === 0) {
             map[sortedArray[i]] = 'Gold Medal';
         } else if (i === 1) {
             map[sortedArray[i]] = 'Silver Medal';
         } else if (i === 2) {
             map[sortedArray[i]] = 'Bronze Medal';
         } else {
             map[sortedArray[i]] = String(i + 1);
         }
     }
     let ans = [];
     for (let i = 0; i < nums.length; i++) {
         ans.push(map[nums[i]]);
     }
     return ans;
 };

 console.log(findRelativeRanks([10, 3, 8, 9, 4]))