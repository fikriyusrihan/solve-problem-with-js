const sliding = function (arr, n) {

    let windowSum = 0;
    let max = Number.MIN_SAFE_INTEGER;

    if (arr.length < n) return -1;

    // Initialize window sum;
    for (let i = 0; i < n; i++) {
        windowSum += arr[i];
        max = windowSum;
    }

    // Find max window
    for (let i = 0; i < arr.length - n; i++) {
        windowSum = windowSum - arr[i] + arr[i + n];

        if (windowSum > max) max = windowSum;
    }

    return max;

}

console.log(sliding([1, 2, 3, 7, 8, 9, 4, 5, 6], 3));