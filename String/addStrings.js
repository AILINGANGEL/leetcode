var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let result = [];
    let carry = 0;
    while(i > -1 && j > -1) {
        let temp =  Number(num1[i]) + Number(num2[j]) + carry;
        result.unshift(temp % 10);
        carry = Math.floor(temp / 10);
        i--;
        j--;
    }
    if (i === -1) {
        while(j > -1) {
            let temp = Number(num2[j]) + carry;
            result.unshift(temp % 10);
            carry = Math.floor(temp / 10);
            j--;
        }
    }
    
    if (j === -1) {
         while(i > -1) {
            let temp = Number(num1[i]) + carry;
            result.unshift(temp % 10);
            carry = Math.floor(temp / 10);
            i--;
        }
    }
    if (carry === 1) {
        result.unshift(1);
    }
    return result.join('');
};


console.log(addStrings('19', '111'));