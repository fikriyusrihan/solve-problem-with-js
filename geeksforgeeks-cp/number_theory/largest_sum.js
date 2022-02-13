const largestSum = function (arr) {
    let largestMax = Number.MIN_SAFE_INTEGER;
    let tempMax = 0;

    for (let i = 0; i < arr.length; i++) {
        tempMax += arr[i];
        if (tempMax < 0) tempMax = 0;
        if (tempMax > largestMax) largestMax = tempMax;
    }

    return largestMax;
}

console.log(largestSum([-2, -3, 4, -1, -2, 1, 5, -3]));