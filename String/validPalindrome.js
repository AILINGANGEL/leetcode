var validPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;
    let deletedI = false;
    let iPos;
    let deletedJ = false;
    let jPos;
    while (i < j) {
        if (s[i] !== s[j]) {
            if (deletedI === false) {
                deletedI = true;
                iPos = i;
                jPos = j;
                i++;
            } else if (deletedJ === false) {
                i = iPos;
                deletedJ = true;
                j = jPos - 1;
            } else {
                return false;
            }
        } else {
            i++;
            j--;
        }
    }
    return true;
};

console.log(validPalindrome('puupu'))

// console.log(validPalindrome('abaca'))


// puufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupu