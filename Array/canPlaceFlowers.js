var canPlaceFlowers = function(flowerbed, n) {
    if(n === 0) return true;
    if(flowerbed.length === 0) return false;
    let j = flowerbed[0] === 1 ? -1 : 0;
    let i = 0;
    let maxN = 0;
    while(i < flowerbed.length) {
        if(flowerbed[i] === 1) {
            maxN += Math.ceil((i-1-j)/2);
            i += 2;
            j = i; 
        } else {
            i++;
        }
    }
    maxN += Math.ceil((i-j)/2);
    return maxN >= n;
};
