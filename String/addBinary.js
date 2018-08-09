var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let result = '';
    let tmp = 0;
    while (i > -1 && j > -1) {
        let sum = Number(a[i]) + Number(b[j]) + tmp;
        if (sum > 1) {
            result = sum % 2 + result;
            tmp = 1;
        } else {
            tmp = 0;
            result = sum + result;
        }
        i--;
        j--;
    }

    if (i !== -1) {
        while (i > -1) {
            let sum = Number(a[i]) + tmp;
            if (sum > 1) {
                result = sum % 2 + result
                tmp = 1;
            } else {
                tmp = 0;
                result = sum + result;
            }
            i--;
        }
    }
    if (j !== -1) {
        while (j > -1) {
            let sum = Number(b[j]) + tmp;
            if (sum > 1) {
                result = sum % 2 + result
                tmp = 1;
            } else {
                tmp = 0;
                result = sum + result;
            }
            j--;
        }
    }
    if (tmp ===1) result = 1 + result;
    return result;
};
