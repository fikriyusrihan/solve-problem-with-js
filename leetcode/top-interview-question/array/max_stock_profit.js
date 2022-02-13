/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;
  let lembah = prices[0];
  let bukit = 0;

  for (let i = 1; i < prices.length - 1; i++) {
    // Mencari lembah
    if (lembah > prices[i]) {
      lembah = prices[i];
      bukit = prices[i];
    }

    // Mencari bukit
    if (bukit < prices[i]) {
      bukit = prices[i];

      if (bukit >= prices[i + 1]) {
        result += bukit - lembah;
        lembah = prices[i + 1];
        bukit = prices[i + 1];
      } else if (i + 1 == prices.length - 1) {
        bukit = prices[i + 1];
        result += bukit - lembah;
      }
    } else if (i + 1 == prices.length - 1) {
      if (lembah < prices[i + 1]) {
        result += prices[i + 1] - lembah;
      }
    }
  }

  if (prices.length === 2) {
    if (prices[1] > lembah) {
      return prices[1] - lembah;
    }
    return 0;
  }

  return result;
};
