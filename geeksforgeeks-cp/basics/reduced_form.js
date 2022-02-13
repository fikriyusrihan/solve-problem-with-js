const reducedForm = function (arr) {
  let dict = new Map();
  let newArr = [];
  var sortedArray = new Array(...arr).sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    dict.set(sortedArray[i], i);
  }

  for (let i = 0; i < arr.length; i++) {
    newArr.push(dict.get(arr[i]));
  }

  return newArr;
};

console.log(reducedForm([2, 1, 5, 3]));
