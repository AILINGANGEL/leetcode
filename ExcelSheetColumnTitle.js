/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let charArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",'O',"P","Q","R","S","T","U","V","W","X","Y","Z"];
    let result = []
    while(n>26){
        if(n%26===0){
            result.unshift(charArray[25]);
            n = n/26 -1;
        }else{
            result.unshift(charArray[n%26-1]);
            n = parseInt(n/26);
        }
    }
    result.unshift(charArray[n-1]);
    return result.join("");
};
