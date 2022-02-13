const divSum = function (n) {

    let start = 1;
    let end = n;
    let sum = 0;

    while (start <= end) {

        if (start === end) {
            sum += start;
            break;
        }

        if (n % start === 0) {
            end = Number.parseInt(end / start);
            sum += end;
            sum += start;

            console.log(start, end);
        } else start++;

        start++;
    }

    return sum;
};

console.log(divSum(30))
