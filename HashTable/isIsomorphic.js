var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    let map = {};
    let i = 0;
    while(i < s.length) {
        if(map[s[i]] === undefined) {
            if(Object.values(map).indexOf(t[i]) === -1) {
                map[s[i]] = t[i];
            } else {
                return false;
            }
        } else {
            if(map[s[i]] !== t[i]) {
                return false;
            }
        }
        i++;
    }
    return true;
};
