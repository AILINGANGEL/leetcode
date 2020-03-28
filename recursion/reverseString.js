var reverseString = function(s) {
    helper(s, 0, s.length - 1);
};

var helper = function(s, start, end) {
    if(start < end) {
        const tmp = s[end];
        s[end] = s[start];
        s[start] = tmp;
        helper(s, start+1, end-1);
    }
}
