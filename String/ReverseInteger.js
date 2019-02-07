/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//     var limit = Math.pow(2, 31);
//     var result;
//     if (x < 0) {
//        result = - String(-x).split('').reverse('').join('')
//     } else {
//        result =  + String(x).split('').reverse('').join('');
//     }
//     return result > limit || result < -limit ? 0: result;
// };

var reverse = function(x) {
    var limit = Math.pow(2, 31);
    var result = 0;
    while(x != 0) {
        let mod = x % 10;
        result = result * 10 + mod;
        if (result > limit || result < -limit) return 0
        x = x >= 0 ? Math.floor(x/10) : Math.ceil(x/10);//注意这里取正，如果是负数用Math.floor向下取正不会得到想要的结果, 比如-12.3得到的结果是-13而不是-12
    }
    return result;
}

var reverse = function(x) {
    let isNegative = x < 0;
    x = Math.abs(x);
    let num = 0;
    let limit = Math.pow(2, 31);
    while(x) {
        num = num * 10 + x % 10;
        if(num > limit - 1 || num < -limit) return 0;
        x = Math.floor(x/10);
    }
    return isNegative ? -num : num;
}
