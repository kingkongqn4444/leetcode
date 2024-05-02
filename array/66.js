var plusOne = function (digits) {
  let remember = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (remember === 1) {
      if (digits[i] < 9) {
        digits[i] = digits[i] + 1;
        remember = 0;
      } else {
        digits[i] = 0;
        if (i === 0) {
          digits.unshift(1);
        }
      }
    }
  }
  return digits;
};

console.log(plusOne([9]));
