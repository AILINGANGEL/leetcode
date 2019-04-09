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

var myAtoi = function(str) {
    // 去除前后的空格
    str = str.trim();
    // 如果是非空字符串或者第一个字符不是数字或者符号直接返回0
    if(!str || !str[0].match(/[0-9+-]/))return 0;
    let isLessThan0 = false;
    let i = 0;
    let num = 0;
    
    let max = Math.pow(2, 31);
    if(str[0] === '-') isLessThan0 = true;
    
    // 如果第一个是正号或者符号就从下标为1的开始检测
    if(str[0] === '+' || str[0] === '-') i = 1;
    while(i < str.length) {
        if(str[i].match(/[0-9]/)){
            num = num * 10 + (+str[i]);
            i++;
            if(num > max - 1) {
                if(isLessThan0) {
                    return -max;
                }else {
                    return max - 1;
                }
            }
        } else {
            break;
        }
    }
    
    // +或者-后面没有数字了直接返回0
    if(num === 0) return num;
    if(isLessThan0) return -num;
    return num;
};

// 1.处理全是空格的情况
// 2.处理符号
// 3.处理溢出
// 4.处理非法的输入

var myAtoi = function(str) {
    // 去除前后的空格
    str = str.trim();
    // 如果是非空字符串或者第一个字符不是数字或者符号直接返回0
    if(!str || !str[0].match(/[0-9+-]/))return 0;
    let sign = 1;
    let i = 0;
    // 如果开头是负号，那么sign就是-1 否则 就是1
    if(str[0] === '-' || str[0] === '+') {
        sign = 1 - 2 * (str[0] === '-');
        i = 1;
    }
    let base = 0;
    let max = Math.pow(2, 31);
    let min = -Math.pow(2, 31)
    while(str[i] >='0' && str[i] <='9') {
        // 提前处理溢出问题
        if(base > Math.floor(max/10) || (base === Math.floor(max/10) && +str[i] > 7)) {
            if(sign === 1) {
                return max - 1;
            } else {
                return min;
            }
        }
        base = base * 10 + (+str[i]);
        i++;
    }
    return base * sign;
};