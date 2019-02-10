// //我的解法
// var isValidCharactor = function(c) {
//     return /[A-Za-z0-9]/.test(c); //只考虑字母和数字
// }

// var isPalindrome = function(s) {
//     if (s.length > 1) {
//         var i = 0;
//         var j = s.length - 1;
//         while (i < j) {
//             if (!isValidCharactor(s[i])) {
//                 i++;
//                 continue;
//             }
//             if (!isValidCharactor(s[j])) {
//                 j--;
//                 continue
//             }
//             if (s[i].toLowerCase() !== s[j].toLowerCase()) { //不区分大小写
//                 return false;
//             }
//             i++;
//             j--;
//         }
//         return true;
//     }
//     return true;
// };

//leetcode解法
var isPalindrome = function(s) {
    var nomalizedS = s.replace(/[^A-Za-z0-9]/g, "").split('').reverse().join('');
    var s = s.replace(/[^A-Za-z0-9]/g, "")
    return s.toLowerCase() === nomalizedS.toLowerCase();
};


var isPalindrome = function(s) {
    let tmp = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '').split('');
    return tmp.join('') === [...tmp].reverse().join('');
};

console.log(isPalindrome('race a car'))