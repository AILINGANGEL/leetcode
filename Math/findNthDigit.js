// var findNthDigit = function(n) {
//   let word = '1';
//   let num = 2;
//   while(word.length < n) {
//     word += num;
//     num++;
//   }
//   return +word[n-1];
// };

// console.log(findNthDigit(100000000))

var findNthDigit = function(n) {
    // 找出n在几位数的区间

    let nDigit = 1; // 多少位数, 1位, 2位
    let startNum = 1; // 每个区间开始的数, 1, 10, 100
    let endNum = 9;// 每个区间的最后一个数, 9, 99, 999
    let start = 1; // 每个区间digits的开始边界, 1, 10, 190....
    let end = 9; // 每个区间的digits结束边界, 9, 10 + (99-10+1) *2 - 1 = 189
    while(end < n){
        nDigit++;
        startNum = endNum + 1;
        endNum = Math.pow(10, nDigit) - 1;
        start = end + 1;
        end = (endNum - startNum + 1) * nDigit + start - 1;
    }

    let target = startNum + Math.floor((n - start) / nDigit);
    // return String(target)[(n-start)%nDigit];
    return helper(target, nDigit - (n - start) % nDigit);
};

// 在数num中从末尾开始的第n个数字, n从1开始
// 比如在一个5位数12345中,找到第2位的数位5
var helper = function(num, n){
    let i = 1;
    while(i < n) {
        num = Math.floor(num / 10);
        i++;
    }
    return num % 10;
};

console.log(findNthDigit(20))
