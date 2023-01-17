const ftoc = function(num) {
  const ans = (num - 32) * (5 / 9);
  return Math.round(ans * 10) / 10;
};

const ctof = function(num) {
  const ans = (num * (9 / 5)) + 32;
  return Math.round(ans * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
