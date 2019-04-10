var strStr = function(haystack, needle) {
    if(!needle) return 0;
    let i = 0;
    let j = 0;
    let next = getNext(needle);
    while(i<haystack.length && j<needle.length) {
        if(j === -1 || haystack[i] === needle[j]) {
            i++;
            j++;
        } else {
            j = next[j];
        }
    }
    if(j === needle.length) {
        return i - j;
    }
    return -1;
};

function getNext(p) {
    let next = [];
    next[0] = -1;
    let j = 0;
    let k = -1;
    while(j < p.length) {
        if(k === -1 || p[j] === p[k]) {
            if(p[++j] === p[++k]) {
                next[j] = next[k];
            } else {
                next[j] = k;
            }
        } else {
            k = next[k];
        }
    }
    return next;
}