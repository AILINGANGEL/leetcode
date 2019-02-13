function getNext(p) {
    let j = 0;
    let k = -1;
    let next = [];
    next[0] = -1;
    while (j < p.length - 1) {
        if (k == -1 || p[j] === p[k]) {
            if (p[++j] === p[++k]) {
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

function kmp(t, p) {
    let i = 0;
    let j = 0;
    let next = getNext(p);
    while (i < t.length && j < p.length) {
        if (j === -1 || t[i] === p[j]) {
            i++;
            j++;
        } else {
            j = next[j];
        }
    }
    if (j === p.length) {
        return i - j;
    } else {
        return -1;
    }
}

console.log(getNext('abab'))
console.log(kmp('abcabcabab', 'aba'));