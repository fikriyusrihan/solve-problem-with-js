/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  // Find string pattern
  const findStringRe = new RegExp(
    /(^ +[-]\d+)|(^ +\d+)|(^\d+)|(^[-]\d+)|(^ +[+]\d+)|(^[+]\d+)/
  );

  // Find string pattern from previous valid string (to convert positive number, we should get rid the + sign)
  const regex = new RegExp(/([-]\d+)|(\d+)/);

  let validString = findStringRe.exec(s);
  let number;

  validString === null
    ? (number = 0)
    : (number = Number(regex.exec(validString[0])[0]));

  if (number > 2147483647) number = 2147483647;
  else if (number < -2147483648) number = -2147483648;

  return number;
};
