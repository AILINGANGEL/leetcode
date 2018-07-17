var merge = function(nums1, m, nums2, n) {
    var i = 0;
    var j = 0;
    var len = m;
    while (i<len&& j<n) {
        if(nums2[j] >= nums1[i]) {
            i++;
        } else {
            nums1.splice(i, 0, nums2[j]);
            i++;
            j++;
            len++;
        }
    }
    while(j<n) {
        nums1[i] = nums2[j];
        i++;
        j++;
    }
    if (nums1.length > m + n) {
        nums1.splice(m + n, nums1.length - m - n);
    }
};

var test1 = [4,0,0,0,0,0];
var m = 1;
var test2 = [1,2,3,5,6];
var n = 5;

merge(test1, m, test2, n);
console.log(test1);
