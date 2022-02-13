function gcd(a, b) {
  if (b % a === 0) return a;

  return gcd(b % a, a);
}

function phi(a) {
  let counter = 0;

  for (let i = 1; i < a; i++) {
    if (gcd(i, a) === 1) counter++;
  }

  return counter;
}

console.log(phi(2));
