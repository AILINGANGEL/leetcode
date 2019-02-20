// var fizzBuzz = function(n) {
//     let result = [];
//     for (let i = 1; i < n + 1; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             result.push('FizzBuzz');
//         } else if (i % 3 === 0) {
//             result.push('Fizz');
//         } else if (i % 5 === 0) {
//             result.push('Buzz');
//         } else {
//             result.push(String(i));
//         }
//     }
//     return result;
// };

// var fizzBuzz = function(n) {
//     let result = [];
//     for (let i = 1; i < n + 1; i++) {
//         let temp = '';
//         if (i % 3 === 0) {
//             temp += 'Fizz';
//         }

//         if (i % 5 === 0) {
//             temp += 'Buzz';
//         }

//         if (temp == false) {
//             temp += String(i);
//         }
//         result.push(temp);
//     }
//     return result;
// }

var fizzBuzz = function(n) {
    let map = {
        3: 'Fizz',
        5: 'Buzz'
    }

    let result = [];
    for (let i = 1; i < n + 1; i++) {
        let temp = '';
        Object.keys(map).forEach((item) => {
            if (i % item === 0) {
                temp += map[item];
            }
        });

        if (temp == false) {
            temp += String(i);
        }
        result.push(temp);
    }
    return result;
}

var fizzBuzz = function(n) {
    let res = [];
    for(let i = 1; i<n+1; i++){
        let tmp = '';
        if(i%3===0){
            tmp += 'Fizz';
        }
        if(i%5===0){
            tmp += 'Buzz';
        }
        res.push(tmp?tmp:String(i));
    }
    return res;
};
console.log(fizzBuzz(15))
