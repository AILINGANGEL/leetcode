var reverseWords = function(s) {
    return s.split(' ').map(str => str.split('').reverse().join('')).join(' ');
};
