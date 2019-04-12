var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }

    var common = strs[0];
    var i = 1;
    while (i < strs.length) {
        let j = 0;
        let tempCommon = '';
        while (j < common.length && j < strs[i].length) {
            if (common[j] === strs[i][j]) {
                tempCommon += common[j];
                j++;
            } else {
                break;
            }
        }
        if (tempCommon) {
            common = tempCommon;
            i++;
        } else {
            return '';
        }
    }
    return common;
};

var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    if(strs.length === 1) return strs[0];
    let prefix = commonPrefix(strs[0], strs[1]);
    if(!prefix) return '';
    let i = 2;
    while(i < strs.length) {
        prefix = commonPrefix(prefix, strs[i]);
        if(!prefix) return '';
        i++;
    }
    return prefix;
};

var commonPrefix = function(str1, str2) {
    let prefix = '';
    let i = 0;
    let j = 0;
    while(i < str1.length && j < str2.length) {
        if(str1[i] === str2[j]) {
            prefix += str1[i];
            i++;
            j++;
        } else {
            break;
        }
    }
    return prefix;
}