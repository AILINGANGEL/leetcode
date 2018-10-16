var findTheDifference = function(s, t) {
    let s1 = s.split('')
    s1.sort();
    let t1 = t.split('');
    t1.sort();
    let i = 0;
    while(i < s.length) {
        if(s1[i] === t1[i]) {
            i++;
        } else {
            return t1[i];
        }
    }
    return t1[i];
}; 
