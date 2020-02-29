var multiply = function(A, B) {
    return helper(A, B, 0);
};
var helper = function(A, B, SUM) {
    if(B === 0) {
        return SUM;
    }
    return helper(A, B - 1, A + SUM);
}




var multiply = function(A, B) {
    if(B === 0) {
        return 0;
    }
    if(B === 1) {
        return A;
    }
    return multiply(A, B - 1) + A;
};
