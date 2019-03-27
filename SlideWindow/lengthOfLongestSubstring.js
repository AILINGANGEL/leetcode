var lengthOfLongestSubstring = function(s) {
    let container = new Set();
    let i = 0;
    let j = 0;
    let maxLen = 0;
    while (j < s.length) {
        if (!container.has(s[j])) {
            container.add(s[j]);
            j++;
            maxLen = Math.max(maxLen, j - i);
        } else {
            container.delete(s[i]);
            i++;
        }

    }
    return maxLen;
};

var lengthOfLongestSubstring = function(s) {
    let container = {};
    let i = 0;
    let j = 0;
    let maxLen = 0;
    while (j < s.length) {
        if (s[j] in container) {
            i = Math.max(container[s[j]] + 1, i);
        }
        maxLen = Math.max(maxLen, j - i + 1);
        container[s[j]] = j;
        j++;
    }
    return maxLen;
};