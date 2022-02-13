const prefixSum = function (arr) {
    let prefixSums = [];

    prefixSums.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        prefixSums.push(prefixSums[i - 1] + arr[i]);
    }

    return prefixSums;
}

console.log(prefixSum([1, 2, 3, 4, 5, 6, 7, 8]));