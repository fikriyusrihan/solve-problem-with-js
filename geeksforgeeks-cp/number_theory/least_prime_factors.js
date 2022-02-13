const leastPrimeFactors = function (n) {
    // Inisialisasi tabel
    let table = Array(n + 1).fill(0);

    // Inisiaslisdsi nilai 1
    table[1] = 1;

    // Update tabel dengan least prime factors
    let p = 2;
    while (p <= n) {

        if (table[p] == 0) {
            table[p] = p;

            for (let j = p * p; j <= n; j += p) {
                if (table[j] == 0) table[j] = p;
            }
        }

        p++;
    }

    // Print all numbers
    for (let i = 1; i <= n; i++) {
        console.log(`Least prime factor of ${i}: ${table[i]}`);
    }
}

leastPrimeFactors(20);