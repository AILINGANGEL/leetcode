/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var a = 'qwertyuiop'; var b = 'asdfghjkl'; var c = 'zxcvbnm';
    var result = []
    for (var i = 0; i < words.length; i++){
        var firstChar = words[i].charAt(0).toLowerCase();
        var position;
        if (a.indexOf(firstChar)>-1){
            position = a;
        }else if (b.indexOf(firstChar)>-1){
            position = b;
        }else{
            position = c;
        }
        var all = true;
        for(let j = 1; j < words[i].length; j++){
            if(position.indexOf(words[i].charAt(j).toLowerCase())== -1){
                all = false
                break
            }
        }
        if(all)
            result.push(words[i])
    }
    return result;
};
