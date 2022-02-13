const sieveOfEratosthenes = function (n) {
    let table = [];

    for (let i = 0; i <= n; i++) {
        table.push(true);
    }

    let p = 2;
    while (p * p <= n) {

        if (table[p] == true) {
            // Update all value
            for (let i = p * p; i <= n; i += p) {
                table[i] = false;
            }
        }

        p++;
    }

    // print prime number
    for (let i = 2; i <= n; i++) {
        if (table[i]) console.log(i);
    }
}

sieveOfEratosthenes(100);