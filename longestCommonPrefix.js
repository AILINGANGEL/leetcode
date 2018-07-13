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
