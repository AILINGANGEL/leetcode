var reverseString = function(s) {
    return s.split('').reverse().join('');
};

var reverseString = function(s) {
    var result = '';
    for (var i = s.length - 1; i > -1; i--) {
        result += s[i];
    }
    return result;
};


//双指针法,注意js中不能通过下标直接修改字符串对应index的值
var reverseString = function(s) {
    s = s.split('');
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        let temp = s[j];
        s[j] = s[i];
        s[i] = temp;
        i++;
        j--;
    }
    return s.join('');
};