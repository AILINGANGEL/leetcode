// var countPrimes = function(n) {
//     let result = 0;
//     for(let i = 2; i < n; i++) {
//         if(isPrime(i)) {
//             result++;
//         }
//     }
//     return result;
// };

// var isPrime = function(n) {
//     if(n < 2) return false;
//     let i = 2;
//     while(i < n) {
//         if(n%i === 0) return false;
//         i++;
//     }
//     return true;
// }

// var countPrimes = function(n) {
//     let result = 0;
//     let isPrimes = new Array(n);
//     isPrimes.fill(true, 2, n);
//     if (n < 2) return 0;
//     for (let i = 2; i < n; i++) {
//         if (isPrimes[i]) {
//             result++;
//             for (let j = 2; i * j < n; j++) {
//                 isPrimes[i * j] = false;
//             }
//         }
//     }
//     return result;
// }


// console.log(countPrimes(499979))


var countPrimes = function(n) {
    let notPrime = [true, true];
    let i = 2;
    let count = 0;
    while (i < n) {
        if (notPrime[i] !== true) {
            count++;
            let j = i;
            while (i * j < n) {
                notPrime[i * j] = true;
                j++;
            }
        }
        i++;
    }
    return count;
};

console.log(countPrimes(10000));