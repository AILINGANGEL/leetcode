var lengthOfLastWord = function(s) {
    let i = s.length-1;
    let len = 0;
    while(i > -1) {
        if(s[i] === ' ') {
            if(len === 0) {
                i--;
                continue;
            }
            break;
        }
        len++;
        i--;
    }
    return len;
};
