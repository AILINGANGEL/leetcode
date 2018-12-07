var detectCapitalUse = function(word) {
    if (word.length < 2) return true;
    let i = 2;
    let isUpperFirstChar = /[A-Z]/.test(word[0]);
    let isUpperSecondChar = /[A-Z]/.test(word[1]);
    if (!isUpperFirstChar && isUpperSecondChar) return false;
    while (i < word.length) {
        if (isUpperSecondChar !== /[A-Z]/.test(word[i])) {
            return false;
        }
        i++;
    }
    return true;
}

var test = 'AAAAa';
console.log(detectCapitalUse(test));