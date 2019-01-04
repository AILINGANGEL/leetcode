var findContentChildren = function(g, s) {
    g.sort(function(a, b) { return a - b });
    s.sort(function(a, b) { return a - b });
    let res = 0;
    let i = 0;
    let j = 0;
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            res++;
            i++;
        }
        j++;
    }
    return res;
};

var greedy = [10, 9, 8, 7]
var cookie = [5, 6, 7, 8]

console.log(findContentChildren(greedy, cookie));