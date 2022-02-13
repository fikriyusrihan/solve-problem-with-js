const minAndMax = function (arr) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    if (arr.length == 0) {
        min = 0;
        max = 0;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    console.log("Max value: ", max);
    console.log("Min value: ", min);
}

minAndMax([])