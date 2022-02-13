const countFrequencies = function (arr) {

    let dict = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (dict.has(arr[i])) {
            let old = dict.get(arr[i]);
            dict.set(arr[i], old + 1);
        } else {
            dict.set(arr[i], 1);
        }
    }

    for (const elem of dict.keys()) {
        console.log(`${elem} = ${dict.get(elem)}`);
    }

}

countFrequencies([1, 1, 2, 3, 3, 4, 5, 4]);