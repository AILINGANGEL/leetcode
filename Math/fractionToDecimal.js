var fractionToDecimal = function(numerator, denominator) {
    // 处理符号
    let sign = '';
    if ((numerator / denominator) < 0) {
        sign = '-';
    }
    // 处理整除
    let { d, f } = getDivision(numerator, denominator);
    if (f === 0) {
        return sign + d;
    }
    // 处理小数
    let franctions = [];
    let numeratorMap = {};
    let pos = -1;
    while (f > 0) {
        f *= 10;
        if (f in numeratorMap) {
            pos = numeratorMap[f];
            break;
        }
        let { d: tmp1, f: tmp2 } = getDivision(f, denominator);
        franctions.push(tmp1);
        numeratorMap[f] = franctions.length - 1;
        f = tmp2;
    }

    // 处理非循环小数
    if (f === 0) {
        return sign + d + '.' + franctions.join('');
    }

    // 处理循环小数
    let fractionStr = '';
    for (let i = 0; i < franctions.length; i++) {
        let charact = '';
        if (i === pos) {
            charact = '(';
        }
        fractionStr = fractionStr + charact + franctions[i];
    }
    return sign + d + '.' + fractionStr + ')';
};

function getDivision(numerator, denominator) {
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    let d = Math.floor(numerator / denominator);
    let f = numerator % denominator;
    return {
        d,
        f
    }
}

console.log(fractionToDecimal(10, -2))