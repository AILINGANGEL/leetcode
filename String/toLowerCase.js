var toLowerCase = function(str) {
    let result = '';
    for(let i=0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        result += code < 91  && code > 64 ? String.fromCharCode(str.charCodeAt(i) + 32) : str[i];
    }
    return result;
};

var toLowerCase = function(str) {
  let ans = '';
  for(let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      if(code >= 65 && code <=90) {
          ans += String.fromCharCode(code + 32);
      } else {
          ans += str[i];
      }
  }
    return ans;
};
