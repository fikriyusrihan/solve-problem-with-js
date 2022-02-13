const sumOfArray = function (arr) {
    let counter = 0;

    arr.forEach(element => {
        counter += element;
    });

    return counter;
}

const sumOfArrayR = function (arr) {
    if (arr.length == 0) return 0;
    else {
        return arr.pop() + sumOfArrayR(arr);
    }
}

console.log("With recursive method", sumOfArrayR([1, 2, 3, 4, 5]))
