function merge(arr, l, m, r) {
  let ll = m - l + 1;
  let lr = r - m;

  // Create temporary array
  let temp1 = new Array(ll);
  let temp2 = new Array(lr);

  // Move left side to temp1
  for (let i = 0; i < ll; i++) {
    temp1[i] = arr[i + l];
  }

  // Move right side to temp2
  for (let i = 0; i < lr; i++) {
    temp2[i] = arr[i + m + 1];
  }

  // start to merging and sorting
  let i = 0;
  let j = 0;
  let k = l;

  while (i < ll && j < lr) {
    if (temp1[i] <= temp2[j]) {
      arr[k] = temp1[i];
      i++;
    } else {
      arr[k] = temp2[j];
      j++;
    }

    k++;
  }

  while (i < ll) {
    arr[k] = temp1[i];
    i++;
    k++;
  }

  while (j < lr) {
    arr[k] = temp2[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l, r) {
  if (l >= r) return;

  let m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

// Driver code
let arr = [3, 4, 6, 2, 1, 4, 5, 6, 2, 3, 4, 6, 7, 8];

let start = 0;
let end = arr.length - 1;

console.log(arr);
mergeSort(arr, start, end);
console.log(arr);
