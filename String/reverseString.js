var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;
    while(i<j){
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
