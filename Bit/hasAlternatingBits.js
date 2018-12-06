var hasAlternatingBits = function(n) {
    let lastBits = undefined;
    while(n !== 0) {
        let mod = n % 2;
        if(mod === lastBits) {
            return false;
        } else {
            lastBits = mod;
            n = Math.floor(n/2);
        }
    }
    return true;
};
