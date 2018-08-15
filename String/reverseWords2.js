var reverseWords = function(str) {
    return str.split(' ').filter(Boolean).reverse().join(' ');
};

var reverseWords = function(str) {
    let strArr = str.trim().split(' ');
    let i = 0;
    let j = strArr.length - 1;
    while(i < j) {
        if (strArr[i] && strArr[j]) {
            let temp = strArr[i];
            strArr[i] = strArr[j];
            strArr[j] = temp;
            i++;
            j--;
        }
        if (!strArr[i]) {
            i++;
        }
        if (!strArr[j]) {
            j--;
        }
    }
    let result = '';
    strArr.forEach(str=>{
        if (result) {
            result = str ? result + ' ' + str : result;
        } else {
            result = str;
        }
    })
    return result;
};
