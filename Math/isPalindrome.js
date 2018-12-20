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
