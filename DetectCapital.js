//520
var detectCapitalUse = function(word) {
    word = word.trim()
    var tempLength = word.length
    if (tempLength<=1){
        return true
    }else{
        var uppercaseStart = '[A-Z][a-z]{' + (tempLength -1) + '}'
        var testUppercase = '[A-Z]{'+tempLength+'}'
        var testLowercase = '[a-z]{'+tempLength+'}'
        var uppercaseStartReg = new RegExp(uppercaseStart)
        var allLowercaseReg = new RegExp(testLowercase)
        var allUppercaseReg = new RegExp(testUppercase)
       
        return uppercaseStartReg.test(word) || allLowercaseReg.test(word) || allUppercaseReg.test(word)
    }
};
