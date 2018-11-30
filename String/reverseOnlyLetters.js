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
