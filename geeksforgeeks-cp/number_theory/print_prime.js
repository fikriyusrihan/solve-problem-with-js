const printPrime = function (n) {
  // Buat tabel
  let prime = [];

  // Assign nilai true ke seluruh element hingga n
  for (let i = 0; i <= n; i++) prime[i] = true;

  // Beri tanda ke element yang bukan merupakan bilangan prima
  let p = 2;
  while (p * p <= n) {
    if (prime[p]) {
      for (let i = p * p; i <= n; i += p) {
        prime[i] = false;
      }
    }

    p++;
  }

  // Print seluruh element yg bernilai true
  for (let i = 2; i <= n; i++) {
    if (prime[i]) console.log(i);
  }
};

printPrime(10);
