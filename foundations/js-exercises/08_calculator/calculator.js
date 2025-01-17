const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (nums) {
  return nums.reduce((total, n) => total + n, 0);
};

const multiply = function (nums) {
  return nums.reduce((total, n) => total * n);
};

const power = function (base, pow) {
  return base ** pow;
};

const factorial = function (n) {
  let result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
