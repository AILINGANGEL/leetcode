var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x < 10) return true;
    let nums = [];
    while(x !== 0) {
        nums.push(x % 10);
        x = Math.floor(x/10);
    }
    return nums.join('') === nums.reverse().join('');  
};


var isPalindrome = function(x) {
    if(x < 0 || (x !== 0 && x % 10 === 0)) return false;
    let half = 0;
    while(x > half) {
        half = half * 10 + x % 10;
        x = Math.floor(x/10);
    }
    return x === half || x === Math.floor(half/10);
};

var isPalindrome = function(x) {
    if(x === 0) return true;
    if(x < 0 || x % 10 === 0) return false;
    let tmp = x;
    let newNum = 0;
    while(tmp){
        newNum = newNum * 10 + tmp%10;
        tmp = Math.floor(tmp/10);
    }
    return x === newNum;
};
