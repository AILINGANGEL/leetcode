 var singleNumber = function(nums) {
     var result = nums[0];
     if (nums.length > 2) {
         for (var i = 1; i < nums.length; i++) {
             result = result ^ nums[i];
         }
     }
     return result;
 };


 //还可以用高阶函数reduce
 var singleNumber = function(nums) {
     return nums.reduce((prev, cur) => prev ^ cur);
 };