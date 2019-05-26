var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        swap(s, i, j);
        i++;
        j--;
    }
};

var swap = function(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

var reverseString = function(s) {
    helper(s, 0, s.length - 1);
};

var helper = function(s, i, j) {
    if (i >= j) {
        return;
    }
    helper(s, i + 1, j - 1);
    let tmp = s[i];
    s[i] = s[j];
    s[j] = tmp;
    return s;
}