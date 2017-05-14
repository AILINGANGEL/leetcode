/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    stringArray = s.split(" ");
    resultArray = [];
    for (var i = 0; i< stringArray.length; i++){
        resultArray.push(stringArray[i].split('').reverse().join(''));
    }
    return resultArray.join(" ");
};
