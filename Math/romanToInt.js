var romanToInt = function(s) {
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let res = 0;
    let subtract = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];
    for (var i = 0; i < s.length - 1;) {
        if (subtract.indexOf(s[i] + s[i + 1]) > -1) {
            res += (map[s[i + 1]] - map[s[i]]);
            i += 2;
        } else {
            res += map[s[i]];
            i++;
        }
    }
    if (i === s.length - 1) {
        res += map[s[i]];
    }
    return res;
};

console.log(romanToInt("LVIII"))