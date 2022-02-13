function gcd(a, b) {
    if (b % a === 0) return a;
    
    return gcd(b % a, a);
  }

function isPossible(a, b, c) {
    return (c % gcd(a, b)) === 0;
}

console.log(isPossible(3, 6, 8));