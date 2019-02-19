var kmp = function() {

}


// acbacdabcy

var buildShiftTable = function(pattern) {
    let shifts = new Array(pattern.length);
    shifts.fill(1);
    // let i = -1;
    // for (let j = 0; j < pattern.length; j++) {
    //     if (i !== -1 && pattern[i] === pattern[i]) {
    //         shifts[j] = ++i;
    //     } else {
    //         shifts[j] = 0;
    //     }
    // }

    let left = -1;
    for (let right = 0; right < pattern.length; right++) {
        while (left >= 0 && pattern[left] !== pattern[right])
            left -= shifts[left];
        shifts[right + 1] = right - left++;
    }

    console.log(shifts);
}

buildShiftTable('acbacdabcy')