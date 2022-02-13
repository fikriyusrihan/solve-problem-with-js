var reverse = function (s) {
  

  let sign = "";

  if (s < 0) {
    sign = "-";
    s *= -1;
  }

  let arr = [...s.toString()];

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  if (sign !== "") {
    arr.unshift(sign);
  }

  let strNum = arr.join("");

  if (Number(strNum) < (Math.pow(2, 31)) * - 1 || Number(strNum) > (Math.pow(2, 31)) - 1) return 0;

  return Number(strNum);
};

console.log(reverse(1534236469));
console.log(typeof reverse(512));
