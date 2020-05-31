var kthGrammar = function(N, K) {
    if (N === 1 && K === 1) {
        return 0;
    }
    const num = kthGrammar(N - 1, Math.ceil(K / 2));
    const tmp = num === 0 ? '01' : '10';
    return K % 2 === 0 ? +tmp[1] : +tmp[0];
};