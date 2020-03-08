/**
 * 如果一次跳一步，那么就有f(n-1)种方法
 * 如果一次跳两步，那么就有f(n-2)种方法
 */
var climbStairs = function(n) {
    if(n < 3) return n;
    return climbStairs(n - 1) + climbStairs(n - 2); 
};
/**
 * 有重复计算的问题, f(n-1)包含了f(n-2)的结果。使用一个临时变量来记录之前计算的结果
 */
var map = new Map();
var climbStairs = function(n) {
    if(n < 3) return n;
    if(map.get(n))
    var resN = map.get(n);
    if(resN !== undefined) {
        return resN;
    }
    resN = climbStairs(n - 1) + climbStairs(n - 2);
    map.set(n, resN);
    return resN;
};
/**
 * 自上到下的思路
 * - 根据函数参数与中间变量重新计算出新的中间变量
 * f(i) = f(i-1) + f(i-2) = a + b
 * f(i+1) = f(i) + f(i-1) = (a+b) + b
 */

 var climbStairs = function(n) {
    if(n < 3) {
        return n;
    }
    return climbStairsHelper(n, 1, 2);
 }

 var climbStairsHelper = function(n, a, b) {
    if(n === 2) {
        return b;
    }
    return climbStairsHelper(n - 1, b, a + b);
 }

/**
 * 循环
 */

 var climbStairs = function(n){
     if(n < 3) {
         return n;
     }
     let a = 1;
     let b = 2;
     while(n > 2) {
        [a, b] = [b, a + b];
        n--;
     }
     return b;
 }

 /**
  * 动态规划, 当前问题的最优解可以由子问题的最优解得到
  */
  var climbStairs = function(n) {
      let ans = [];
      ans[1] = 1;
      ans[2] = 2;
      for(let i = 3; i <=n; i++) {
          ans[i] = ans[i - 1] + ans[i - 2];
      }
      return ans[n];
  }