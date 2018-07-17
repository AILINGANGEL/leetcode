var countAndSay = function(n) {
    var i = 1;
    var str = '1';
    while (i < n) {
        let j = 1;
        let temp = '';
        let num = 1;
        while (j < str.length) {
            if (str[j - 1] === str[j]) {
                num++;
            } else {
                temp += (num + str[j - 1]);
                num = 1;
            }
            j++;
        }
        str = temp + num + str[j - 1];
        i++;
    }
    return str;
};

