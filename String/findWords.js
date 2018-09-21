var helper = function(word) {
    let dict = {
        'Q': 1,
        'W': 1,
        'E': 1,
        'R': 1,
        'T': 1,
        'Y': 1,
        'U': 1,
        'I': 1,
        'O': 1,
        'P': 1,
        'A': 2,
        'S': 2,
        'D': 2,
        'F': 2,
        'G': 2,
        'H': 2,
        'J': 2,
        'K': 2,
        'L': 2
    };
    console.log(dict['T'])

    if (word.length === 0) return true;
    let index = dict[word[0].toUpperCase()];
    console.log(index);
    for (let i = 1; i < word.length; i++) {
        let temp = word[i].toUpperCase();
        console.log(temp);
        console.log(dict[temp])
        if (dict[temp] !== index) {
            return false;
        }
    }
    return true;
};

console.log(helper('qwertyuiop'))

var findWords = function(words) {
    let res = [];
    words.forEach(word => {
        if (helper(word))
            res.push(word);
    })
    return res;
};

var test = ["asdfghjkl", "qwertyuiop", "zxcvbnm"];
// console.log(findWords(test));