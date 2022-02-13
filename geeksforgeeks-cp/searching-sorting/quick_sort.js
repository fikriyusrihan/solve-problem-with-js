function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, l, r) {
  // Select pivot
  let pivot = arr[r];

  // find the right place
  let i = l - 1;
  for (let j = l; j <= r; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, r);
  return i + 1;
}

function quicksort(arr, l, r) {
  if (l < r) {
    let i = partition(arr, l, r);
    quicksort(arr, l, i - 1);
    quicksort(arr, i + 1, r);
  }
}

let arr = [2, 3, 1, 2, 40, 312, 12, 3, 23, 12];
console.log(arr);
quicksort(arr, 0, arr.length - 1);
console.log(arr);
