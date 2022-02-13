const primeFactors = function (n) {
  let factors = [];
  let table = new Array(n + 1).fill(0);

  // Fill the table with smallest factor
  let p = 2;
  while (p <= n) {
    if (table[p] == 0) {
      for (let i = p; i <= n; i += p) {
        table[i] = p;
      }
    }

    p++;
  }

  // algorithm
  while (n > 1) {
    factors.unshift(table[n]);
    n = n / table[n];
  }

  console.log(factors);
};

primeFactors(12246);
