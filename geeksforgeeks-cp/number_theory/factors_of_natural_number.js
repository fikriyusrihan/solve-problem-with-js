const printDivisors = function (n) {
  let arr = [];
  let start = 1;
  let end = n;

  while (start < end) {
    if (n % start === 0) {
      end = Number.parseInt(n / start);

      if (start === end) {
        arr.push(start);
      } else {
        arr.push(end);
        arr.push(start);
      }
    }

    start++;
  }

  console.log(arr.sort((a, b) => a - b));
};

printDivisors(100);
