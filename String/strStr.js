var strStr = function(haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }

    if (haystack.length < needle.length) {
        return -1;
    }

    var needleLen = needle.length;
    var i = 0;
    var j = 0;
    while (i < haystack.length && j < needleLen) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
        } else {
            i = i - j + 1;
            j = 0;
        }
    }
    if (j === needleLen) {
        return i - j;
    }
    return -1;
};

console.log(strStr('hello word', 'llow'));
