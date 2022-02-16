/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let temp1 = new Array(m);
  let temp2 = new Array(n);

  for (let i = 0; i < m; i++) temp1[i] = nums1[i];
  nums2.forEach(function (item, index) {
    temp2[index] = item;
  });

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < m && j < n) {
    if (temp1[i] < temp2[j]) {
      nums1[k] = temp1[i];
      i++;
    } else {
      nums1[k] = temp2[j];
      j++;
    }
    k++;
  }

  while (i < m) {
    nums1[k] = temp1[i];
    i++;
    k++;
  }

  while (j < n) {
    nums1[k] = temp2[j];
    j++;
    k++;
  }
};
