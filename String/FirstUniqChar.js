var firstUniqChar = function(s) {
    var map = {};
    for (var i = 0; i <  s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }
    for (var j = 0; j< s.length; j++) {
        if (map[s[j]] === 1) return j;
    }
    return -1;
};

var firstUniqChar = function(s) {
   let map = {};
    for(let i=0; i<s.length; i++){
        if(map[s[i]] === undefined) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }
    for(let i=0; i<s.length; i++) {
        if(map[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};
