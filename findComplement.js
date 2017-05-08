/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var temp = 1, i = 0;
    while (temp < num){
        i++;
        temp = Math.pow(2, i) -1;
    }
    return temp - num;
};

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var binaryArray = [];
    var sum = 0;
    var divd = parseInt(num/2);
    binaryArray.push(num%2);
    while(divd!==0){
        binaryArray.push(divd%2);
        divd = parseInt(divd/2);
    }
    for(var i=0; i < binaryArray.length; i++){
        if(binaryArray[i]===0){
            sum += Math.pow(2,i)
        }
    }
    return sum
};
