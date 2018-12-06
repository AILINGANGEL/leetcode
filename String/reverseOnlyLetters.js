var reverseOnlyLetters = function(S) {
    let arr = S.split('');
    let i = 0;
    let j = arr.length - 1;
    while(i < j) {
        if(arr[i].match(/[a-zA-Z]/) && arr[j].match(/[a-zA-Z]/)) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
            continue;
        } 
        if (!arr[i].match(/[a-zA-Z]/)){
            i++;
        }
        if (!arr[j].match(/[a-zA-Z]/)){
            j--;
        }
    }
    return arr.join('');
};



// stack解法
var reverseOnlyLetters = function(S) {
    let arr = S.split('').filter(item=>item.match(/[a-zA-Z]/));
    let res = [];
    let i = 0;
    while(i<S.length) {
        if(S[i].match(/[a-zA-Z]/)){
            res.push(arr.pop());
        } else {
            res.push(S[i]);
        }
        i++;
    }
    return res.join('');
};
