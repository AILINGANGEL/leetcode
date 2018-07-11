var myAtoi = function(str) {
    const max = Math.pow(2, 31) - 1;
    const min = -Math.pow(2, 31);
    var result='';
    for(let i=0; i<str.length; i++) {
        if (!result && str[i] === ' ') {
            continue;
        } else if (!result && (str[i] === '-' || str[i] === '+')) {
            result = str[i];
        } else if (!/[0-9]/.test(str[i])){
            break;
        } else {
            result += str[i];
        }
    }
    
        let temp = Number(result);
        if (temp !== temp) {
            return 0;
        } else if (temp > max) {
            return max;
        } else if (temp < min) {
            return min;
        } else {
            return temp;
        }

};


// leetcode解法
var myAtoi = function(str) {
    return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
};