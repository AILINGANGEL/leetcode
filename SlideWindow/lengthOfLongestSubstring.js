
// 暴力法
var allUniqueCharactor = function(s, start, end) {
    let tmp = new Set();
    for(let i = start; i <= end; i++) {
        if(tmp.has(s[i])){
            return false;
        } else {
            tmp.add(s[i]);
        }
    }
    return true;
}

var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    for(let i = 0; i < s.length; i++) {
       for(let j = i; j < s.length; j++){
         if(allUniqueCharactor(s, i, j)){
            ans = Math.max(ans, j - i + 1);
         }
       }
    }
    return ans;
};

// 滑动窗口
var lengthOfLongestSubstring = function(s){
    let map = {};
    let i = 0, j = 0;
    let maxLen = 0;
    while(j < s.length){
        if(s[j] in map) {
            // i = map[s[j]] + 1;
            i = Math.max(map[s[j]] + 1, i); // 'abba'
        }
        maxLen = Math.max(maxLen, j - i + 1); // 'a'
        map[s[j]] = j;
        j++;
    }
    return maxLen;
}

// 滑动窗口

var lengthOfLongestSubstring = function(s){
    let set = new Set();
    let i = 0, j = 0;
    let maxLen = 0;
    while(j < s.length){
       if(set.has(s[j])) {
           set.delete(s[i++]);
       } else {
           maxLen = Math.max(maxLen, j - i + 1);
           set.add(s[j]);
           j++;
       }
    }
    return maxLen;
}

console.log(lengthOfLongestSubstring('abba'))
console.log(lengthOfLongestSubstring('aaaa'))
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('a'))
