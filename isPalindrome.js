var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    if (x < 10) {
        return true;
    }
    return x.toString().split('').reverse().join('') == x.toString();
};