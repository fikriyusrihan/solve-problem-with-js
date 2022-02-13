const activitySelection = function (start, end) {
    let counter = 1;
    let currentJob = end[0];

    for (let i = 1; i < start.length; i++) {
        if (start[i] >= currentJob) {
            currentJob = end[i];
            counter++;
        }
    }

    return counter;
}

console.log(activitySelection([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9]));