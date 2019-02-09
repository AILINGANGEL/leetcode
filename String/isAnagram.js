// 排序解法
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    s = s.split('').sort();
    t = t.split('').sort();
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) return false;
    }
    return true;
};

//map解法
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    var map1 = {};
    var map2 = {};
    for (var i = 0; i < s.length; i++) {
        if (map1[s[i]] === undefined) {
            map1[s[i]] = 1;
        } else {
            map1[s[i]]++;
        }
        if (map2[t[i]] === undefined) {
            map2[t[i]] = 1;
        } else {
            map2[t[i]]++;
        }
    }
    for (var key in map1) {
        if (map2[key] !== map1[key]) return false;
    }
    return true;
};



var isAnagram = function(s, t) {
    let map = {};
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]] === undefined) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }
    for(let i = 0; i < t.length; i++) {
        if(map[t[i]] === undefined) {
            return false;
        } else if(map[t[i]] === 1){
            delete map[t[i]];
        } else {
            map[t[i]]--;
        }
    }
    return Object.keys(map).length === 0;
};

//leetcode解法，有效利用字符的code,和数组的下标
