/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const dict = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let pool = new Set();
    words.forEach(word=>{
        let result = '';
        for(let i = 0; i< word.length; i++) {
           result += dict[word.charCodeAt(i) - 97];
        }
        console.log(result);
        pool.add(result);
    })
    
    return pool.size;
};

let test = ["gin", "zen", "gig", "msg"];
console.log(uniqueMorseRepresentations(test)  )