// var hammingWeight = function(n) {
//     let count = 0;
//     while (n) {
//         if (n % 2 === 1) {
//             count++;
//         }
//         n = Math.floor(n / 2);
//     }
//     return count;
// };

// var hammingWeight = function(n) {
//     let count = 0;
//     let mask = 1;
//     for (let i = 0; i < 32; i++) {
//         if (n & mask) {
//             count++;
//         }
//         mask <<= 1;
//     }
//     return count;
// };



var hammingWeight = function(n) {
    let count = 0;
    while (n) {
        count++;
        n &= (n - 1);
    }
    return count;
};



console.log(hammingWeight(3))