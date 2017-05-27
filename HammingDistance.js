/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var temp = x ^y;
    var dis = 0;
    while(temp/2>0){
        if(temp%2===1)
            dis +=1;
        temp = parseInt(temp/2);
    }
    return dis;
};
