var isValid = function(s) {
    let stack = [];
    let i = 0;
    let temp = undefined;
    while (i < s.length) {
        if (isPair(temp, s[i])) {
            stack.pop();
            temp = stack[stack.length - 1];
        } else {
            stack.push(s[i]);
            temp = s[i];
        }
        i++;
    }
    return stack.length === 0;
};

var isPair = function(s, y) {
    if (s === '(') {
        return y === ')';
    } else if (s === '{') {
        return y === '}';
    } else if (s === '[') {
        return y === ']';
    }
}

console.log(isValid("]["))