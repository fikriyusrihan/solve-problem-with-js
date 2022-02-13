const primeFactors = function (n) {
    
    let c = 2;
    while (n > 1) {
        if (n % c == 0) {
            n = Number.parseInt(n / c);
            console.log(c);
        } else {
            c++;
        }
    }
}

primeFactors(123);