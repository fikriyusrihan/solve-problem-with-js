const binarySearch = function (arr, n) {

  let start = 0;
  let end = arr.length - 1;
  let center = Number.parseInt((start + end) / 2);

  while (start <= end) {
    if (arr[center] == n) return center;
    else if (arr[center] > n) {
      end = center - 1;
    } else {
      start = center + 1;
    }
    center = start + Number.parseInt((end - start) / 2);
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 2));
